import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import ApiCommand from "../components/ApiCommand/ApiCommand"

export default 
(
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/command/:id" component={ApiCommand} />
        </Switch>
    </Router>
);
