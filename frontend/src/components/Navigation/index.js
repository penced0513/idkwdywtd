import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import CreateGroupModal from '../CreateGroupModal';
import CreateEventModal from '../CreateEventModal';
import * as sessionActions from '../../store/session';
import { eventsLogout } from "../../store/eventReducer";
import { groupsLogout } from "../../store/groupReducer";

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    dispatch(groupsLogout())
    dispatch(eventsLogout())
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="navbar">
        <div><NavLink to="/">Home</NavLink></div>
        <div><NavLink exact to="/groups">My Groups</NavLink></div>
        <div><NavLink exact to="/events">My Events</NavLink></div>
        <div><CreateGroupModal /></div>
        <div><CreateEventModal /></div>
        <div><button onClick={logout}>Log Out</button></div>
      </div>
    );
  } else {
    sessionLinks = (
      <>
      </>
    );
  }

  return (
    <>
        {isLoaded && sessionLinks}
    </>
  );
}

export default Navigation;
