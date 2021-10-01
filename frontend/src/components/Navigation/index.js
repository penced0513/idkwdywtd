import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Navigation.css';
import CreateGroupModal from '../CreateGroupModal';
import CreateEventModal from '../CreateEventModal';
import * as sessionActions from '../../store/session';
import { eventsLogout } from "../../store/eventReducer";
import { groupsLogout } from "../../store/groupReducer";
import { fetchEventInvites, fetchGroupInvites } from '../../store/inviteReducer';



function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  const eventNotifications = useSelector(state => Object.values(state.invites.events))
  const groupNotifications = useSelector(state => Object.values(state.invites.groups))

  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
        if (sessionUser){
          dispatch(fetchGroupInvites(sessionUser.id))
          dispatch(fetchEventInvites(sessionUser.id))
        }
      })();
}, [dispatch, sessionUser])

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    dispatch(groupsLogout())
    dispatch(eventsLogout())
  };

  const checkNotifications = () => {
    const notificationAmount = eventNotifications.length + groupNotifications.length
    if (notificationAmount) return <span>{notificationAmount}</span>
    return null
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="navbar">
        <div><NavLink to="/">Home</NavLink></div>
        <div><NavLink exact to="/groups">My Groups</NavLink></div>
        <div><NavLink exact to="/events">My Events</NavLink></div>
        <div><CreateGroupModal title="Create Group"/></div>
        <div><CreateEventModal title="Create Event"/></div>
        <div><NavLink className="notifications-nav" to="/notifications">{checkNotifications()} Notifications</NavLink></div>
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
