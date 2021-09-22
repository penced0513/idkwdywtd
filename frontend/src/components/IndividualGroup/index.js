import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { fetchGroup } from "../../store/groupReducer";


const IndividualGroup = () => {
    const dispatch = useDispatch()
    const {groupId} = useParams()
    const sessionUser = useSelector(state => state.session.user)
    const group = useSelector((state) => state.groups[groupId])
    let groupMembers;
    if (group?.GroupMembers) groupMembers = Object.values(group.GroupMembers)

    useEffect(() => {
        (async () => {
            await dispatch(fetchGroup(groupId));
          })();
    }, [dispatch])

    console.log(groupMembers)

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
            </div>
        </>
    )
}

export default IndividualGroup
