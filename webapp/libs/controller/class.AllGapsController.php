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
        $occup_gap_dao = new OccupationGapMySQLDAO();
        $all_gaps = $occup_gap_dao->getAllOccupations(2014);
        $this->setJsonData($all_gaps);
        return $this->generateView();
    }
}
