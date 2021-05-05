import React from "react";
import Routes from "./Routes";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from "./Components/NavBar";


function App() {
  return (
    <Router>

      <NavBar />
    
      <Switch>
        {/* instead of individual route to shorten your code, use map function to render props from Routes.js  */}
        {
          Routes.map( (route,index) => (
            <Route
            key={index} 
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
