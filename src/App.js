import React from "react";
import {BrowserRouter, Switch} from "react-router-dom";
import Brand from "./content/meta/Brand";
import PageFactory from "./PageFactory";

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {PageFactory.home}
                    {PageFactory.pages}
                    {PageFactory.notFound}
                </Switch>
            </BrowserRouter>
        );
    }
}

document.title = Brand.name;
