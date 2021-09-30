import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { inviteToEvent } from '../../store/eventReducer';
import UserCard from '../UserCard';
import './inviteevent.css'


const InviteEvent = ({ closeModal, setPendingMembers2 }) => {
    const dispatch = useDispatch()
    const { eventId } = useParams()
    const users = useSelector(state => state.users)
    const event = useSelector((state) => state.events[eventId])
    const pending = useSelector((state) => state.events[eventId]?.pending)
    const [invitedUserId, setInvitedUserId] = useState(-1)


    let eventMemberIds;
    if (event?.Attendees) {
        eventMemberIds = Object.values(event.Attendees).map(invite => invite.User.id)
    }

    let pendingMembersIds;
    if (pending) pendingMembersIds = Object.values(pending).map(member => member.id)

    const handleInvite = async(e) => {
        e.preventDefault()
        await dispatch(inviteToEvent(eventId, invitedUserId))
        setInvitedUserId(-1)
        setPendingMembers2(Object.values(pending))
    }
    
    return (
        <div>
            <h1>Invite a User</h1>
            <div className="invite-users-grid">
                {users && eventMemberIds && Object.values(users).map(user => {
                    
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
                        Object.values(users).map(user => {
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
            <button onClick={handleInvite}>Invite</button>
        </div>
    )
}

export default InviteEvent
