<?php
/************************************************/
/***  APPLICATION CONFIG                      ***/
/************************************************/

// Application title prefix - 'ThinkUp' will be appended to it in page titles
$ISOSCELES_CFG['app_title']                 = 'Narrow the Gapp';

// Public path of isosceles's /webapp/ folder on your web server.
// For example, if the /webapp/ folder is located at http://yourdomain/isosceles/, set to '/isosceles/'.
$ISOSCELES_CFG['site_root_path']            = '/';

// Server path to /isosceles/ source code folder, dirname( __FILE__ ) . '/'; by default
$ISOSCELES_CFG['source_root_path']          = dirname(dirname(dirname(dirname(dirname( __FILE__ ))))) . '/';

// Server path to writable data directory, $ISOSCELES_CFG['source_root_path'] . 'data/' by default
$ISOSCELES_CFG['datadir_path']              = '/home/vagrant/data/'; //$ISOSCELES_CFG['source_root_path'] . 'data/';

// Application template path
$ISOSCELES_CFG['templates_path']            = $ISOSCELES_CFG['source_root_path'] . 'webapp/libs/view';

// Your timezone
$ISOSCELES_CFG['timezone']                  = 'America/New_York';

// Toggle Smarty caching. true: Smarty caching on, false: Smarty caching off
$ISOSCELES_CFG['cache_pages']               = false;

// Smarty file cache lifetime in seconds; defaults to 600 (10 minutes)caching
$ISOSCELES_CFG['cache_lifetime']               = 600;

// The crawler, when triggered by requests to the RSS feed, will only launch if it's been
// 20 minutes or more since the last crawl.
$ISOSCELES_CFG['rss_crawler_refresh_rate']  = 20;

/************************************************/
/***  DATABASE CONFIG                         ***/
/************************************************/

$ISOSCELES_CFG['db_host']                   = 'localhost'; //On a shared host? Try mysql.yourdomain.com, or see your web host's documentation.
$ISOSCELES_CFG['db_type']                   = 'mysql';
$ISOSCELES_CFG['db_user']                   = 'root';
$ISOSCELES_CFG['db_password']               = 'equalpayforequalwork';
$ISOSCELES_CFG['db_name']                   = 'narrowthegapp';
$ISOSCELES_CFG['db_socket']                 = '';
$ISOSCELES_CFG['db_port']                   = '';
$ISOSCELES_CFG['table_prefix']              = 'ntg_';

/************************************************/
/***  DEVELOPER CONFIG                        ***/
/************************************************/

// Full server path to crawler.log.
// $ISOSCELES_CFG['log_location']              = $ISOSCELES_CFG['datadir_path'] . '/logs/crawler.log';
$ISOSCELES_CFG['log_location']              = false;

// Verbosity of log. 0 is everything, 1 is user messages, 2 is errors only
$ISOSCELES_CFG['log_verbosity']             = 0;

// Full server path to stream processor log.
// $ISOSCELES_CFG['stream_log_location']       = $ISOSCELES_CFG['datadir_path'] . '/logs/stream.log';
$ISOSCELES_CFG['stream_log_location']       = false;

// Full server path to sql.log. To not log queries, set to null.
// $ISOSCELES_CFG['sql_log_location']          = $ISOSCELES_CFG['datadir_path'] . '/logs/sql.log';
$ISOSCELES_CFG['sql_log_location']          = null;

// How many seconds does a query take before it gets logged as a slow query?
$ISOSCELES_CFG['slow_query_log_threshold']  = 2.0;

$ISOSCELES_CFG['debug']                     = true;

$ISOSCELES_CFG['enable_profiler']           = false;

// Set this to true if you want your PDO object's database connection's charset to be explicitly set to utf8.
// If false (or unset), the database connection's charset will not be explicitly set.
$ISOSCELES_CFG['set_pdo_charset']           = false;

//TESTS OVERRIDE: Run against the tests database and use unpackaged developer /isosceles/webapp/ folder structure
if ((isset($_SESSION["MODE"]) && $_SESSION["MODE"] == "TESTS") && ! isset($_SESSION["RD_MODE"])
|| (getenv("MODE")=="TESTS" && ! getenv("RD_MODE")=="1")) {
    // Full server path to /isosceles/ source code folder.
    //$ISOSCELES_CFG['source_root_path']          = '/your-server-path-to/isosceles/';
    //$ISOSCELES_CFG['db_user']                   = 'your_test_database_username';
    //$ISOSCELES_CFG['db_password']               = 'your_test_database_password';
    //$ISOSCELES_CFG['db_name']                   = 'your_test_database_name'; //by default, isosceles_tests
    ini_set('error_reporting', E_STRICT);
}

//Test RAM disk database override: Set this to run tests against the RAM disk tests database
if (isset($_SESSION["RD_MODE"]) || getenv("RD_MODE")=="1") {
    $ISOSCELES_CFG['db_user']                   = 'your_ram_disk_test_database_username';
    $ISOSCELES_CFG['db_password']               = 'your_ram_disk_test_database_password';
    $ISOSCELES_CFG['db_name']                   = $ISOSCELES_CFG['db_name'] . '_rd';
}