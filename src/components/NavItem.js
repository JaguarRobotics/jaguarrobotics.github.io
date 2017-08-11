import React from "react";
import {Switch, Link} from "react-router-dom";
import "./NavItem.css";

export default class NavItem extends React.Component {
    render() {
        return (
            <Switch>
                <li className={"active " + this.props.className} path={this.props.href} {... this.props.props}>
                    <Link to={this.props.href} onClick={this.props.onClick}>
                        {this.props.name}
                    </Link>
                </li>
                <li className={this.props.className}>
                    <Link to={this.props.href} onClick={this.props.onClick}>
                        {this.props.name}
                    </Link>
                </li>
            </Switch>
        );
    }
}

export class NavGroup extends React.Component {
    render() {
        return (
            <li>
                <a className="nav-group-hdr">
                    {this.props.name}
                </a>
            </li>
        );
    }
}
