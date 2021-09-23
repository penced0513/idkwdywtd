import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { inviteToGroup } from '../../store/groupReducer';


const InviteGroup = ({ closeModal }) => {
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
    }

    return (
        <div>
            <h1>Invite a User</h1>
            {users && Object.values(users).map(user => {
                if (!(groupMemberIds.indexOf(user.id) !== -1 || 
                pendingMembersIds.indexOf(user.id) !== -1)) {
                    return (
                        <div key={user.id}>
                            {user.username}
                        </div>
                    )
                }
            })}
            <select
                value={invitedUserId}
                onChange={e => setInvitedUserId(e.target.value)}
            >
                <option value={-1}> Please Select a User</option>
                {users && (
                        Object.values(users).map(user => {
                            if (!(groupMemberIds.indexOf(user.id) !== -1 || 
                            pendingMembersIds.indexOf(user.id) !== -1)) {
                                return (
                                    <option value={user.id} key={user.id}>
                                        {user.username}
                                    </option>
                                )
                            }
                        }))
                }
            </select>
            <button onClick={handleInvite}>Invite</button>
        </div>
    )
}

export default InviteGroup
