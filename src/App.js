import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "@mui/material";
import PrivateRoute from "./components/PrivateRoute";

import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import Storage from "./components/Storage/Storage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Container maxWidth="md">
        <Switch>
          <Route exact path="/" component={Auth} />
          <PrivateRoute path="/storage" component={Storage} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
