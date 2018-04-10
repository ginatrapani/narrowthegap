import React, { Component } from "react";
import { Link } from "react-router-dom";
import GapAPI from "../../GapAPI.js";


class RandomizerButton extends Component {
    exclaim() {
        const exclamations = [
            "Holy poop!",
            "In this day and age?!",
            "Unfair!",
            "Unbelievable!",
            "Unacceptable!",
            "Outrageous!",
            "Ugh!",
            "Argh!",
            "What garbage!",
            "Hell no!",
            "No way!",
            "Bonkers!",
            "Gah!",
            "Ridiculous!",
            "Not okay!",
            "Yikes!",
            "Not cool!",
            "So wrong!",
            "The hell?",
            "Oh COME on!",
            "GTFO!",
            "Seriously?!"
        ];
        return exclamations[Math.floor(Math.random() * exclamations.length)];
    }
    render() {
        return <Link
            to={`/gap/` + GapAPI.random(this.props.gap.slug).slug}
            role="button"
            className="btn btn-danger btn-lg active"
        >
            {this.exclaim()} Show me another
        </Link>

    }

}

export default RandomizerButton;
