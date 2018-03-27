import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="footer__container">
                    <div className="footer__text footer__center-div col-md-8">
                        © 2018, Created by Jozef Maloch
            </div>
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
            </div>
        );
    }
}

export default Footer;
