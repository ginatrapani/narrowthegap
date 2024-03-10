import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div>
                <hr />
                <footer>
                    <p>
                        Made with{" "}
                        <span role="img" aria-label="love">
                            ❤️
                        </span>{" "}
                        by <a href="https://ginatrapani.org">Gina Trapani</a>{" "}
                        and <a href="http://capndesign.com/">Matt Jacobs</a>.
                        Logo by{" "}
                        <a href="http://www.hollydoodlestudio.com/">
                            Holly Graham
                        </a>
                        .{" "}
                        <a href="http://github.com/ginatrapani/narrowthegap">
                            <span role="img" aria-label="fork">
                                🍴
                            </span>
                            Fork this on GitHub.
                        </a>
                    </p>
                </footer>
            </div>
        );
    }
}

export default Footer;
