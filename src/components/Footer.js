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
                        A <a href="http://ginatrapani.org">Gina Trapani</a>{" "}
                        Production.{" "}
                        <a href="http://github.com/ginatrapani/narrowthegapp">
                            Fork this web site on GitHub.
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
