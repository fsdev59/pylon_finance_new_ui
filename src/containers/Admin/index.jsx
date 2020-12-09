import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { defaultPath } from "../../helpers/constant";

import Auth from "./Auth";
import Main from "./Main";

const Admin = ({ match, email, auth }) => {
  const InitialPath = ({ component: Component, authUser, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        authUser.auth && authUser.email !== "" ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: `${match.url}${defaultPath}/login`,
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
        path={`${match.url}${defaultPath}/main`}
        authUser={{ email, auth }}
        component={Main}
      />
      <Route exact path={`${match.url}${defaultPath}/login`} component={Auth} />
      <Redirect to={`${match.url}${defaultPath}/main`} component={Auth} />
    </Switch>
  );
};

function mapStateToProps(state) {
  const { email, auth } = state.Auth;
  return { email, auth };
}
export default connect(mapStateToProps)(Admin);
