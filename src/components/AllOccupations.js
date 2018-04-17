import React, { Component } from "react";
import { Link } from "react-router-dom";
import GapAPI from "../GapAPI.js";

class AllOccupations extends Component {
    renderChildren(g) {
        return (
            <ul key={g.slug}>
                <li key={g.slug}>
                    <Link to={`/gap/${g.slug}`}>
                        {GapAPI.capitalize(
                            GapAPI.cleanOccupationName(g.occupation_name)
                        )}
                    </Link>
                    {GapAPI.gaps
                        .filter(child => child.parent_slug === g.slug)
                        .map(g => this.renderChildren(g))}
                </li>
            </ul>
        );
    }

    render() {
        var props = this.props;
        return (
            <div className="span4">
                {GapAPI.gaps
                    .filter(g => g.slug === props.columnSlug)
                    .map(g => this.renderChildren(g))}
            </div>
        );
    }
}

export default AllOccupations;
