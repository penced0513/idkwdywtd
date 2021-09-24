import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect, useParams } from "react-router"
import { destroyGroup, destroyGroupInvite, destroyGroupMember, fetchGroup, fetchPending, leaveGroup } from "../../store/groupReducer";
import { useHistory } from "react-router-dom"
import EditGroupModal from "../EditGroupModal";
import InviteGroupModal from "../InviteGroupModal";
import { fetchUsers } from "../../store/userReducer";
import UserCard from "../UserCard";
import './individualGroup.css'
import UsersList from "../UsersList";

const IndividualGroup = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {groupId} = useParams()
    const sessionUser = useSelector(state => state.session.user)
    const group = useSelector((state) => state.groups[groupId])
    const pending = useSelector((state) => state.groups[groupId]?.pending)
    const [pendingMembers2, setPendingMembers2] = useState([])
    const [showPending, setShowPending] = useState(false)

    let groupMembers, groupMemberIds;
    if (group?.GroupMembers) {
        groupMembers = Object.values(group.GroupMembers).map(invite => invite.User)
        groupMemberIds = Object.values(group.GroupMembers).map(invite => invite.User.id)
    }

    let pendingMembers;
    if (pending) pendingMembers = Object.values(pending)

    

    useEffect(() => {
        (async () => {
            await dispatch(fetchGroup(groupId));
            await dispatch(fetchUsers())
          })();
    }, [dispatch, groupId])

    useEffect( () => {
        (async () => {
            if (group?.owner === sessionUser?.id) {

                const pendingInvites = await dispatch(fetchPending(groupId))
                setPendingMembers2(pendingInvites.map(invite => invite.User))
            }
        })()
    }, [dispatch, group, groupId, sessionUser])

        
    if (groupMemberIds && sessionUser && !(groupMemberIds.indexOf(sessionUser.id) !== -1)) {
        return <Redirect to="/groups" />
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
        // if (group?.owner === sessionUser?.id) await dispatch(fetchPending(groupId))
    }

    const pendingMembersContent = (
        <div>
            <h1>Pending Invites</h1>
            <UsersList users={pendingMembers2} deleteFunction={handleRemovePending} />
            {/* {pendingMembers2?.map(user => {
                return (
                        <UserCard key={user.id} user={user} onDelete={e => handleRemovePending(e, user.id)} />
                )
            })} */}
        </div>
    )

    const handleDelete = async(e) => {
        e.preventDefault()
        await dispatch(destroyGroup(groupId))
        history.push("/groups")
    }
    const handleLeave = async(e) => {
        e.preventDefault()
        await dispatch(leaveGroup(groupId, sessionUser.id))
        history.push("/groups")
    }

    
    let deleteContent;
    if (sessionUser && group) {
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


    return (
        <div className="group-page-container">
            <div className="group-info-container">
                <div>
                    <img className="group-groupPic" src={group?.groupPic} />
                    <h1 className="group-groupname">{group?.name}</h1>
                    {sessionUser?.id === group?.owner && <EditGroupModal name={group.name} groupPic={group.groupPic}/>}
                    {deleteContent}
                </div>
            </div>
            <div className="">
                <div>
                    {sessionUser?.id === group?.owner && <InviteGroupModal setPendingMembers2={setPendingMembers2}/>}
                    {sessionUser?.id === group?.owner && !showPending && <button onClick={e => handleShowPending(e)}>Show Pending</button>}
                    {sessionUser?.id === group?.owner && showPending && <button onClick={e => handleHidePending(e)}>Hide Pending</button>}
                </div>
                <div>
                    {
                    !showPending &&  
                        <div>
                            <h1>Joined Members</h1>
                            {groupMembers?.map(member => {
                                let onDelete;
                                if (sessionUser?.id === group?.owner && member.id !== group?.owner) onDelete = e => handleRemoveMember(e, member.id)
                                return (
                                    <UserCard key={member.id} user={member} onDelete={onDelete} />    
                                )
                            })}
                        </div>
                    }      
                    { 
                    showPending && pendingMembersContent
                    }
                </div>
            </div>
        </div>
    )
}

export default IndividualGroup
