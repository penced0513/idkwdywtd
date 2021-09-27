import { NavLink  } from 'react-router-dom';

function EventCard({ event }) {
    return (
        <div className="groupcard-container">
            <div className="groupcard-name-pic">
                <img className="groupcard-groupPic" src={event.eventPic} alt="profile-pic"/>
                <NavLink className="groupcard-groupname" to={`/events/${event.id}`}>{event.name}</NavLink>
            </div>
        </div>
    )
}

export default EventCard
