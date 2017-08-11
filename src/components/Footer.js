import React from "react";
import Brand from "../content/meta/Brand";
import Social from "../content/meta/Social";
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
                                    {Social.map(media => (
                                        <div className="col s2 m4">
                                            <a href={media.href} target="_blank" rel="noopener noreferrer">
                                                <img src={media.icon} alt={media.name} />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        {Brand.copyright}
                    </div>
                </div>
            </footer>
        );
    }
}
