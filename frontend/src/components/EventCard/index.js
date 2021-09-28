import { NavLink  } from 'react-router-dom';
import './eventcard.css'
function EventCard({ event }) {

    return (
        <div className="eventcard-container">
            <div className="eventcard-name-pic">
                <img className="eventcard-eventPic" src={event.eventPic} alt="profile-pic"/>
                <div>
                    <NavLink className="eventcard-eventname" to={`/events/${event.id}`}>{event.name}</NavLink>
                    <h3>{new Date(event.startDate).toDateString()}</h3>
                </div>
            </div>
        </div>
    )
}

export default EventCard
