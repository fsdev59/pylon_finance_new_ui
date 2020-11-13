import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Auth from "./Auth";
import Main from "./Main";

const Admin = ({ match }) => {
  const email = useSelector((state) => state.Auth.email);
  const auth = useSelector((state) => state.Auth.auth);

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

  return (
    <Switch>
      <InitialPath
        exact
        path={`${match.url}/main`}
        authUser={{ email, auth }}
        component={Main}
      />
      <Route exact path={`${match.url}/login`} component={Auth} />
      <Redirect to={`${match.url}/login`} component={Auth} />
    </Switch>
  );
};

export default Admin;
