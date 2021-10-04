import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { inviteMultipleToEvent, inviteToEvent } from '../../store/eventReducer';
import UserCard from '../UserCard';
import './inviteevent.css'


const InviteEvent = ({ closeModal, setPendingMembers2 }) => {
    const dispatch = useDispatch()
    const { eventId } = useParams()
    const users = useSelector(state => state.users)
    const event = useSelector((state) => state.events[eventId])
    const pending = useSelector((state) => state.events[eventId]?.pending)
    const groups = useSelector(state => Object.values(state.groups).sort((a, b) => a.name > b.name ? 1 : -1))
    const [invitedGroupId, setInvitedGroupId] = useState(-1)
    const [invitedUserId, setInvitedUserId] = useState(-1)


    let eventMemberIds;
    if (event?.Attendees) {
        eventMemberIds = Object.values(event.Attendees).map(invite => invite.User.id)
    }

    let pendingMembersIds;
    if (pending) pendingMembersIds = Object.values(pending).map(member => member.id)

    const handleCancel = (e) => {
        e.preventDefault() 
        closeModal()
    } 

    const handleInvite = async(e) => {
        if (invitedUserId !== -1) {
            e.preventDefault()
            await dispatch(inviteToEvent(eventId, invitedUserId))
            setInvitedUserId(-1)
            setPendingMembers2(Object.values(pending))

        }
    }

    
    const handleInviteMultiple = async(e) => {
        if (invitedGroupId !== -1) {
            e.preventDefault()
            await dispatch(inviteMultipleToEvent(eventId, invitedGroupId))
            setInvitedUserId(-1)
            setPendingMembers2(Object.values(pending))
        }
    }
    
    return (
        <div>
            <h1>Invite a User</h1>
            <div className="invite-users-grid">
                {users && eventMemberIds && Object.values(users).sort( (a,b) => a.username > b.username ? 1 : -1).map(user => {
                    if (!(eventMemberIds.indexOf(user.id) !== -1 || 
                    pendingMembersIds.indexOf(user.id) !== -1)) {
                        return (
                            <UserCard key={user.id} user={user} />
                        )
                    } else {
                        return null
                    }
                })}
            </div>
            <select
                value={invitedUserId}
                onChange={e => setInvitedUserId(e.target.value)}
            >
                <option value={-1}> Please Select a User</option>
                {users && eventMemberIds &&  (
                        Object.values(users).sort( (a,b) => a.username > b.username ? 1 : -1).map(user => {
                            if (!(eventMemberIds.indexOf(user.id) !== -1 || 
                            pendingMembersIds.indexOf(user.id) !== -1)) {
                                return (
                                    <option value={user.id} key={user.id}>
                                        {user.username}
                                    </option>
                                )
                            } else {
                                return null
                            }
                        }))
                }
            </select>
            <button className="purple-btn" onClick={handleInvite}>Invite</button>
            
            <select
            value={invitedGroupId}
            onChange={e => setInvitedGroupId(e.target.value)}>
                <option value={-1}> Please Select a Group</option>
                {groups && (
                    groups.map(group => (
                        <option value={group.id} key={group.id}>
                            {group.name}
                        </option>
                    ))
                )}
            </select>
            <button className="purple-btn" onClick={handleInviteMultiple}>Invite Group</button>
            <button className="invite-return" onClick={handleCancel}>Return</button>
        </div>
    )
}

export default InviteEvent
