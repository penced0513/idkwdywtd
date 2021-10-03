import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvents } from "../../store/eventReducer";
import { fetchEventInvites, fetchGroupInvites } from "../../store/inviteReducer";
import CreateEventModal from "../CreateEventModal";
import EventCard from "../EventCard";

export default function Groups() {
    const dispatch = useDispatch()
    const events = useSelector((state) => Object.values(state.events).sort( (a,b) => a.startDate < b.startDate ? -1 : 1))
    const sessionUser = useSelector((state) => state.session.user)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            if (sessionUser.id) {
                await dispatch(fetchEvents(sessionUser.id))
                setIsLoaded(true)
                dispatch(fetchGroupInvites(sessionUser.id))
                dispatch(fetchEventInvites(sessionUser.id))
            }
          })();
    }, [dispatch, sessionUser])
    
    return (
        (events.length || isLoaded ) && (
        <div className="groups-container">
            <h1>My Events</h1>
            <div className="groups-list grid">
                {events?.map(event => <div  key={event.id} className="groups-groupcard"><EventCard key={event.id} event={event} /></div>)}
            </div>
            {!events.length && <div className="no-groups">No Events Found, Try  <CreateEventModal title="Creating One!"/></div>}
        </div>)
)

}
