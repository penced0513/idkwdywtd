import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect, useParams } from "react-router"
import { fetchGroup, fetchPending } from "../../store/groupReducer";


const IndividualGroup = () => {
    const dispatch = useDispatch()
    const {groupId} = useParams()
    const sessionUser = useSelector(state => state.session.user)
    const group = useSelector((state) => state.groups[groupId])
    const pending = useSelector((state) => state.groups[groupId]?.pending)

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
          })();
    }, [dispatch, groupId])

    useEffect( () => {
        (async () => {
            if (group?.owner === sessionUser?.id) await dispatch(fetchPending(groupId))
        })()
    }, [dispatch, group, groupId, sessionUser])

        
    if (groupMemberIds && !(sessionUser.id in groupMemberIds)) {
        return <Redirect to="/groups" />
    }


    const pendingMembersContent = (
        <div>
            <h1>Pending Members</h1>
            {pendingMembers?.map(user => {
                return (
                   <div key={user.id}>
                       <div>
                           <div>
                               {user.profilePic}
                           </div>
                           <div>
                               {user.username}
                           </div>
                       </div>
                   </div>
                )
            })}
        </div>
    )
    return (
        <>
            <div>{group?.groupPic}</div>
            <div>{group?.name}</div>
            <div>
                <h1>Joined Members</h1>
                {groupMembers?.map(member => {
                    return (
                        <div key={member.id}>
                            <div>
                                <div>
                                    {member.profilePic}
                                </div>
                                <div>
                                    {member.username}
                                </div>
                            </div>
                        </div>
                    )
                })}
                {sessionUser?.id === group?.owner && pendingMembersContent}
            </div>
        </>
    )
}

export default IndividualGroup
