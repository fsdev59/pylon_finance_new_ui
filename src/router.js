import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Login from "./containers/Auth/Login";
import Signup from "./containers/Auth/Signup";
import Home from "./containers/Home";
import AboutPYLON from "./containers/AboutPYLON";
import Partners from "./containers/Partners";
import YCRVVault from "./containers/YCRVVault";
import PYLONVault from "./containers/PYLONVault";
import FDIVault from "./containers/FDIVault";

const PublicRoutes = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Header />
      <Switch>
        <Route exact path="/staging/home" component={Home} />
        <Route exact path="/staging" component={Home} />
        {/* <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Signup} />
        <Route path="/register/i/:handle" component={Signup} /> */}
        <Route exact path="/staging/about-pylon" component={AboutPYLON} />
        <Route exact path="/staging/ycrv-vault" component={YCRVVault} />
        <Route exact path="/staging/fdi-vault" component={FDIVault} />
        <Route exact path="/staging/pylon-vault" component={PYLONVault} />
        <Route exact path="/staging/partners" component={Partners} />
      </Switch>
      <Footer />
    </ConnectedRouter>
  );
};

export default PublicRoutes;
