import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react"
import { fetchUsers } from '../../store/userReducer';
import { fetchEvents } from '../../store/eventReducer';
import EventCard from '../EventCard';


function CurrentUserHome() {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const events = useSelector((state) => Object.values(state.events).sort( (a,b) => a.startDate < b.startDate ? -1 : 1)).slice(0,5)
    console.log(events)
    useEffect(() => {
        (async () => {
            await dispatch(fetchUsers())
            if (sessionUser.id) await dispatch(fetchEvents(sessionUser.id));
          })();
    }, [dispatch, sessionUser])

    return (
        <div>
            <img className="group-groupPic" src={sessionUser.profilePic} alt="profile"></img>
            <h1>Welcome back, {sessionUser.username}</h1>
            <div>
                <h2>Upcoming Events</h2>
                {events?.map(event => <EventCard key={event.id} event={event} />)}
            </div>
        </div>
    )
}

export default CurrentUserHome
