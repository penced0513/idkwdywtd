import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GroupCard from '../GroupCard'
import EventCard from '../EventCard'
import './notifications.css'
import { fetchEventInvites, fetchGroupInvites } from '../../store/inviteReducer';

const Notifications = () => {

    const dispatch = useDispatch()
    const groupNotifications = useSelector(state => Object.values(state.invites.groups))
    const eventNotifications = useSelector(state => Object.values(state.invites.events))
    const sessionUser = useSelector(state => state.session.user)
    const [showGroupNotifications, setShowGroupNotifications] = useState(true)
    const [showEventNotifications, setShowEventNotifications] = useState(false)

    const handleEventClick = (e) => {
        e.preventDefault()
        setShowGroupNotifications(false)
        setShowEventNotifications(true)
    }
    const handleGroupClick = (e) => {
        e.preventDefault()
        setShowEventNotifications(false)
        setShowGroupNotifications(true)
    }

    useEffect( () => {
        showEventNotifications ? document.getElementById("event-noti-header").setAttribute("class", "selected") : document.getElementById("event-noti-header").setAttribute("class", "not-selected")
        showGroupNotifications ? document.getElementById("group-noti-header").setAttribute("class", "selected") : document.getElementById("group-noti-header").setAttribute("class", "not-selected")

    }, [showEventNotifications, showGroupNotifications])

    useEffect( () => {
        if (sessionUser) {
            dispatch(fetchGroupInvites(sessionUser.id))
            dispatch(fetchEventInvites(sessionUser.id))
        }
    }, [sessionUser])

    return (
        <div className="notifications-container">
            <div className="notifications-headers">
                <h1 id="group-noti-header" onClick={handleGroupClick}>Group Invites</h1>
                <h1 id="event-noti-header" onClick={handleEventClick}>Event Invites</h1>
            </div>
            {showGroupNotifications && (
                <div className="groups-list">
                    {groupNotifications.map(group => (
                        <GroupCard key={group.id} group={group} />
                    ))}
                </div>
            )}
            {showGroupNotifications && !groupNotifications.length && <div className="no-invites">No Group Invites</div>}
            {showEventNotifications && (
                <div className="groups-list">
                    {eventNotifications.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            )}
            {showEventNotifications && !eventNotifications.length && <div className="no-invites">No Event Invites</div>}
        </div>
    )
}

export default Notifications
