import React from "react";
import GapAPI from "../GapAPI.js";
import { Link } from "react-router-dom";

const AllOccupations = () => (
    <div className="App">
        <div className="container">
            <div>
                <h1>All Occupations</h1>
                <ul>
                    {GapAPI.all().map(
                        g =>
                            g.cents_to_dollar !== "-1" ? (
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
        </div>
    </div>
);

export default AllOccupations;
