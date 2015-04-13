<?php
/**
 * All Gaps Controller
 *
 * JSON output of all wage gaps.
 *
 * @author Gina Trapani <ginatrapani [at] gmail [dot] com>
 * @license http://www.gnu.org/licenses/gpl.html
 */
class AllGapsController extends Controller {
    /**
     * Handle request parameters for a pay gap ID and return rendered view.
     *
     * @return str Markup which renders controller results.
     */
    public function control() {
        //Only load data from database if file cache is expired
        //if ($this->shouldRefreshCache() ) {
            $occup_gap_dao = new OccupationGapMySQLDAO();
            $all_gaps = $occup_gap_dao->getAllOccupations();
            $this->setJsonData($all_gaps);



        //}
        return $this->generateView();
    }
}
