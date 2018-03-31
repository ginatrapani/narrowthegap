import React, { Component } from "react";

class Header extends Component {
    render() {
        // @TODO Stop using inline CSS
        var rowStyle = {
            marginTop: "10px"
        };

        return (
            <div className="row" style={rowStyle}>
                <div className="col-md-3">
                    <a
                        href="/"
                        role="button"
                        className="btn btn-danger btn-lg active"
                    >
                        Narrow the Gap
                    </a>
                </div>
                <div className="col-md-9" />
                {/* /.col-lg-6 */}
            </div>
        );
    }
}
export default Header;
