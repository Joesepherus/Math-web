import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <nav className="navbar-inverse navbar-default header" >
          <div className="navbar-header header__center-div">
            <a data-toggle="tab" href="#!/intro">
              <img alt="header_icon" className="header__icon" src="favicon.ico"></img>
            </a>
            <p className="header__text">React Web App</p>
            
          </div>
      </nav>
    );
  }
}

export default Header;  
