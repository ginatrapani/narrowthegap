<?php
/**
 * Occupation Gap Data Access Object implemented for MySQL
 *
 * Accesses the ntg_occupation_gap database table.
 *
 * @author Gina Trapani <ginatrapani [at] gmail [dot] com>
 * @license http://www.gnu.org/licenses/gpl.html
 */
class OccupationGapMySQLDAO extends PDODAO {
    /**
     * @var int Total number rows in the table, hardcoded for performance reasons
     */
    var $total_occupations = 136;

    /**
     * Get random Gap ID
     * @return int Random gap ID
     */
    public function getRandomGapId() {
        $random_occup_index = rand ( 1, $this->total_occupations );
        $q  = "SELECT id FROM  #prefix#occupation_gap LIMIT :start, 1";
        $vars = array(
            ':start'=>$random_occup_index
        );
        $ps = $this->execute($q, $vars);
        $row = $this->getDataRowAsArray($ps);
        return $row['id'];
    }

    /**
     * Get gap by ID.
     * @param int $id
     * @return arr Pay gap information
     */
    public function getGap($id) {
        $q  = "SELECT id, primary_category, secondary_category, tertiary_category, job_title, earnings_gap, ";
        $q .= "m_median_weekly_earnings, w_median_weekly_earnings FROM ";
        $q .= " #prefix#occupation_gap WHERE id=:id;";
        $vars = array(
            ':id'=>$id
        );
        $ps = $this->execute($q, $vars);
        $row = $this->getDataRowAsArray($ps);
        if (isset($row['earnings_gap'])) {
            $result['earnings_gap'] = $row['earnings_gap'];
            $result['id'] = $row['id'];
            $result['m_median_weekly_earnings'] = $row['m_median_weekly_earnings'];
            $result['w_median_weekly_earnings'] = $row['w_median_weekly_earnings'];
            if ($row['job_title'] != '') {
                $result['occupation'] = $row['job_title'];
            } elseif ($row['tertiary_category'] != '') {
                $result['occupation'] = $row['tertiary_category'];
            } elseif ($row['secondary_category'] != '') {
                $result['occupation'] = $row['secondary_category'];
            } elseif ($row['primary_category'] != '') {
                $result['occupation'] = $row['primary_category'];
            }
            return $result;
        } else {
            return null;
        }
    }

    /**
     * Get gap by slug and year.
     * @param int $year
     * @param str $slug
     * @return arr Pay gap information
     */
    public function getGapByYearSlug($year, $slug) {
        $q  = "SELECT id, primary_category, secondary_category, tertiary_category, job_title, earnings_gap, ";
        $q .= "m_median_weekly_earnings, w_median_weekly_earnings FROM ";
        $q .= " #prefix#occupation_gap WHERE year=:year AND slug=:slug;";
        $vars = array(
            ':slug'=>$slug,
            ':year'=>$year
        );
        $ps = $this->execute($q, $vars);
        $row = $this->getDataRowAsArray($ps);
        if (isset($row['earnings_gap'])) {
            $result['earnings_gap'] = $row['earnings_gap'];
            $result['id'] = $row['id'];
            $result['m_median_weekly_earnings'] = $row['m_median_weekly_earnings'];
            $result['w_median_weekly_earnings'] = $row['w_median_weekly_earnings'];
            if ($row['job_title'] != '') {
                $result['occupation'] = $row['job_title'];
            } elseif ($row['tertiary_category'] != '') {
                $result['occupation'] = $row['tertiary_category'];
            } elseif ($row['secondary_category'] != '') {
                $result['occupation'] = $row['secondary_category'];
            } elseif ($row['primary_category'] != '') {
                $result['occupation'] = $row['primary_category'];
            }
            return $result;
        } else {
            return null;
        }
    }

    /**
     * Get all occupations
     * @return arr List of occupations with pay gap information
     */
    public function getAllOccupations() {
        $q  = "SELECT id, primary_category, secondary_category, tertiary_category, job_title FROM ";
        $q .= " #prefix#occupation_gap;";
        $ps = $this->execute($q);
        $rows = $this->getDataRowsAsArrays($ps);
        return $rows;
    }
}