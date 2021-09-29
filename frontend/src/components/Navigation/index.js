import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import CreateGroupModal from '../CreateGroupModal';
import CreateEventModal from '../CreateEventModal';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink exact to="/groups">My Groups</NavLink>
        <NavLink exact to="/events">My Events</NavLink>
        <CreateGroupModal />
        <CreateEventModal />
        <ProfileButton user={sessionUser} />
      </>
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
