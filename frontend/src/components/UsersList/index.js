import { useSelector } from "react-redux";
import UserCard from "../UserCard";
import './userslist.css'

function UsersList ({users, deleteFunction, deleteCheck, owner}) {

    const sessionUser = useSelector(state => state.session.user)
    return (
    <div id="user-list-container" className={`${users.length >= 3 ? "user-list-container-grid" : "user-list-container-flex"}`}>
        {users?.map(user => {
            let onDelete;
            if (deleteCheck(user?.id, sessionUser?.id, owner)) onDelete = e => deleteFunction(e, user.id)
            return (
                <UserCard key={user.id} user={user} onDelete={onDelete} />    
            )
        })}
    </div>
)}


export default UsersList
