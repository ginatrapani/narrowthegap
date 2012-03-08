<?php
/**
 * Display Gap Controller
 *
 * The controller which displays occupational pay gap information.
 *
 * @author Gina Trapani <ginatrapani [at] gmail [dot] com>
 * @license http://www.gnu.org/licenses/gpl.html
 */
class DisplayGapController extends Controller {
    /**
     * Handle request parameters for a pay gap ID and return rendered view.
     *
     * @return str Markup which renders controller results.
     */
    public function control() {
        //Set the view template file to use
        $this->setViewTemplate('index.tpl');

        //Get a random occupation if a specific one isn't requested
        if (!isset($_GET['i'])) {
            $occup_gap_dao = new OccupationGapMySQLDAO();
            $gap_id = $occup_gap_dao->getRandomGapId();
            //set $_GET so that app uses its cache key
            $_GET['i'] = $gap_id;
        }

        //Only load data from database if file cache is expired
        if ($this->shouldRefreshCache() ) {
            if (!isset($occup_gap_dao)) {
                $occup_gap_dao = new OccupationGapMySQLDAO();
            }

            $gap_array = $occup_gap_dao->getGap($_GET["i"]);

            //That gap doesn't exist; so get a random one to show
            if (!isset($gap_array['id'])) {
                $gap_id = $occup_gap_dao->getRandomGapId();
                $_GET['i'] = $gap_id;
                $gap_array = $occup_gap_dao->getGap($_GET["i"]);
            }

            $this->addToView('id', $gap_array['id']);
            $this->addToView('earnings_gap', $gap_array['earnings_gap']);
            $occupation_name = $this->cleanOccupationName($gap_array['occupation']);
            $this->addToView('occupation', $occupation_name);

            // replace ', and ' and ' and ' with ' & ' for shorteneded, tweet-friendly version
            $this->addToView('occupation_short_version', str_replace(', & ', ' & ',
            str_replace(' and ', ' & ', $occupation_name)));

            $this->addToView('less_per_week',
            $gap_array['m_median_weekly_earnings']-$gap_array['w_median_weekly_earnings']);

            $occupations_array = $occup_gap_dao->getAllOccupations();
            $this->addToView('occupations_array', $occupations_array);
            // Get the phrasing right
            if (substr($occupation_name, (strlen($occupation_name)-strlen('occupations')))=='occupations') {
                $this->addToView('phrasing', ' who work in');
            } else {
                $this->addToView('phrasing', '');
            }

            //Thanks to Andy Baio, Kevin Purdy, and TFB for their additions to this list
            $exclamations = array("Holy poop!", "That's bananas!", "In this day and age?!", "Stupid!", "So unfair!",
            "Unacceptable!", "Outrageous!", "Complete BS!", "Ugh!", "Blurg!", "Oof!", "What garbage!",
            "Aw hell no!", "Utter crap!", "No effin' way!", "Such nonsense!", "Epic FAIL!", "Insane!", "So lame!",
            "That's bonkers!", "Gah!", "Idiotic!", "Ridiculous!",  "Not okay!", "Bah!",
            "That's wack!", "So wrong!", "Intolerable!", "What the what?!", "Shut the front door!",
            "Sweet grandmother's spatula!", "Craptastic!", "Oh COME on!", "GTFO!", "Wait, seriously?!");
            $exclamation_key = array_rand($exclamations);
            $this->addToView('exclamation', $exclamations[$exclamation_key]);
        }
        return $this->generateView();
    }

    /**
     * Clean awkward phrasing from DOL occupation names for easier reading in context.
     * @param str $occupation_name Raw occupation name from database
     * @return str Cleaned occupation name
     */
    private function cleanOccupationName($occupation_name) {
        $occupation_name = strtolower($occupation_name);
        //ends with , hand
        if (substr($occupation_name, (strlen($occupation_name)-strlen(', hand')))==', hand') {
            $occupation_name = substr($occupation_name, 0, (strlen($occupation_name)-strlen(', hand')));
        }
        //ends with , all other
        if (substr($occupation_name, (strlen($occupation_name)-strlen(', all other')))==', all other') {
            $occupation_name = substr($occupation_name, 0, (strlen($occupation_name)-strlen(', all other')));
        }
        //starts with miscellaneous
        if (substr($occupation_name, 0, strlen('miscellaneous '))=='miscellaneous ') {
            $occupation_name = substr($occupation_name, strlen('miscellaneous '));
        }
        //starts with other
        if (substr($occupation_name, 0, strlen('other '))=='other ') {
            $occupation_name = substr($occupation_name, strlen('other '));
        }
        //waitresses and waiters - waiters
        if ($occupation_name == 'waiters and waitresses' ) {
            $occupation_name = 'waitresses';
        }
        //total, 16 years and over just 16 years and over
        if ($occupation_name == 'total, 16 years and over' ) {
            $occupation_name = 'in the U.S.';
        }
        return $occupation_name;
    }
}