import React, { Component } from "react";
import { Link } from "react-router-dom";
import GapAPI from "../../GapAPI.js";
import "./RandomizerButton.css";

class RandomizerButton extends Component {
    exclaim(suppress) {
        if (!suppress) {
            const exclamations = [
                "Holy moly!",
                "In this day and age?!",
                "Unfair!",
                "Unbelievable!",
                "Unacceptable!",
                "Outrageous!",
                "Ugh!",
                "Argh!",
                "Oh hell no!",
                "No way!",
                "Bonkers!",
                "Gah!",
                "Ridiculous!",
                "Not okay!",
                "Yikes!",
                "Not cool!",
                "So wrong!",
                "The hell?",
                "Seriously?!",
            ];
            return exclamations[
                Math.floor(Math.random() * exclamations.length)
            ];
        } else {
            return;
        }
    }
    render() {
        return (
            <Link
                to={`/gap/` + GapAPI.random(this.props.gap.slug).slug}
                role="button"
                className="btn btn-default btn-lg RandomizerButton"
            >
                {this.exclaim(this.props.suppress)} Show me another
            </Link>
        );
    }
}

export default RandomizerButton;
