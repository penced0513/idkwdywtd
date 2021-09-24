import './usercard.css'
function UserCard({user, onDelete, onSelect}) {
    return (
        <div className="usercard-container">
            <div className="usercard-name-pic">
                <img className="usercard-profilePic" src={user.profilePic} alt="profile-pic"/>
                <h1>{user.username}</h1>
            </div>
            {onDelete && <div className="user-trash-can-div"onClick={onDelete}><i className="fas fa-trash-alt"></i></div>}
        </div>
    )
}

export default UserCard
