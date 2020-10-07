import React from "react";

import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";

import "./app.css";

import MainPage from "./main/main_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import UserHome from "./user-home/user-home";
import EventShow from "./events/event-show";
import EventIndex from "./events/user-event-index"

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <ProtectedRoute exact path="/home" component={UserHome} />
      <ProtectedRoute exact path="/events/:eventId" component={EventShow} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
