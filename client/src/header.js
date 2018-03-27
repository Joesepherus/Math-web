import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            < nav className="navbar-inverse navbar-default header" >
                <div className="container-fluid header__container">
                    <div className="navbar-header header__center-div">
                        <a data-toggle="tab" href="#!/intro">
                            <img className="header__icon" src="favicon.ico"></img>
                        </a>
                    </div>
                    <div className="header__container">
                        <div className="header__center-div">
                            <p className="header__text">React Web App</p>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;  
