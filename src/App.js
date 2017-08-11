import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Brand from "./content/meta/Brand";

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route component={Error404} />
                </Switch>
            </BrowserRouter>
        );
    }
}

document.title = Brand.name;
