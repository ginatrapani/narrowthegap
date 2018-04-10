import React, { Component } from "react";
import { Link } from "react-router-dom";

import SearchField from "../SearchField";
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header__brand">
                    <Link to="/" className="Header__logo-link">
                        <img
                            className="Header__logo"
                            src="/images/ntg-logo-white.png"
                            alt="Narrow the Gap"
                        />
                    </Link>
                </div>
                <div className="Header__actions">
                    <SearchField />
                </div>
            </div>
        );
    }
}
export default Header;
