import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import Detail from "../Routes/Detail";
import Search from "../Routes/Search";
import TV from "../Routes/TV";
import Header from "./Header";
import GlobalStyles from "./GlobalStyles";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/tv/:id" component={Detail} />
        <Route path="/search" component={Search} />
        <Route path="/tv" exact component={TV} />
        <Route path="/tv/popular" render={() => <h1>Pop</h1>} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);