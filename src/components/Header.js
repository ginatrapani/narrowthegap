import React, { Component } from 'react';

class Header extends Component {
  render() {
    // @TODO Stop using inline CSS
    var rowStyle = {
      marginTop: '10px'
    };

    var logoStyle = {
      width: '160px',
      height: 'auto',
      margin: '0'
    };

    return (
      <div className="row" style={rowStyle}>
        <div className="col-md-3">
          <a
            href="/"
            style={{
              textDecoration: 'none',
              border: '0'
            }}
          >
            <img
              src="/images/ntg-logo-white.png"
              alt="Narrow the Gap"
              style={logoStyle}
            />
          </a>
        </div>
        <div className="col-md-9" />
        {/* /.col-lg-6 */}
      </div>
    );
  }
}
export default Header;
