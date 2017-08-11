import React from "react";
import {Route} from "react-router-dom";
import NavItem, {NavGroup} from "./components/NavItem";

export default class PageFactory {
    static registerHome(component) {
        if (PageFactory.home) {
            console.error("Duplicate home pages");
        } else {
            PageFactory.home = <Route path="/" exact component={component} />;
            PageFactory.navbar.push(<NavItem href="/" name="Home" props={{"exact": true}} />);
        }
    }

    static register404(component) {
        if (PageFactory.notFound) {
            console.error("Duplicate 404 pages");
        } else {
            PageFactory.notFound = <Route component={component} />;
        }
    }

    static register(component, url, name, group) {
        PageFactory.pages.push(<Route path={url} component={component} />);
        if (group && group.length > 0) {
            for (var i = 0; i < PageFactory.navbar.length; ++i) {
                if (PageFactory.navbar[i].props.name === group) {
                    PageFactory.navbar.splice(i + 1, 0, <NavItem href={url} name={name} className="nav-group" />);
                    return;
                }
            }
            PageFactory.navbar.push(<NavGroup name={group} />, <NavItem href={url} name={name} className="nav-group" />);
        } else {
            PageFactory.navbar.push(<NavItem href={url} name={name} />);
        }
    }
}

PageFactory.home = null;
PageFactory.notFound = null;
PageFactory.pages = [];
PageFactory.navbar = [];
