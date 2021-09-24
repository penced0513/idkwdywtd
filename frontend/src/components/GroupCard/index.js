import { NavLink  } from 'react-router-dom';
import './groupcard.css'

function GroupCard({group }) {
    return (
        <div className="groupcard-container">
            <div className="groupcard-name-pic">
                <img className="groupcard-groupPic" src={group.groupPic} alt="profile-pic"/>
                <NavLink className="groupcard-groupname" to={`/groups/${group.id}`}>{group.name}</NavLink>
            </div>
        </div>
    )
}

export default GroupCard
