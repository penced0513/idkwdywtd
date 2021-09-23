import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';


const InviteGroup = ({ closeModal }) => {

    const { groupId } = useParams()
    const users = useSelector(state => state.users)
    const group = useSelector((state) => state.groups[groupId])
    const pending = useSelector((state) => state.groups[groupId]?.pending)

    let groupMemberIds;
    if (group?.GroupMembers) {
        groupMemberIds = Object.values(group.GroupMembers).map(invite => invite.User.id)
    }

    let pendingMembersIds;
    if (pending) pendingMembersIds = Object.values(pending).map(member => member.id)

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
        </div>
    )
}

export default InviteGroup
