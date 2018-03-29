import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <nav className="navbar-inverse navbar-default footer" >
        <div className="navbar-footer footer__center-div">
          <p className="header__text">© 2018, Created by Jozef Maloch</p>
          <div className="footer__container footer__social-media">
            <div className="footer__center-div">
              <a href="https://github.com/Joesepherus">
                <i id="social-gh" className="fa fa-github-square fa-3x footer__social"></i>
              </a>
              <a href="https://www.facebook.com/JoesMaloch">
                <i id="social-fb" className="fa fa-facebook-square fa-3x footer__social"></i>
              </a>
              <a href="https://twitter.com/TQs_Joesepherus">
                <i id="social-tw" className="fa fa-twitter-square fa-3x footer__social"></i>
              </a>
              <a href="https://plus.google.com/u/1/+Joesepherus">
                <i id="social-gp" className="fa fa-google-plus-square fa-3x footer__social"></i>
              </a>
              <a href="mailto:jozefmaloch@gmail.com">
                <i id="social-em" className="fa fa-envelope-square fa-3x footer__social"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

        );
  }
}

export default Footer;
