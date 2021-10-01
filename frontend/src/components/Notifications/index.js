import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import GroupCard from '../GroupCard'
import EventCard from '../EventCard'
import './notifications.css'

const Notifications = () => {

    const groupNotifications = useSelector(state => Object.values(state.invites.groups))
    const eventNotifications = useSelector(state => Object.values(state.invites.events))
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

    return (
        <div className="notifications-container">
            <div className="notifications-headers">
                <h1 onClick={handleGroupClick}>Group Invites</h1>
                <h1 onClick={handleEventClick}>Event Invites</h1>
            </div>
            {showGroupNotifications && (
                <div className="groups-list">
                    {groupNotifications.map(group => (
                        <GroupCard key={group.id} group={group} />
                    ))}
                </div>
            )}
            {showEventNotifications && (
                <div className="groups-list">
                    {eventNotifications.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Notifications
