import React from "react";
import HeaderImage from "./HeaderImage";
import background from "./background.png";
import foreground from "./foreground.png";
import "./NavBar.css";

class NavBarContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "navActive": false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            "navActive": !this.state.navActive
        });
    }

    render() {
        return (
            <nav className={"main-nav nav-extended " + this.props.className}>
                {this.props.children}
                <div className="nav-wrapper">
                    <a className="brand-logo center">
                        Jaguar Robotics
                    </a>
                    <ul className="right">
                        <li>
                            <a onClick={this.handleClick}>
                                <i className="material-icons">
                                    menu
                                </i>
                            </a>
                        </li>
                    </ul>
                    <ul className={this.state.navActive ? "side-nav active" : "side-nav"}>
                        <li>
                            <div className="user-view">
                                <div className="background">
                                    <img src={background} alt="" className="icon spin" />
                                    <img src={foreground} alt="" className="icon" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <a>
                                Home
                            </a>
                        </li>
                    </ul>
                    {this.state.navActive && <div id="sidenav-overlay" onClick={this.handleClick} />}
                </div>
            </nav>
        );
    }
}

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <NavBarContent className="fixed-navbar-content" />
                <NavBarContent className="absolute-navbar-content">
                    <HeaderImage />
                </NavBarContent>
                <NavBarContent className="hidden-navbar-content">
                    <HeaderImage />
                </NavBarContent>
            </div>
        );
    }
}
