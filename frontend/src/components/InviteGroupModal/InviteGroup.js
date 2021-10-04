import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { inviteToGroup } from '../../store/groupReducer';
import UserCard from '../UserCard';


const InviteGroup = ({ closeModal, setPendingMembers2 }) => {
    const dispatch = useDispatch()
    const { groupId } = useParams()
    const users = useSelector(state => state.users)
    const group = useSelector((state) => state.groups[groupId])
    const pending = useSelector((state) => state.groups[groupId]?.pending)
    const [invitedUserId, setInvitedUserId] = useState(-1)


    let groupMemberIds;
    if (group?.GroupMembers) {
        groupMemberIds = Object.values(group.GroupMembers).map(invite => invite.User.id)
    }

    let pendingMembersIds;
    if (pending) pendingMembersIds = Object.values(pending).map(member => member.id)

    const handleInvite = async(e) => {
        e.preventDefault()
        await dispatch(inviteToGroup(groupId, invitedUserId))
        setInvitedUserId(-1)
        setPendingMembers2(Object.values(pending))
    }
    
    const handleCancel = (e) => {
        e.preventDefault() 
        closeModal()
    } 
    return (
        <div>
            <h1>Invite a User</h1>
            <div className="invite-users-grid">
            {users && groupMemberIds && Object.values(users).sort( (a,b) => a.username > b.username ? 1 : -1).map(user => {
                
                if (!(groupMemberIds.indexOf(user.id) !== -1 || 
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
                {users && groupMemberIds &&  (
                        Object.values(users).sort( (a,b) => a.username > b.username ? 1 : -1).map(user => {
                            if (!(groupMemberIds.indexOf(user.id) !== -1 || 
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
            <button className="invite-return" onClick={handleCancel}>Return</button>
        </div>
    )
}

export default InviteGroup
