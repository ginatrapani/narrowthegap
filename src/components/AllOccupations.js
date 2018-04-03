import React, { Component } from "react";
import { Helmet } from "react-helmet";
import GapAPI from "../GapAPI.js";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";

class AllOccupations extends Component {
    renderChidren(g) {
        return (
            <li key={g.slug}>
                <Link to={`/gap/${g.slug}`}>
                    {GapAPI.capitalize(
                        GapAPI.cleanOccupationName(g.occupation_name)
                    )}
                </Link>
                <ul>
                    {GapAPI.gaps
                        .filter(function(child) {
                            return child.parent_slug === g.slug;
                        })
                        .map(g => this.renderChidren(g))}
                </ul>
            </li>
        );
    }

    render() {
        return (
            <div className="App">
                <Helmet title="All Occupations - Narrow the Gap" />
                <div className="container">
                    <Header />
                    <div>
                        <h1>All Occupations</h1>
                        {GapAPI.gaps
                            .filter(function(g) {
                                return g.parent_slug === "";
                            })
                            .map(g => this.renderChidren(g))}
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default AllOccupations;
