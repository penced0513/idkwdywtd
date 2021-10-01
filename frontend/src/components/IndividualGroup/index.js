import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  useParams } from "react-router"
import { destroyGroup, destroyGroupInvite, destroyGroupMember, fetchGroup, fetchPending, joinGroup, leaveGroup } from "../../store/groupReducer";
import { useHistory } from "react-router-dom"
import EditGroupModal from "../EditGroupModal";
import InviteGroupModal from "../InviteGroupModal";
import { fetchUsers } from "../../store/userReducer";
import './individualGroup.css'
import UsersList from "../UsersList";
import { destroyUserGroupInvite } from "../../store/inviteReducer";

const IndividualGroup = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {groupId} = useParams()
    const sessionUser = useSelector(state => state.session.user)
    const group = useSelector((state) => state.groups[groupId])
    const pending = useSelector((state) => state.groups[groupId]?.pending)
    const [pendingMembers2, setPendingMembers2] = useState([])
    const [showPending, setShowPending] = useState(false)
    const invited = useSelector(state => state.invites.groups[groupId])
     const [groupLoaded, setGroupLoaded] = useState(false)

    let groupMembers, groupMemberIds;
    if (group?.GroupMembers) {
        groupMembers = Object.values(group.GroupMembers).map(invite => invite.User)
        groupMemberIds = Object.values(group.GroupMembers).map(invite => invite.User?.id)
    }
   
    useEffect(() => {
        (async () => {
            await dispatch(fetchGroup(groupId));
            await dispatch(fetchUsers())
            setGroupLoaded(true)
          })();
    }, [dispatch, groupId])

    useEffect( () => {
        (async () => {
            if (groupLoaded){
                setPendingMembers2([])
                const pendingInvites = await dispatch(fetchPending(groupId))
                setPendingMembers2(pendingInvites.map(invite => invite.User))
            }
        })()
    }, [dispatch, group, groupId, sessionUser, groupLoaded])

        
    if (groupMemberIds && sessionUser  && groupMemberIds.indexOf(sessionUser.id) === -1 && !invited) {
        dispatch(destroyGroup(groupId, true))
        history.push('/groups')
    }

    const handleRemovePending = async(e, userId) => {
        e.preventDefault()
        await dispatch(destroyGroupInvite(groupId, userId))
        setPendingMembers2(Object.values(pending))
    }

    const handleRemoveMember = async(e, userId) => {
        e.preventDefault()
        await dispatch(destroyGroupMember(groupId, userId))
        await dispatch(fetchGroup(groupId));
    }

    const deleteCheck = (userId, owner, currentUserId) => {
        return currentUserId === owner && userId !== owner
    }

    const pendingMembersContent = (
        <div>
            <UsersList users={pendingMembers2} deleteFunction={handleRemovePending} deleteCheck={deleteCheck} owner={group?.owner}/>
        </div>
    )

    const handleDelete = async(e) => {
        e.preventDefault()
        history.push("/groups")
        await dispatch(destroyGroup(groupId))
    }
    const handleLeave = async(e) => {
        e.preventDefault()
        history.push("/groups")
        await dispatch(leaveGroup(groupId, sessionUser.id))
    }

    
    let deleteContent;
    if (sessionUser && group && !invited) {
        if(sessionUser.id === group.owner) {
            deleteContent = <button onClick={handleDelete}>Delete Group</button>
        } else {
            deleteContent = <button onClick={handleLeave}>Leave Group</button>
        }
    }

    const handleShowPending = e => {
        e.preventDefault()
        setShowPending(true)
    }
    
    const handleHidePending = e => {
        e.preventDefault()
        setShowPending(false)
    }

    const isLoaded = () => {
        if (group) return true
        return null
    }

    const handleAccept= async(e) => {
        e.preventDefault()
        await dispatch(joinGroup(groupId, sessionUser.id))
        await dispatch(destroyUserGroupInvite(sessionUser.id, groupId, true))
    }

    const handleDecline = async(e) => {
        e.preventDefault()
        history.push('/groups')
        await dispatch(destroyUserGroupInvite(sessionUser.id, groupId, false))
        await dispatch(destroyGroup(groupId, true))
    }

    return isLoaded() && (
        <div className="group-page-container">
            <div className="edit-delete-group-container">
                {sessionUser?.id === group?.owner && <EditGroupModal name={group.name} groupPic={group.groupPic}/>}
                {deleteContent}
                { (groupMemberIds?.indexOf(sessionUser?.id) === -1 && invited) && <button onClick={handleAccept}>Accept Invitation</button>}
                { (groupMemberIds?.indexOf(sessionUser?.id) === -1 && invited) && <button onClick={handleDecline}>Decline Invitation</button>}
            </div>
            <div className="group-info-container">
                <div>
                    <img alt="group" className="group-groupPic" src={group?.groupPic} />
                    <h1 className="group-groupname">{group?.name}</h1>
                </div>
            </div>
            <div className="group-pending-invite-section">
                    {showPending ? <h1>Pending Invites</h1> : <h1>Joined Members</h1>}
                    <div className="invite-pending-div">
                        {sessionUser?.id === group?.owner && <InviteGroupModal setPendingMembers2={setPendingMembers2}/>}
                        {sessionUser?.id === group?.owner && !showPending && <button className="show-pending-btn" onClick={e => handleShowPending(e)}>Show Pending</button>}
                        {sessionUser?.id === group?.owner && showPending && <button onClick={e => handleHidePending(e)}>Hide Pending</button>}
                    </div>
            </div>
            <div>
                {
                !showPending &&  groupMembers &&
                    <div>
                        <UsersList users={groupMembers} deleteFunction={handleRemoveMember} deleteCheck={deleteCheck} owner={group.owner}/>
                    </div>
                }      
                { 
                showPending && pendingMembersContent
                }
            </div>
        </div>
    )
}

export default IndividualGroup
