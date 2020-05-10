import React, { Component } from "react";
import { Link } from "react-router-dom";
import GapAPI from "../GapAPI.js";

class OccupationListItem extends Component {
    render() {
        return (
            <li key={this.props.gap.slug}>
                <Link to={`/gap/${this.props.gap.slug}`}>
                    {GapAPI.capitalize(
                        GapAPI.cleanOccupationName(this.props.gap.name)
                    )}
                </Link>
            </li>
        );
    }
}

class OccupationList extends Component {
    render() {
        return (
            <ul key={this.props.gap.slug}>
                <OccupationListItem gap={this.props.gap} />
                {this.props.gap.children.occupations.map((childGap) => {
                    if (!childGap.children) {
                        return <OccupationListItem gap={childGap} />;
                    } else {
                        return <OccupationList gap={childGap} />;
                    }
                })}
            </ul>
        );
    }
}

class AllOccupations extends Component {
    render() {
        const parentGap = GapAPI.get(this.props.columnSlug);
        return (
            <div className="span4">
                <ul key={parentGap.slug}>
                    <OccupationListItem gap={parentGap} />
                    {parentGap.children.occupations.map((childGap) => {
                        return <OccupationList gap={childGap} />;
                    })}
                </ul>
            </div>
        );
    }
}

export default AllOccupations;
