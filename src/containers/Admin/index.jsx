import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import Auth from "./Auth";
import Main from "./Main";

const Admin = ({ match }) => {
  const InitialPath = ({ component: Component, authUser, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        authUser &&
        authUser.accessToken !== "" &&
        authUser.accessToken !== null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: `${match.url}/login`,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
  console.log(match.url);
  return (
    <Switch>
      <InitialPath
        exact
        path={`${match.url}/main`}
        authUser={{ accessToken: null }}
        component={Main}
      />
      <Route exact path={`${match.url}/login`} component={Auth} />
      <Redirect to={`${match.url}/login`} component={Auth} />
    </Switch>
  );
};

export default Admin;
