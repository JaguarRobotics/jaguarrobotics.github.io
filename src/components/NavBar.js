import React from "react";
import PageFactory from "../PageFactory";
import HeaderImage from "./HeaderImage";
import Brand from "../content/meta/Brand";
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
                        {Brand.name}
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
                                    <img src={Brand.background} alt="" className="icon spin" />
                                    <img src={Brand.foreground} alt="" className="icon" />
                                </div>
                            </div>
                        </li>
                        {React.Children.map(PageFactory.navbar, child => React.cloneElement(child, {
                            "onClick": this.handleClick
                        }))}
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
