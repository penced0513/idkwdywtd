import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvents } from "../../store/eventReducer";
import EventCard from "../EventCard";

export default function Groups() {
    const dispatch = useDispatch()
    const events = useSelector((state) => Object.values(state.events).sort( (a,b) => a.startDate < b.startDate ? -1 : 1))
    const sessionUser = useSelector((state) => state.session.user)

    useEffect(() => {
        (async () => {
            if (sessionUser.id) await dispatch(fetchEvents(sessionUser.id));
          })();
    }, [dispatch, sessionUser])
    
    return (
        <div className="groups-container">
            <h1>My Events</h1>
            <div className="groups-list">
                {events?.map(event => <div className="groups-groupcard"><EventCard key={event.id} event={event} /></div>)}
            </div>
        </div>
)

}
