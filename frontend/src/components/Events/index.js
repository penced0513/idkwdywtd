import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { fetchGroups } from "../../store/groupReducer";
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
        <div>
            {events?.map(event => <EventCard key={event.id} event={event} />)}
        </div>
)

}
