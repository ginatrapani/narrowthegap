import React, { Component } from "react";

class Footer extends Component {
    render() {
        // @TODO Stop using inline CSS
        var hiddenStyle = {
            visibility: "hidden"
        };

        return (
            <div>
                <hr />
                <footer>
                    <p>
                        Made with ❤️ by{" "}
                        <a href="http://ginatrapani.org">Gina Trapani</a> and{" "}
                        <a href="http://capndesign.com/">Matt Jacobs</a>. Logo
                        by{" "}
                        <a href="http://www.hollydoodlestudio.com/">
                            Holly Graham
                        </a>.{" "}
                        <a href="http://github.com/ginatrapani/narrowthegap">
                            🍴Fork this on GitHub.
                        </a>{" "}
                        <a href="https://glitch.com/~narrow-the-gap">
                            🎏Remix this on Glitch.
                        </a>
                    </p>
                </footer>
                <a
                    style={hiddenStyle}
                    href="https://plus.google.com/113612142759476883204?rel=author"
                >
                    Gina Trapani
                </a>
            </div>
        );
    }
}

export default Footer;
