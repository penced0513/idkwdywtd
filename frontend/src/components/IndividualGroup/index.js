import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { fetchGroup, fetchPending } from "../../store/groupReducer";


const IndividualGroup = () => {
    const dispatch = useDispatch()
    const {groupId} = useParams()
    const sessionUser = useSelector(state => state.session.user)
    const group = useSelector((state) => state.groups[groupId])
    const pending = useSelector((state) => state.groups[groupId]?.pending)
    let groupMembers;
    if (group?.GroupMembers) groupMembers = Object.values(group.GroupMembers)
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
                        <div key={member.User.id}>
                            <div>
                                <div>
                                    {member.User.profilePic}
                                </div>
                                <div>
                                    {member.User.username}
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
