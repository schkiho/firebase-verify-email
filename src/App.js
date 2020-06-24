import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import "./App.css";
import Landing from "./components/layout/Landing";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import VerifyEmail from "./components/auth/VerifyEmail";
import PasswordRecovery from "./components/auth/PasswordRecovery";
import FlyerUpload from "./components/dashboard/FlyerUpload";
import AlbumUpload from "./components/dashboard/AlbumUpload";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/verify-email" component={VerifyEmail} />
          <Route exact path="/recover" component={PasswordRecovery} />
          <Route exact path="/flyer-upload" component={FlyerUpload} />
          <Route exact path="/album-upload" component={AlbumUpload} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
