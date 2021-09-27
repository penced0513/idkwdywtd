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
        </Switch>
      )}
    </>
  );
}

export default App;
