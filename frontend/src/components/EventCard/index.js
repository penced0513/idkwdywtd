import { NavLink  } from 'react-router-dom';
import './eventcard.css'
function EventCard({ event }) {

    return (
        <div className="eventcard-container">
            <div className="eventcard-name-pic">
                <img className="eventcard-eventPic" src={event.eventPic} alt="profile-pic"/>
                <div>
                    <NavLink className="eventcard-eventname" to={`/events/${event.id}`}>{event.name}</NavLink>
                    <h3 className="eventcard-date">{new Date(event.startDate).toDateString()}</h3> 
                    <h3 className="eventcard-duration" >{event?.duration > 1 ? "duration: " + event?.duration + " days" : "duration: " + event?.duration + " day"}</h3>
                </div>
            </div>
        </div>
    )
}

export default EventCard
