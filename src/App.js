import React from "react";
import Routes from "./Routes";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>

        {/* instead of individual route to shorten your code, use map function to render props from Routes.js  */}
        {
          Routes.map( route => (
            <Route 
            path={route.path} 
            exact={route.exact} 
            component={route.component} 
            />

          ) )
        }

      </Switch>
    </Router>
  );
}

export default App;
