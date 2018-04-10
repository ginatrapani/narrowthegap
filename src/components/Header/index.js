import React, { Component } from 'react';

import RandomizerButton from '../RandomizerButton';
import SearchField from '../SearchField';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__brand">
          <a
            href="/"
            className="Header__logo-link"
          >
            <img
              className="Header__logo"
              src="/images/ntg-logo-white.png"
              alt="Narrow the Gap"
            />
          </a>
        </div>
        <div className="Header__actions">
          <RandomizerButton gap={this.props.gap} />
            <SearchField />
        </div>

      </div>
    );
  }
}
export default Header;
