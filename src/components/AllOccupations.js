import React from "react";
import GapAPI from "../GapAPI.js";
import { Link } from "react-router-dom";
import Header from "./Header.js";
import Footer from "./Footer.js";

const AllOccupations = () => (
    <div className="App">
        <div className="container">
            <Header />
            <div>
                <h1>All Occupations</h1>
                <ul>
                    {GapAPI.all().map(
                        g =>
                            g.cents_to_dollar > 0 && g.cents_to_dollar < 100 ? (
                                <li key={g.slug}>
                                    <Link to={`/gap/${g.slug}`}>
                                        {GapAPI.capitalize(
                                            GapAPI.cleanOccupationName(
                                                g.occupation_name
                                            )
                                        )}
                                    </Link>
                                </li>
                            ) : null
                    )}
                </ul>
            </div>
            <Footer />
        </div>
    </div>
);

export default AllOccupations;
