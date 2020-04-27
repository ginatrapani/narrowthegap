import React, { Component } from "react";
import { Helmet } from "react-helmet";
import GapAPI from "../../GapAPI.js";
import Header from "../Header";
import Footer from "../Footer.js";
import RandomizerButton from "../RandomizerButton";
import AllOccupations from "../AllOccupations.js";
import { Link } from "react-router-dom";
import "./Gap.css";

class Gap extends Component {
    componentDidUpdate(prevProps) {
        // When we add a new page to the history, scroll to the top.
        const { history } = this.props;
        if (history.action === "PUSH") window.scrollTo(0, 0);
    }

    render() {
        // Get the occupation user requested
        const gapSlug =
            this.props.match.params.gapSlug === undefined
                ? "total-full-time-wage-and-salary-workers"
                : this.props.match.params.gapSlug;
        var gap = GapAPI.get(gapSlug);
        // If occupation exists but gap is null (data unavailable) fall back to parent occupation
        var dataUnavailableGap = null;
        if (gap && !gap.wageGaps.years[0].centsToDollar) {
            dataUnavailableGap = gap;
            gap = GapAPI.get(gap.parent.slug);
        }

        const tweetText = gap
            ? "Women" +
              this.getWorkingPhrasing(gap.name) +
              " " +
              GapAPI.cleanOccupationName(gap.name) +
              " made " +
              gap.wageGaps.years[0].centsToDollar +
              " cents to the dollar men earn doing the same job #EqualPayDay"
            : "";

        const pageTitle = gap
            ? "The gender pay gap for women" +
              this.getWorkingPhrasing(gap.name) +
              " " +
              GapAPI.cleanOccupationName(gap.name) +
              " - Narrow the Gap"
            : "Narrow the Gap";

        const permalink = "https://narrowthegap.co/gap/" + gapSlug;
        // @TODO deprecate this and just use the logo image
        var socialImage = require("./ntg-twitter-card.png");
        const socialImageUrl = "https://narrowthegap.co" + socialImage;
        return (
            <div className="App">
                <Helmet>
                    <title>{pageTitle}</title>
                    <meta itemprop="name" content={pageTitle} />
                    <meta itemprop="description" content={tweetText} />
                    <meta itemprop="image" content={socialImageUrl} />
                    <meta
                        name="author"
                        content="U.S. Bureau of Labor Statistics"
                    />
                    <meta property="og:title" content={pageTitle} />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={permalink} />
                    <meta property="og:image" content={socialImageUrl} />
                    <meta property="og:site_name" content="Narrow the Gap" />
                    <meta property="og:description" content={tweetText} />
                    <meta property="fb:admins" content="606837591" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={pageTitle} />
                    <meta name="twitter:description" content={tweetText} />
                    <meta name="twitter:image" content={socialImageUrl} />
                    <meta name="twitter:url" content={permalink} />
                    <link rel="canonical" href={permalink} />
                </Helmet>
                <div className="container">
                    <Header gap={gap} />
                    {/* Main hero unit for a primary call to action */}
                    <div className="jumbotron">
                        {this.getDataUnavailableCaveat(dataUnavailableGap)}
                        {this.getHeadline(gap)}
                        {this.getDek(gap)}
                        {this.getSmallPrint(gap)}
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Choose an occupation:</h2>
                        </div>
                    </div>
                    <div className="row">
                        {/* @TODO check we're listing everything here */}
                        <div className="col-md-6">
                            <AllOccupations columnSlug="management-professional-and-related-occupations" />
                        </div>
                        <div className="col-md-6">
                            <AllOccupations columnSlug="service-occupations" />
                            <AllOccupations columnSlug="production-transportation-and-material-moving-occupations" />
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Unfair and Illegal</h2>
                            <p>
                                Over 50 years after President Kennedy signed the{" "}
                                <a href="http://www.eeoc.gov/laws/statutes/epa.cfm">
                                    Equal Pay Act
                                </a>
                                , on average women are still paid less than
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
                                <Link to="/gap/legal-occupations">
                                    Legal occupations
                                </Link>{" "}
                                and{" "}
                                <Link to="/gap/financial-managers">
                                    financial managers
                                </Link>{" "}
                                suffer the largest gender pay gaps.{" "}
                                <Link to="/gap/wholesale-and-retail-buyers-except-farm-products">
                                    Wholesale and retail buyers
                                </Link>{" "}
                                and <Link to="/gap/cashiers">cashiers</Link>{" "}
                                have the smallest pay gaps.
                            </p>
                            <h2>
                                {2058 - new Date().getFullYear()} more years
                            </h2>
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
                                    </a>
                                    .
                                </li>
                                <li>
                                    <strong>Raise awareness</strong> about the
                                    pay gap. To start, tweet, like, share, and
                                    blog a page from this site.
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
                                    <a href="https://iwpr.org/wp-content/uploads/2018/03/C464_Gender-Wage-Gap-2.pdf">
                                        <div className="media-object glyphicon glyphicon-save-file" />
                                    </a>
                                </div>
                                <div className="media-body">
                                    <p className="media-heading">
                                        The Institute for Women&#8217;s Policy
                                        Research&#8217;s fact sheet{" "}
                                        <a href="https://iwpr.org/wp-content/uploads/2018/03/C464_Gender-Wage-Gap-2.pdf">
                                            The Gender Wage Gap: 2017 Earnings
                                            Differences by Race and Ethnicity
                                        </a>{" "}
                                        (PDF, 4 pages)
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
                                    <Link to="/gap/janitors-and-building-cleaners">
                                        janitors
                                    </Link>{" "}
                                    to{" "}
                                    <Link to="/gap/chief-executives">
                                        executives
                                    </Link>
                                    .
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
                                    occupation, but across all occupations,
                                    women consistently earn less at the same
                                    jobs.
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

    getDataUnavailableCaveat(unavailableDataGap) {
        if (unavailableDataGap) {
            return (
                <div>
                    <p>
                        Not enough wage data to calculate the gap specifically
                        for{" "}
                        {GapAPI.cleanOccupationName(unavailableDataGap.name)}.
                        In general:
                    </p>
                </div>
            );
        }
        return;
    }

    getHeadline(gap) {
        if (gap) {
            if (gap.wageGaps.years[0].centsToDollar < 100) {
                return (
                    <h1>
                        Women{this.getWorkingPhrasing(gap.name)}{" "}
                        <span className="ntg-blue">
                            {GapAPI.cleanOccupationName(gap.name)}
                        </span>{" "}
                        made{" "}
                        <span className="ntg-red">
                            {gap.wageGaps.years[0].centsToDollar}&nbsp;cents
                        </span>{" "}
                        to the dollar men earned in {gap.wageGaps.years[0].year}
                        .{" "}
                    </h1>
                );
            } else {
                const moreCents = gap.wageGaps.years[0].centsToDollar - 100;
                const plural = moreCents > 1 ? "s" : "";
                return (
                    <h1>
                        Women{this.getWorkingPhrasing(gap.name)}{" "}
                        <span className="ntg-blue">
                            {GapAPI.cleanOccupationName(gap.name)}
                        </span>{" "}
                        made{" "}
                        <span className="ntg-red">
                            {moreCents}&nbsp;cent{plural} more
                        </span>{" "}
                        per dollar men earned in {gap.wageGaps.years[0].year}.{" "}
                    </h1>
                );
            }
        } else {
            return <h1>Sorry, can't find that occupation.</h1>;
        }
    }

    getDek(gap) {
        if (gap) {
            const lessPerWeek =
                gap.wageGaps.years[0].menMedianWeeklyEarnings -
                gap.wageGaps.years[0].womenMedianWeeklyEarnings;

            if (lessPerWeek > 0) {
                return (
                    <div>
                        <p>
                            That&#8217;s{" "}
                            <strong className="ntg-red">${lessPerWeek}</strong>{" "}
                            out of a weekly paycheck, which means she got paid{" "}
                            <strong className="ntg-red">
                                ${(lessPerWeek * 52).toLocaleString()}
                            </strong>{" "}
                            less doing the same job in{" "}
                            {gap.wageGaps.years[0].year}.
                            {this.getComparative(gap)}
                            <div>
                                <RandomizerButton gap={gap} />
                            </div>
                        </p>
                    </div>
                );
            } else {
                return (
                    <div>
                        <p>
                            This is one of the few occupations that women earned
                            more than men in {gap.wageGaps.years[0].year}.
                            <div>
                                <RandomizerButton gap={gap} suppress={true} />
                            </div>
                        </p>
                    </div>
                );
            }
        } else {
            return "";
        }
    }

    getSmallPrint(gap) {
        if (gap) {
            return (
                <h6 className="small-print">
                    Wage gap calculated from{" "}
                    {gap ? gap.wageGaps.years[0].year : ""} median weekly
                    earnings of full-time salary workers in the United States as
                    per the{" "}
                    <a href="http://www.bls.gov/cps/cpsaat39.htm">
                        U.S. Bureau of Labor Statistics
                    </a>
                    .
                </h6>
            );
        } else {
            return "";
        }
    }

    getWorkingPhrasing(occupationName) {
        if (
            GapAPI.cleanOccupationName(occupationName).endsWith("occupations")
        ) {
            return " who worked in";
        }
        return "";
    }

    getComparative(gap) {
        var comparative = "";
        if (
            gap.slug !== "total-full-time-wage-and-salary-workers" &&
            gap.wageGaps.years[1].centsToDollar
        ) {
            if (
                gap.wageGaps.years[1].centsToDollar >
                gap.wageGaps.years[0].centsToDollar
            ) {
                const down =
                    gap.wageGaps.years[1].centsToDollar -
                    gap.wageGaps.years[0].centsToDollar;
                return (
                    <p>
                        This wage gap is{" "}
                        <strong className="ntg-red">
                            down {down} cent{this.pluralize(down)}
                        </strong>{" "}
                        from the same data collected in{" "}
                        {gap.wageGaps.years[1].year}.
                    </p>
                );
            }
            if (
                gap.wageGaps.years[1].centsToDollar <
                gap.wageGaps.years[0].centsToDollar
            ) {
                const up =
                    gap.wageGaps.years[0].centsToDollar -
                    gap.wageGaps.years[1].centsToDollar;
                return (
                    <p>
                        This wage gap is{" "}
                        <strong className="ntg-blue">
                            up {up} cent{this.pluralize(up)}
                        </strong>{" "}
                        from the same data collected in{" "}
                        {gap.wageGaps.years[1].year}.
                    </p>
                );
            }
            if (
                gap.wageGaps.years[1].centsToDollar ===
                gap.wageGaps.years[0].centsToDollar
            ) {
                return (
                    <p>
                        This wage gap is the same as it was in{" "}
                        {gap.wageGaps.years[1].year}.
                    </p>
                );
            }
            return comparative;
        }
        return comparative;
    }

    pluralize(amount) {
        return amount > 1 ? "s" : "";
    }
}

export default Gap;
