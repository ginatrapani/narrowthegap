import React, { Component } from "react";
import GapAPI from "../GapAPI.js";
import Header from "./Header.js";
import Footer from "./Footer.js";

class ScrollToTopOnMount extends Component {
    componentDidMount(prevProps) {
        window.scrollTo(0, 0);
    }

    render() {
        return null;
    }
}

class Gap extends Component {
    getPhrasing(occupationName) {
        if (occupationName.endsWith("occupations")) {
            return " who work in";
        }
        return "";
    }

    render() {
        const gapSlug =
            this.props.match.params.gapSlug === undefined
                ? "total-full-time-wage-and-salary-workers"
                : this.props.match.params.gapSlug;
        const gap = GapAPI.get(gapSlug);
        if (
            !gap ||
            gap.cents_to_dollar === -1 /* not enough data */ ||
            gap.cents_to_dollar > 100 /* no gap */
        ) {
            // @TODO Create a proper NotFound component
            return <div>Four-oh-four not found</div>;
        }
        const lessPerWeek =
            gap.men_median_weekly_earnings - gap.women_median_weekly_earnings;

        const tweetText =
            "Women" +
            this.getPhrasing(gap.occupation_name) +
            " " +
            GapAPI.cleanOccupationName(gap.occupation_name) +
            " make " +
            gap.cents_to_dollar +
            " cents to the dollar men earn #NarrowTheGap";

        const permalink = "https://narrowthegapp.com/gap/" + gapSlug;

        // @TODO Stop using inline CSS
        var inTheUSStyle = {
            color: "#1485CC"
        };
        var centsStyle = {
            color: "#b21212"
        };
        var weeklyGapStyle = {
            color: "#b21212"
        };
        var yearlyGapStyle = {
            color: "#b21212"
        };

        return (
            <div className="App">
                <ScrollToTopOnMount />
                <div className="container">
                    <Header />
                    {/* Main hero unit for a primary call to action */}
                    <div className="jumbotron">
                        <h1>
                            Women{this.getPhrasing(gap.occupation_name)}{" "}
                            <span style={inTheUSStyle}>
                                {GapAPI.cleanOccupationName(
                                    gap.occupation_name
                                )}
                            </span>{" "}
                            make{" "}
                            <span style={centsStyle}>
                                {gap.cents_to_dollar}&nbsp;cents
                            </span>{" "}
                            to the dollar men earn doing the same job.
                        </h1>
                        <br />
                        <p>
                            That&#8217;s{" "}
                            <strong style={weeklyGapStyle}>
                                ${lessPerWeek}
                            </strong>{" "}
                            out of a weekly paycheck, which means she gets paid{" "}
                            <strong style={yearlyGapStyle}>
                                ${(lessPerWeek * 52).toLocaleString()}
                            </strong>{" "}
                            less per year.
                        </p>
                        <a
                            href="https://twitter.com/share"
                            className="twitter-share-button"
                            data-url={permalink}
                            data-lang="en"
                            data-text={tweetText}
                        >
                            Tweet
                        </a>
                        <span
                            className="fb-share-button"
                            data-href={permalink}
                            data-layout="button"
                        />
                        <br />
                        <h6>
                            <a href="/all">See all occupations.</a> Wage gap
                            calculated from {gap.year} median weekly earnings of
                            full-time salary workers in the United States as per
                            the{" "}
                            <a href="http://www.bls.gov/cps/cpsaat39.htm">
                                U.S. Bureau of Labor Statistics
                            </a>.
                        </h6>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Unfair and Illegal</h2>
                            <p>
                                Over 50 years after President Kennedy signed the{" "}
                                <a href="http://www.eeoc.gov/laws/statutes/epa.cfm">
                                    Equal Pay Act
                                </a>, on average women are still paid less than
                                their male counterparts for doing comparable
                                jobs in the U.S. &mdash; that&#8217;s called the
                                pay gap. It means that each time the average
                                woman starts a new job, she&#8217;s likely to
                                start from a lower base salary than her male
                                counterparts.
                            </p>
                            <p>
                                Just as interest compounds, so does the pay gap.
                                As a woman moves from job to job during her
                                career, the pay gap between her and her male
                                colleagues is likely to become wider and wider.
                            </p>
                            <p>
                                <a href="/gap/securities-commodities-and-financial-services-sales-agents">
                                    Securities, commodities, and financial
                                    services sales agents
                                </a>{" "}
                                and{" "}
                                <a href="/gap/personal-financial-advisors">
                                    personal financial advisors
                                </a>{" "}
                                suffer the largest gender pay gaps.{" "}
                                <a href="/gap/counselors">Counselors</a> and{" "}
                                <a href="/gap/health-practitioner-support-technologists-and-technicians">
                                    health practitioner support technologists
                                    and technicians
                                </a>{" "}
                                have the smallest pay gaps.
                            </p>
                            <h2>41 more years</h2>
                            <p>
                                Unequal pay isn&#8217;t just unfair, it&#8217;s
                                illegal. But unless men and women who have the
                                same job discuss what they&#8217;re getting
                                paid, unequal pay can go unaddressed
                                indefinitely. At the current pace, it will{" "}
                                <a href="http://www.newsweek.com/gender-pay-gap-wont-close-another-43-years-314249">
                                    take until 2058
                                </a>{" "}
                                for women and men’s earnings to reach pay
                                parity. Let&#8217;s make it happen sooner.
                            </p>
                            <p>
                                Women make up nearly half of the labor force and
                                mothers are the primary or co-breadwinners in
                                the majority of families. When women
                                aren&#8217;t paid fairly, families suffer and
                                the American economy suffers.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h2>Narrow the Gap</h2>
                            <p>
                                Insist on equal pay for equal work in your and
                                your loved ones&#8217; workplaces. Here&#8217;s
                                what you can do.
                            </p>
                            <ul>
                                <li>
                                    <strong>Get educated</strong> about{" "}
                                    <a href="http://www.eeoc.gov/laws/types/equalcompensation.cfm">
                                        Equal Pay and Compensation
                                        Discrimination
                                    </a>.
                                </li>
                                <li>
                                    <strong>Raise awareness</strong> about the
                                    pay gap. To start, tweet, like, share, +1,
                                    and blog a page from this site.
                                </li>
                                <li>
                                    <strong>
                                        Talk to employees and employers
                                    </strong>{" "}
                                    you know about the pay gap, salary
                                    negotiation techniques, and equal pay laws.
                                </li>
                                <li>
                                    <strong>Change the numbers</strong> by
                                    citing the numbers. Boatloads of data just
                                    like this is freely available from the{" "}
                                    <a href="http://www.dol.gov/">
                                        U.S. Department of Labor
                                    </a>{" "}
                                    and beyond.
                                </li>
                            </ul>

                            <h2>Find out more</h2>

                            <div className="media">
                                <div className="media-left">
                                    <a href="http://www.aauw.org/files/2013/02/The-Simple-Truth-2013.pdf">
                                        <div className="media-object glyphicon glyphicon-save-file" />
                                    </a>
                                </div>
                                <div className="media-body">
                                    <p className="media-heading">
                                        The Institute for Women&#8217;s Policy
                                        Research&#8217;s report{" "}
                                        <a href="http://www.iwpr.org/publications/pubs/the-status-of-women-in-the-states-2015-2014-employment-and-earnings">
                                            The Status of Women in the States:
                                            2015 Employment and Earnings
                                        </a>{" "}
                                        (PDF, 82 pages)
                                    </p>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-left">
                                    <a href="http://www.catalyst.org/knowledge/myth-ideal-worker-does-doing-all-right-things-really-get-women-ahead">
                                        <div className="media-object glyphicon glyphicon-save-file" />
                                    </a>
                                </div>
                                <div className="media-body">
                                    <p className="media-heading">
                                        Catalyst.org&#8217;s research report{" "}
                                        <a href="http://www.catalyst.org/knowledge/myth-ideal-worker-does-doing-all-right-things-really-get-women-ahead">
                                            The Myth of the Ideal Worker: Does
                                            Doing All The Right Things Really
                                            Get Women Ahead?
                                        </a>{" "}
                                        (PDF, 21 pages)
                                    </p>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-left">
                                    <a href="http://www.amazon.com/o/ASIN/0553383876/ref=nosim/lifehackerboo-20">
                                        <div className="media-object glyphicon glyphicon-book" />
                                    </a>
                                </div>
                                <div className="media-body">
                                    <p className="media-heading">
                                        <i>
                                            <a href="http://www.amazon.com/o/ASIN/0553383876/ref=nosim/lifehackerboo-20">
                                                Women Don&#8217;t Ask: The High
                                                Cost of Avoiding
                                                Negotiation--and Positive
                                                Strategies for Change
                                            </a>
                                        </i>{" "}
                                        by Linda Babcock and Sara Laschever
                                        (Book, 272 pages)
                                    </p>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-left">
                                    <a href="http://www.reddit.com/r/TwoXChromosomes/comments/hvv2m/i_work_for_a_large_multinational_tech_company_i/">
                                        <div className="media-object glyphicon glyphicon-comment" />
                                    </a>
                                </div>
                                <div className="media-body">
                                    <p className="media-heading">
                                        Hiring manager at a multinational tech
                                        company:{" "}
                                        <a href="http://www.reddit.com/r/TwoXChromosomes/comments/hvv2m/i_work_for_a_large_multinational_tech_company_i/">
                                            &quot;I regularly hire women for 65%
                                            to 75% of what men make. I am sick
                                            of it. Here is why it happens and
                                            how you can avoid it.&quot;
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h2>Have the Talk</h2>
                            <blockquote>
                                <p>
                                    &quot;Women work fewer hours than men so it
                                    follows they earn less.&quot;
                                </p>
                                <footer>
                                    The data set presented here only counts the
                                    salaries of full-time workers.
                                </footer>
                            </blockquote>

                            <blockquote>
                                <p>
                                    &quot;Women choose lower-paying jobs so
                                    that&#8217;s why there&#8217;s a pay
                                    gap.&quot;
                                </p>
                                <footer>
                                    This data compares the salaries of women and
                                    men in the same jobs, from{" "}
                                    <a href="/gap/janitors-and-building-cleaners">
                                        janitors
                                    </a>{" "}
                                    to{" "}
                                    <a href="/gap/chief-executives">
                                        executives
                                    </a>.
                                </footer>
                            </blockquote>

                            <blockquote>
                                <p>
                                    &quot;Women don&#8217;t negotiate their
                                    salary as aggressively as men so it&#8217;s
                                    their fault there&#8217;s a pay gap.&quot;
                                </p>
                                <footer>
                                    Better negotiation techniques can help close
                                    the wage gap, but the problem is
                                    multi-faceted and systemic.
                                </footer>
                            </blockquote>

                            <blockquote>
                                <p>
                                    &quot;Women choose to stay home with their
                                    kids so they have less professional
                                    experience than men and thus should earn
                                    less.&quot;
                                </p>
                                <footer>
                                    <a href="http://www.seattletimes.com/opinion/close-the-gender-wage-gap/">
                                        Studies show
                                    </a>{" "}
                                    the pay gap exists whether or not women have
                                    children.
                                </footer>
                            </blockquote>

                            <blockquote>
                                <p>
                                    &quot;In a lot of jobs, there&#8217;s no pay
                                    gap&mdash;and sometimes, women earn more
                                    than men.&quot;
                                </p>
                                <footer>
                                    Pay disparity does not exist in every
                                    occupation &mdash; but across all
                                    occupations, women consistently earn less at
                                    the same jobs.
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                    <Footer />
                </div>{" "}
                {/* /container */}
            </div>
        );
    }
}

export default Gap;
