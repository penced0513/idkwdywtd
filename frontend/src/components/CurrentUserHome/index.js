import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react"
import { fetchEvents } from '../../store/eventReducer';
import EventCard from '../EventCard';
import './currentuserhome.css'
import { fetchGroups } from '../../store/groupReducer';
import GroupCard from '../GroupCard';


function CurrentUserHome() {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const events = useSelector((state) => Object.values(state.events).sort( (a,b) => a.startDate < b.startDate ? -1 : 1)).slice(0,5)
    const groups = useSelector((state) => Object.values(state.groups).sort((a,b) => a.joined_at < b.joined_at ? 1 : -1)).slice(0,5)
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        (async () => {
            if (sessionUser.id) {
                await dispatch(fetchEvents(sessionUser.id));
                await dispatch(fetchGroups(sessionUser.id))
                setIsLoaded(true)
            }

          })();
    }, [dispatch, sessionUser])

    return (
        <div className="user-home-container">
            <div className="user-home-content-container">
                <div className="user-home-image-container">
                    <img className="group-groupPic" src={sessionUser.profilePic} alt="profile"></img>
                </div>
                <h1>Welcome Back, {sessionUser.username}</h1>
                <div className="home-groups-events-container">
                    <div className="upcoming-events-container">
                        <h2>Upcoming Events</h2>
                        {events && (events.length !== 0 && events.map(event => <div className="groups-groupcard" ><EventCard key={event.id} event={event} /></div>))}
                        {isLoaded && events?.length === 0 &&  <div>No Events Found</div>}
                    </div>
                    <div className="recent-groups-container">
                        <h2>Recently Joined Groups</h2>
                        {groups && (groups.length !== 0 && groups.map(group => <div className="groups-groupcard"><GroupCard key={group.id} group={group} /></div>))}
                        {isLoaded && groups?.length === 0 &&  <div>No Groups Found</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentUserHome
