import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Groups from "./components/Groups";
import Events from "./components/Events"
import IndividualGroup from "./components/IndividualGroup";
import ProtectedRoute from "./components/ProtectedRoute";
import IndividualEvent from "./components/IndividualEvent";
import CurrentUserHome from "./components/CurrentUserHome";
import Notifications from "./components/Notifications";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <ProtectedRoute path="/groups" exact={true}>
            <Groups />
          </ProtectedRoute>
          <ProtectedRoute path="/events" exact={true}>
            <Events />
          </ProtectedRoute>
          <ProtectedRoute path="/groups/:groupId">
            <IndividualGroup />
          </ProtectedRoute>
          <ProtectedRoute path="/events/:eventId">
            <IndividualEvent />
          </ProtectedRoute>
          <ProtectedRoute path="/" exact>
            <CurrentUserHome />
          </ProtectedRoute>
          <ProtectedRoute path="/notifications" exact>
            <Notifications />
          </ProtectedRoute>
        </Switch>
      )}
    </>
  );
}

export default App;
