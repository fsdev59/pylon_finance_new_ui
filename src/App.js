import React from "react";
import { Provider } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PublicRoutes from "./router";
import Admin from "./containers/Admin";

import { store, history } from "./redux/store";

import { defaultPath } from "./helpers/constant";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ConnectedRouter history={history}>
          <Switch>
            <Route
              path={`${defaultPath}/systems/vaults/rewardsystem/rewarddisti`}
              component={Admin}
            />
            {defaultPath !== "" && (
              <Route path={defaultPath} component={PublicRoutes} />
            )}
            <Route path="/" component={PublicRoutes} />
          </Switch>
        </ConnectedRouter>
        <ToastContainer />
      </div>
    </Provider>
  );
}

export default App;
