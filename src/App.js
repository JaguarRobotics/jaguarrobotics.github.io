import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";

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
