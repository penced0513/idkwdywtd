import { useSelector } from "react-redux";
import { useParams } from "react-router";
import UserCard from "../UserCard";

function UsersList ({users, deleteFunction}) {
    
    const {groupId} = useParams()
    const group = useSelector((state) => state.groups[groupId])
    const sessionUser = useSelector(state => state.session.user)

    return (
    users?.map(user => {
        let onDelete;
        if (sessionUser?.id === group?.owner && user.id !== group?.owner) onDelete = e => deleteFunction(e, user.id)
        return (
            <UserCard key={user.id} user={user} onDelete={onDelete} />    
        )
    }))
}


export default UsersList
