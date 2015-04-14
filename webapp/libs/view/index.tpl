{assign var="title" value="Narrow the Gapp: Explore the gender pay gap by occupation"}
{assign var="description" value="Women{$phrasing} {$occupation} make {$earnings_gap} cents to the dollar men earn doing the same job. #NarrowTheGap"}
{assign var="image" value="http://narrowthegapp.com/images/narrow-the-gapp.png"}
{assign var="permalink" value="http://narrowthegapp.com/{if $slug neq 'total-full-time-wage-and-salary-workers'}gap/{$slug}{/if}"}
<!DOCTYPE html>
<html lang="en" itemscope itemtype="http://schema.org/">

  <head>
    <meta charset="utf-8">
    <title>The gender pay gap for women {$occupation} - Narrow the Gapp</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta itemprop="name" content="{$title}">
    <meta itemprop="description" content="{$description}">
    <meta itemprop="image" content="{$image}">
    <meta name="author" content="U.S. Bureau of Labor Statistics">
    <meta property="og:title" content="{$title}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://narrowthegapp.com/" />
    <meta property="og:image" content="{$image}" />
    <meta property="og:site_name" content="Narrow the Gapp" />
    <meta property="fb:admins" content="606837591" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="{$title}" />
    <meta name="twitter:description" content="{$description}" />
    <meta name="twitter:image" content="{$image}" />
    <meta name="twitter:url" content="{$permalink}" />

    <!-- Le styles -->
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600,700' rel='stylesheet' type='text/css'>
    <style type="text/css">
      body {
        padding-bottom: 40px;
        background-color:#0971B2; /*#F5F5F5;*/
        color: #fff;
        font-family: 'Open Sans', sans-serif;
        line-height: 1.75;
      }
      .jumbotron {
        background-color:#fff;
        color:#333;
        margin-top:30px;
      }
      .jumbotron h1 {
        font-weight: bold;
      }
      .jumbotron a {
        color:#333;
      }
      .jumbotron a:hover {
        color:#333;
        border-bottom: 1px solid #333;
      }
      .search {
        font-size:150%;
        height:auto;
        min-width: 400px;
      }
      .tt-dropdown-menu {
        z-index: 1000;
        min-width: 500px;
        padding: 4px 0 4px 4px;
        margin: 2px 0 0;
        font-size: 14px;
        text-align: left;
        list-style: none;
        background-color: #fff;
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
        border: 1px solid #ccc;
        border: 1px solid rgba(0,0,0,.15);
        border-radius: 4px;
        -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
        box-shadow: 0 6px 12px rgba(0,0,0,.175);
        color: #000;
      }
      .tt-suggestion {
        padding: 4px 4px 2px 8px;
        margin: 0 6px 0 0;
        font-weight: normal;
        color: #46bcff;
        border-radius: 4px;
        white-space: nowrap; // prevent links from randomly breaking onto new lines
      }

      .tt-suggestion h4 {
        color: #666;
        font-weight: 200;
      }

      .tt-suggestion a {
        color: #666;
        text-decoration: none;
      }

      .tt-suggestion a strong {
        font-weight: 600;
        color: #222;
      }

      .tt-suggestion.tt-cursor {
        background-color: #b21212; /* #46bcff;*/
      }

      .tt-suggestion.tt-cursor a,
      .tt-suggestion.tt-cursor a h3,
      .tt-suggestion.tt-cursor a h4 {
        text-decoration: none;
        color: #fff;
      }

      .tt-suggestion.tt-cursor a strong,
      .tt-suggestion.tt-cursor a h3 strong,
      .tt-suggestion.tt-cursor a h4 strong {
        font-weight: 600;
      }
      h2 {
        font-weight: 200;
      }
      h6 {
        font-weight: 200;
        color: #666;
      }
      a {
        color:#fff; /*#006DCC;*/
        border-bottom: 1px dotted #ccc;
      }
      a:hover {
        color:#fff; /*#006DCC;*/
        border-bottom: 1px solid #fff;
        text-decoration:none
      }
      blockquote {
        font-size: 16px;
        border: none;
        font-style: italic;
        margin: 14px 0;
      }
      blockquote footer {
        font-style: normal;
        color: white;
        padding-left: 20px;
      }
      .cat1 {
        margin-left:0px;
        font-weight:bold;
        font-size:125%;
        margin-top:10px;
      }
      .cat2 {
        margin-left:5px;
        font-weight:bold;
        font-size:110%;
        margin-top:5px;
      }
      .cat3 {
        margin-left:10px;
      }
      .jobtitle {
        margin-left:15px;
      }
    </style>

    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- Le fav and touch icons -->
    <link rel="shortcut icon" href="/images/favicon.ico">
    <link rel="apple-touch-icon" href="/images/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-touch-icon-114x114.png">
    <script type="text/javascript">var _sf_startpt=(new Date()).getTime()</script>
  </head>

  <body>
    <div id="fb-root"></div>
    <div class="container">

      <div class="row" style="margin-top:10px">
        <div class="col-md-3">
          <a href="/" role="button" class="btn btn-danger btn-lg active">Narrow the Gapp</a>
        </div>
        <div class="col-md-9">
          <div class="input-group" id="prefetch">
              <input class="typeahead search form-control" type="text" placeholder="{if $smarty.get.slug eq 'total-full-time-wage-and-salary-workers'}What's your occupation?{else}Check another occupation{/if}">
          </div><!-- /input-group -->
        </div><!-- /.col-lg-6 -->
      </div>

      <!-- Main hero unit for a primary call to action -->
      <div class="jumbotron">
        <div style="float:right">
            <a href="https://twitter.com/share" class="twitter-share-button" data-url="{$permalink}" data-lang="en" data-text="Women{$phrasing} {$occupation_short_version} make {$earnings_gap} cents to the dollar men earn #NarrowTheGap" data-count="vertical">Tweet</a>
            <div class="fb-like" data-href="{$permalink}" data-send="false" data-width="50" data-show-faces="true" data-layout="box_count" style="margin-bottom:3px;top:-3px;padding-left:6px;"></div>
        </div>
        <h1>Women{$phrasing} <span style="color:#1485CC">{$occupation}</span> make <span style="color:#b21212">{$earnings_gap}&nbsp;cents</span> to the dollar men earn doing the same job.</h1>
        <br>
        <p>That's <strong style="color:#b21212">${$less_per_week}</strong> out of a weekly paycheck, which means she gets paid <strong style="color:#b21212">${($less_per_week * 52)|number_format}</strong> less per year.</p>

        <h6>Wage gap calculated from 2014 median weekly earnings of full-time salary workers in the United States as per the <a href="http://www.bls.gov/cps/cpsaat39.htm">U.S. Bureau of Labor Statistics</a>.</h6>
      </div>

      <div class="row">
        <div class="col-md-4">
          <h2>Unfair and Illegal</h2>
           <p>Over 50 years after President Kennedy signed the <a href="http://www.eeoc.gov/laws/statutes/epa.cfm">Equal Pay Act</a>, on average women are still paid less than their male counterparts for doing comparable jobs in the U.S. &mdash; that's called the pay gap. It means that each time the average woman starts a new job, she's likely to start from a lower base salary than her male counterparts.</p>
           <p>Just as interest compounds, so does the pay gap. As a woman moves from job to job during her career, the pay gap between her and her male colleagues is likely to become wider and wider.</p>
           <p><a href="/gap/legal-occupations">Legal occupations</a> and <a href="/gap/personal-financial-advisors">personal financial advisors</a> suffer the largest gender pay gaps. <a href="/gap/maids-and-housekeeping-cleaners">Maids and housekeeping cleaners</a> and <a href="/gap/food-preparation-workers">food preparation workers</a> have the smallest pay gaps.</p>
           <h2>{2058 - $year} more years</h2>
           <p>Unequal pay isn't just unfair, it's illegal. But unless men and women who have the same job discuss what they're getting paid, unequal pay can go unaddressed indefinitely. At the current pace, it will <a href="http://www.newsweek.com/gender-pay-gap-wont-close-another-43-years-314249">take until 2058</a> for women and men’s earnings to reach pay parity. Let's make it happen sooner.</p>
           <p>Women make up nearly half of the labor force and mothers are the primary or co-breadwinners in the majority of families. When women aren't paid fairly, families suffer and the American economy suffers.</p>
        </div>
        <div class="col-md-4">
          <h2>Narrow the Gap</h2>
          <p>Insist on equal pay for equal work in your and your loved ones' workplaces. Here's what you can do.</p>
          <ul>
          <li><strong>Get educated</strong> about <a href="http://www.eeoc.gov/laws/types/equalcompensation.cfm">Equal Pay and Compensation Discrimination</a>.</li>
          <li><strong>Raise awareness</strong> about the pay gap. To start, tweet, like, share, +1, and blog a page from this site.</li>
          <li><strong>Talk to employees and employers</strong> you know about the pay gap, salary negotiation techniques, and equal pay laws.</li>
          <li><strong>Change the numbers</strong> by citing the numbers. Boatloads of data just like this is freely available from the <a href="http://www.dol.gov/">U.S. Department of Labor</a> and beyond.</li>
          </ul>

          <h2>Find out more</h2>

            <div class="media">
              <div class="media-left">
                <a href="http://www.aauw.org/files/2013/02/The-Simple-Truth-2013.pdf">
                  <h2 class="media-object glyphicon glyphicon-save-file"></h2>
                </a>
              </div>
              <div class="media-body">
                <p class="media-heading">The Institute for Women's Policy Research's report <a href="http://www.aauw.org/files/2013/02/The-Simple-Truth-2013.pdf">The Status of Women in the States: 2015 Employment and Earnings</a> (PDF, 52 pages)</p>
              </div>
            </div>
            <div class="media">
              <div class="media-left">
                <a href="http://www.catalyst.org/knowledge/myth-ideal-worker-does-doing-all-right-things-really-get-women-ahead">
                  <h2 class="media-object glyphicon glyphicon-save-file"></h2>
                </a>
              </div>
              <div class="media-body">
                <p class="media-heading">Catalyst.org's research report <a href="http://www.catalyst.org/knowledge/myth-ideal-worker-does-doing-all-right-things-really-get-women-ahead">The Myth of the Ideal Worker: Does Doing All The Right Things Really Get Women Ahead?</a> (PDF, 21 pages)</p>
              </div>
            </div>
            <div class="media">
              <div class="media-left">
                <a href="http://www.amazon.com/o/ASIN/0553383876/ref=nosim/lifehackerboo-20">
                  <h2 class="media-object glyphicon glyphicon-book"></h2>
                </a>
              </div>
              <div class="media-body">
                <p class="media-heading"><i><a href="http://www.amazon.com/o/ASIN/0553383876/ref=nosim/lifehackerboo-20">Women Don't Ask: The High Cost of Avoiding Negotiation--and Positive Strategies for Change</a></i> by Linda Babcock and Sara Laschever (Book, 272 pages)</p>
              </div>
            </div>
            <div class="media">
              <div class="media-left">
                <a href="http://www.reddit.com/r/TwoXChromosomes/comments/hvv2m/i_work_for_a_large_multinational_tech_company_i/">
                  <h2 class="media-object glyphicon glyphicon-comment"></h2>
                </a>
              </div>
              <div class="media-body">
                <p class="media-heading">Hiring manager at a multinational tech company: <a href="http://www.reddit.com/r/TwoXChromosomes/comments/hvv2m/i_work_for_a_large_multinational_tech_company_i/">"I regularly hire women for 65% to 75% of what men make. I am sick of it. Here is why it happens and how you can avoid it."</a></p>
              </div>
            </div>

       </div>
        <div class="col-md-4">
          <h2>Have the Talk</h2>
          <blockquote>
            <p>"Women work fewer hours than men so it follows they earn less."</p>
            <footer>The data set presented here only counts the salaries of full-time workers.</footer>
          </blockquote>


          <blockquote>
            <p>"Women choose lower-paying jobs so that's why there's a pay gap."</p>
            <footer>This data compares the salaries of women and men in the same jobs, from <a href="/gap/janitors-and-building-cleaners">janitors</a> to <a href="/gap/chief-executives">executives</a>.</footer>
          </blockquote>


          <blockquote>
            <p>"Women don't negotiate their salary as aggressively as men so it's their fault there's a pay gap."</p>
            <footer>Better negotiation techniques can help close the wage gap, but the problem is multi-faceted and systemic.</footer>
          </blockquote>


          <blockquote>
            <p>"Women choose to stay home with their kids so they have less professional experience than men and thus should earn less."</p>
            <footer><a href="http://www.seattletimes.com/opinion/close-the-gender-wage-gap/">Studies show</a> the pay gap exists whether or not women have children.</footer>
          </blockquote>


          <blockquote>
            <p>"In a lot of jobs, there's no pay gap&mdash;and sometimes, women earn more than men."</p>
            <footer>Pay disparity does not exist in every occupation &mdash; but across all occupations, women consistently earn less at the same jobs.</footer>
          </blockquote>

        </div>
      </div>

      <hr>

      <footer>
        <p>A <a href="http://ginatrapani.org">Gina Trapani</a> Production. <a href="http://github.com/ginatrapani/narrowthegapp">Fork this web site on GitHub.</a></p>
      </footer>
      <a style="visibility:hidden;" href="https://plus.google.com/113612142759476883204?rel=author">Gina Trapani</a>
    </div> <!-- /container -->

    <!-- Dumb hack to give Pinterest bookmarklet an image, argh -->
    <img src="http://narrowthegapp.com/images/narrow-the-gapp.png" style="display:none;"/>


    {literal}
    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>

    <script>(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=64091411419";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>

    <script type="text/javascript">
    var _sf_async_config={uid:34052,domain:"narrowthegapp.com"};
    (function(){
      function loadChartbeat() {
        window._sf_endpt=(new Date()).getTime();
        var e = document.createElement('script');
        e.setAttribute('language', 'javascript');
        e.setAttribute('type', 'text/javascript');
        e.setAttribute('src',
           (("https:" == document.location.protocol) ? "https://a248.e.akamai.net/chartbeat.download.akamai.com/102508/" : "http://static.chartbeat.com/") +
           "js/chartbeat.js");
        document.body.appendChild(e);
      }
      var oldonload = window.onload;
      window.onload = (typeof window.onload != 'function') ?
         loadChartbeat : function() { oldonload(); loadChartbeat(); };
    })();

    </script>

    {/literal}

    <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-436966-8']);
      _gaq.push(['_trackPageview']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
      </script>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="/extlibs/typeahead.bundle.js"></script>
    <script src="/extlibs/handlebars-v3.0.1.js"></script>

      <script type="text/javascript">
{literal}
      var occupations = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('occupation_name'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        prefetch: 'http://narrowthegapp.com/gaps/'
      });

      occupations.initialize();

      $('#prefetch .typeahead').typeahead(null, {
        name: 'occupation-gaps',
        displayKey: 'occupation_name',
        source: occupations.ttAdapter(),
        templates: {
          empty: [
            '<div class="empty-message">',
            'No occupations match',
            '</div>'
          ].join('\n'),
          suggestion: Handlebars.compile('<a href="/gap/{{slug}}"><div class="occupation-result">{{occupation_name}}</div></a>')
        }
      }).on('typeahead:selected', function (e, suggestion, data) {
          document.location = '/gap/' + suggestion.slug;
      });

{/literal}

    </script>

  </body>
</html>
