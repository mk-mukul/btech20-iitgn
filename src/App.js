import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Btech20 } from "./containers/btech20/Btech20";
import { Home } from "./containers/mukul/Home";

export const App = () => {
  let querry = window.location.search.split("?").slice(1, 2).join();

  return (
    <>
      <Router>
        {querry ? <Redirect to={process.env.PUBLIC_URL + querry} /> : <></>}
        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            component={Btech20}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
