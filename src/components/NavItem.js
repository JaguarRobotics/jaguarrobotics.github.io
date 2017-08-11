import React from "react";
import {Switch, Link} from "react-router-dom";
import "./NavItem.css";

class Div extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default class NavItem extends React.Component {
    render() {
        return (
            <Switch>
                <Div path={this.props.href} {... this.props.props}>
                    <li className={"active " + this.props.className}>
                        <Link to={this.props.href} onClick={this.props.onClick}>
                            {this.props.name}
                        </Link>
                    </li>
                </Div>
                <Div>
                    <li className={this.props.className}>
                        <Link to={this.props.href} onClick={this.props.onClick}>
                            {this.props.name}
                        </Link>
                    </li>
                </Div>
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
