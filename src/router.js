import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./containers/Home";
import AboutPYLON from "./containers/AboutPYLON";
import Partners from "./containers/Partners";
import YCRVVault from "./containers/YCRVVault";
import PYLONVault from "./containers/PYLONVault";
import FDIVault from "./containers/FDIVault";
import FAQ from "./containers/FAQ";
import SeeMine from "./containers/SeeMine";

import { defaultPath } from "./helpers/constant";

const PublicRoutes = ({ match }) => {
  // console.log('ddd', match.url);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={`${match.url}`} component={Home} />
        <Route
          exact
          path={`${match.url}${defaultPath === "" ? "" : "/"}home`}
          component={Home}
        />
        <Route
          exact
          path={`${match.url}${defaultPath === "" ? "" : "/"}about-pylon`}
          component={AboutPYLON}
        />
        <Route
          exact
          path={`${match.url}${defaultPath === "" ? "" : "/"}yvault`}
          component={YCRVVault}
        />
        <Route
          exact
          path={`${match.url}${defaultPath === "" ? "" : "/"}fvault`}
          component={FDIVault}
        />
        <Route
          exact
          path={`${match.url}${defaultPath === "" ? "" : "/"}pvault`}
          component={PYLONVault}
        />
        <Route
          exact
          path={`${match.url}${defaultPath === "" ? "" : "/"}partners`}
          component={Partners}
        />
        <Route
          exact
          path={`${match.url}${defaultPath === "" ? "" : "/"}faq`}
          component={FAQ}
        />
        <Route
          exact
          path={`${match.url}${defaultPath === "" ? "" : "/"}see-mine`}
          component={SeeMine}
        />
      </Switch>
      <Footer />
    </>
  );
};

export default PublicRoutes;
