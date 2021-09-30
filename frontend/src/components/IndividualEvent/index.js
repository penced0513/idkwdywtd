import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect, useParams } from "react-router"
import { destroyUserEventInvite } from "../../store/inviteReducer";
import { attendEvent, destroyEvent, destroyEventInvite, destroyAttendee, fetchEvent, fetchPending, leaveEvent } from "../../store/eventReducer";
import { useHistory } from "react-router-dom"
import EditEventModal from "../EditEventModal";
import InviteEventModal from "../InviteEventModal";
import { fetchUsers } from "../../store/userReducer";
import UsersList from "../UsersList";

const IndividualEvent = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {eventId} = useParams()
    const sessionUser = useSelector(state => state.session.user)
    const event = useSelector((state) => state.events[eventId])
    const pending = useSelector((state) => state.events[eventId]?.pending)
    const [pendingMembers2, setPendingMembers2] = useState([])
    const [showPending, setShowPending] = useState(false)
    const [eventLoaded, setEventLoaded] = useState(false)
    const invited = useSelector(state => state.invites.events[eventId])

    let attendees, attendeeIds;
    if (event?.Attendees) {
        attendees = Object.values(event.Attendees).map(invite => invite.User)
        attendeeIds = Object.values(event.Attendees).map(invite => invite.userId)
    }

    let pendingIds
    if (pendingMembers2) {
        pendingIds = pendingMembers2.map(pending => pending.id)
    }

    useEffect(() => {
        (async () => {
            await dispatch(fetchEvent(eventId));
            await dispatch(fetchUsers())
            setEventLoaded(true)
          })();
    }, [dispatch, eventId])

    useEffect( () => {
        (async () => {
            if (eventLoaded) {
                setPendingMembers2([])
                const pendingInvites = await dispatch(fetchPending(eventId))
                setPendingMembers2(pendingInvites.map(invite => invite.User))

            }

        })()
    }, [dispatch, event, eventId, sessionUser, eventLoaded])


    if (attendeeIds  && sessionUser &&  attendeeIds.indexOf(sessionUser.id) === -1 && !invited ) {
        dispatch(destroyEvent(eventId, true))
        history.push('/events')
    }
 
    const deleteCheck = (userId, owner, currentUserId) => {
        return currentUserId === owner && userId !== owner
    }


    const handleRemovePending = async(e, userId) => {
        e.preventDefault()
        await dispatch(destroyEventInvite(eventId, userId))
        setPendingMembers2(Object.values(pending))
    }

    const handleRemoveMember = async(e, userId) => {
        e.preventDefault()
        await dispatch(destroyAttendee(eventId, userId))
        await dispatch(fetchEvent(eventId));
    }

    const pendingMembersContent = (
        <div>
            <UsersList users={pendingMembers2} deleteFunction={handleRemovePending} deleteCheck={deleteCheck} owner={event?.host}/>
        </div>
    )

    const handleDelete = async(e) => {
        e.preventDefault()
        await dispatch(destroyEvent(eventId))
        history.push("/events")
    }
    const handleLeave = async(e) => {
        e.preventDefault()
        history.push("/events")
        await dispatch(leaveEvent(eventId, sessionUser.id))
    }

    const handleAccept= async(e) => {
        e.preventDefault()
        await dispatch(attendEvent(eventId, sessionUser.id))
        await dispatch(destroyUserEventInvite(sessionUser.id, eventId, true))
    }

    const handleDecline = async(e) => {
        e.preventDefault()
        await dispatch(destroyUserEventInvite(sessionUser.id, eventId, false))
        history.push('/events')
        await dispatch(destroyEvent(eventId, true))
    }


    let deleteContent;
    if (sessionUser && event && !invited && pendingIds?.indexOf(sessionUser.id) === -1) {
        if(sessionUser.id === event.host) {
            deleteContent = <button onClick={handleDelete}>Delete Event</button>
        } else {
            deleteContent = <button onClick={handleLeave}>Leave Event</button>
        }
    }

    const handleShowPending = e => {
        e.preventDefault()
        setShowPending(true)
    }
    
    const handleHidePending = e => {
        e.preventDefault()
        setShowPending(false)
    }

    const isLoaded = () => {
        if (event) return true
        return null
    }
    return isLoaded() && (
        <div className="group-page-container">
            <div className="edit-delete-group-container">
                {sessionUser?.id === event?.host && <EditEventModal event={event}/>}
                {deleteContent}
                { (attendeeIds?.indexOf(sessionUser?.id) === -1 && invited) && <button onClick={handleAccept}>Accept Invitation</button>}
                { (attendeeIds?.indexOf(sessionUser?.id) === -1 && invited) && <button onClick={handleDecline}>Decline Invitation</button>}
            </div>
            <div className="group-info-container">
                    <img alt="event" className="group-groupPic" src={event?.eventPic} />
                    <h1 className="group-groupname">{event?.name}</h1>
                    <h2 className="event-duration">Duration: {event?.duration > 1 ? event?.duration + " days" : event?.duration + " day"} </h2>
                    <h2 className="event-startdate">Start Date: {event && new Date(event.startDate).toDateString()}</h2>
            </div>
            <div>
                {event?.totalCost && <h2>Total Cost: {event.totalCost}</h2>}
            </div>
            <div className="group-pending-invite-section">
                    {showPending ? <h1>Pending Invites</h1> : <h1>Joined Members</h1>}
                    <div className="invite-pending-div">
                        {sessionUser?.id === event?.host && <InviteEventModal setPendingMembers2={setPendingMembers2}/>}
                        {sessionUser?.id === event?.host && !showPending && <button onClick={e => handleShowPending(e)}>Show Pending</button>}
                        {sessionUser?.id === event?.host && showPending && <button onClick={e => handleHidePending(e)}>Hide Pending</button>}
                    </div>
            </div>
            <div>
                {
                !showPending &&  attendees &&
                    <div>
                        <UsersList users={attendees} deleteFunction={handleRemoveMember} deleteCheck={deleteCheck} owner={event.host}/>
                    </div>
                }      
                { 
                showPending && pendingMembersContent
                }
            </div>
        </div>
    )
}

export default IndividualEvent
