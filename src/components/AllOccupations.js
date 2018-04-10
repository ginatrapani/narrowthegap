import React, { Component } from "react";
import { Link } from "react-router-dom";
import GapAPI from "../GapAPI.js";

class AllOccupations extends Component {
    renderChidren(g) {
        return (
            <ul key={g.slug}>
                <li key={g.slug}>
                    <Link to={`/gap/${g.slug}`}>
                        {GapAPI.capitalize(
                            GapAPI.cleanOccupationName(g.occupation_name)
                        )}
                    </Link>
                    {GapAPI.gaps
                        .filter(function(child) {
                            return child.parent_slug === g.slug;
                        })
                        .map(g => this.renderChidren(g))}
                </li>
            </ul>
        );
    }

    render() {
        var props = this.props;
        return (
            <div className="span4">
                {GapAPI.gaps
                    .filter(function(g) {
                        return g.slug === props.columnSlug;
                    })
                    .map(g => this.renderChidren(g))}
            </div>
        );
    }
}

export default AllOccupations;
