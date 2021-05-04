import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

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

        <Route path="/" exact={true}>
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
