<?php
/**
 * All Gaps Controller
 *
 * JSON output of all wage gaps. Use this one-time to save output to a flat file.
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
        $this->setUpJsonResponse();
        $occup_gap_dao = new OccupationGapMySQLDAO();
        $all_dirty_gaps = $occup_gap_dao->getAllOccupations(2015);
        $clean_gaps = array();
        foreach ($all_dirty_gaps as $gap) {
            $gap['occupation_name'] = DisplayGapController::cleanOccupationName($gap['occupation_name'], false);
            $clean_gaps[] = $gap;

        }
        $this->setJsonData($clean_gaps);
        return $this->generateView();
    }
}
