import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import Header from "./components/layout/Header";
import Login from "./containers/Auth/Login";
import Signup from "./containers/Auth/Signup";
import Home from "./containers/Home";

const PublicRoutes = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Signup} />
        <Route path="/register/i/:handle" component={Signup} />
      </Switch>
    </ConnectedRouter>
  );
};

export default PublicRoutes;
