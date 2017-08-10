import React from "react";
import tba from "./ic_notification.png";
import facebook from "./FB-f-Logo__white_50.png";
import instagram from "./glyph-logo_May2016.png";
import twitter from "./Twitter_Logo_White_On_Image.png";
import email from "material-design-icons/communication/1x_web/ic_email_white_36dp.png";
import github from "./GitHub-Mark-Light-32px.png";
import "./Footer.css";

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m4">
                            <h5 className="center">Build Season Starts In</h5>
                        </div>
                        <div className="col s12 m4">
                            <h5 className="center">Upcomming Events</h5>
                        </div>
                        <div className="col s12 m4">
                            <h5 className="center">Connect</h5>
                            <div className="container connect-icons">
                                <div className="row">
                                    <div className="col s2 m4">
                                        <a href="https://www.thebluealliance.com/team/1810" target="_blank" rel="noopener noreferrer">
                                            <img src={tba} alt="The Blue Alliance" />
                                        </a>
                                    </div>
                                    <div className="col s2 m4">
                                        <a href="https://www.facebook.com/jagrobotics1810" target="_blank" rel="noopener noreferrer">
                                            <img src={facebook} alt="Facebook" />
                                        </a>
                                    </div>
                                    <div className="col s2 m4">
                                        <a href="http://www.instagram.com/1810jagrobotics" target="_blank" rel="noopener noreferrer">
                                            <img src={instagram} alt="Instagram" />
                                        </a>
                                    </div>
                                    <div className="col s2 m4">
                                        <a href="http://www.twitter.com/1810jagrobotics" target="_blank" rel="noopener noreferrer">
                                            <img src={twitter} alt="Twitter" />
                                        </a>
                                    </div>
                                    <div className="col s2 m4">
                                        <a href="mailto:1810jaguarrobotics@gmail.com">
                                            <img src={email} alt="Email" />
                                        </a>
                                    </div>
                                    <div className="col s2 m4">
                                        <a href="https://github.com/JaguarRobotics" target="_blank" rel="noopener noreferrer">
                                            <img src={github} alt="GitHub" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        Copyright &copy; 2017 Jaguar Robotics.
                        All Rights Reserved.
                    </div>
                </div>
            </footer>
        );
    }
}
