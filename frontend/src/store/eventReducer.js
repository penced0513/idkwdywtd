import { csrfFetch } from "./csrf";

const GET_EVENTS = 'event/getEvents'
const GET_EVENT = 'event/getEvent'
const GET_PENDING = 'event/getPending'
const NEW_EVENT = 'event/newEvent'
const PUT_EVENT = 'event/putEvent'
const DELETE_EVENT = 'event/deleteEvent'
const INVITE_TO_EVENT = 'event/inviteToEvent'
const REMOVE_EVENT_INVITE = 'event/removeEventInvite' 
const REMOVE_EVENT_MEMBER = 'event/removeAttendee'
const LOGOUT = 'event/logout'

const getEvents = (events) => {
    return { type: GET_EVENTS, events };
};

const getEvent = (event) => {
    return {
        type: GET_EVENT,
        event
    }
}

const newEvent = (event) => {
    return { 
        type: NEW_EVENT,
        event
    }
}

const putEvent = event => {
    return {
        type: PUT_EVENT,
        event
    }
}

const getPending = (eventId, invites) => {
    return {
        type: GET_PENDING,
        payload: {
            eventId, invites
        }
    }
}

const deleteEvent = (eventId) => {
    return {
        type: DELETE_EVENT,
        eventId
    }
}

const eventInvite = (invite) => {
    return {
        type: INVITE_TO_EVENT,
        invite
    }
}

const removeEventInvite = (eventId, userId) => {
    return {
        type: REMOVE_EVENT_INVITE,
        payload: {
            eventId, userId
        }
    }
}

const removeAttendee = (eventId, userId) => {
    return {
        type: REMOVE_EVENT_MEMBER,
        payload: {
            eventId, userId
        }
    }
}


export const eventsLogout = () => {
    return {
        type: LOGOUT
    }
}

export const fetchEvents = (userId) => async(dispatch) => {
    const res = await csrfFetch(`/api/users/${userId}/events`)
    if (res.ok) {
        const events = await res.json()
        dispatch(getEvents(events))
    }
}

export const fetchEvent = (eventId ) => async(dispatch) => {
    const res = await csrfFetch(`/api/events/${eventId}`)
    if (res.ok) {
        const event = await res.json()
        if (event) dispatch(getEvent(event))
    }
}

export const postEvent = (eventName, userId) => async(dispatch) => {
    const payload = {name: eventName, userId}
    const res = await csrfFetch(`/api/events/new`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if (res.ok) {
        const event = await res.json()
        dispatch(newEvent(event, userId))
        return(event)
    }
}

export const fetchPending = (eventId) => async(dispatch) => {
    const res = await csrfFetch(`/api/events/${eventId}/pending`)
    if (res.ok) {
        const invites = await res.json()
        dispatch(getPending(eventId, invites))
        return invites
    }
}

export const inviteToEvent = (eventId, userId) => async(dispatch) => {
    const res = await csrfFetch(`/api/events/${eventId}/invite`, {
        method: "post",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({userId})
    })
    if (res.ok) {
        const invite = await res.json()
        dispatch(eventInvite(invite))
    }
}

export const destroyEventInvite = (eventId, userId) => async(dispatch) => {
    const res = await csrfFetch(`/api/events/${eventId}/uninvite`, {
        method: "post",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({userId})
    })

    if (res.ok) {
        dispatch(removeEventInvite(eventId, userId))
    }
}

export const destroyAttendee = (eventId, userId) => async(dispatch) => {
    const res = await csrfFetch(`/api/events/${eventId}/remove`, {
        method: "post",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({userId})
    })
    if (res.ok) {
        dispatch(removeAttendee(eventId, userId))
    }
}

export const editEvent = (eventId, eventName, eventPic) => async(dispatch) => {
    const payload = { eventName, eventPic}
    const res = await csrfFetch(`/api/events/${eventId}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if (res.ok) {
        const event = await res.json()
        dispatch(putEvent(event))
        return event
    }
}

export const destroyEvent = (eventId) => async(dispatch) => {

    const res = await csrfFetch(`/api/events/${eventId}`, {
        method: "DELETE"
    })

    if (res.ok) {
        dispatch(deleteEvent(eventId))
        return true
    }
}

export const leaveEvent = (eventId, userId) => async(dispatch) => {
    const res = await csrfFetch(`/api/events/${eventId}/leave`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({userId})
    })

    if (res.ok) {
        dispatch(deleteEvent(eventId))
        return true
    }
}
const initialState = { }
const eventReducer = ( state= initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case GET_EVENTS: 
            Object.values(action.events).forEach(event => {
                newState[event.Event.id] = event.Event
            })
            return newState
        case GET_EVENT: 
            newState[action.event.id] = action.event
            return newState
        case PUT_EVENT: 
            newState[action.event.id] = action.event
            return newState
        case NEW_EVENT:
            newState[action.event.id] = action.event
            return newState
        case GET_PENDING:
            const pending = {}
            action.payload.invites.forEach(invite => {
                pending[invite.User.id] = invite.User
            })
            newState[action.payload.eventId].pending = pending
            return newState
        case DELETE_EVENT:
            delete newState[action.eventId]
            return newState
        case INVITE_TO_EVENT:
            newState[action.invite.eventId].pending[action.invite.User.id] = action.invite.User
            return newState
        case REMOVE_EVENT_INVITE:
            delete newState[action.payload.eventId].pending[action.payload.userId]
            return newState
        case LOGOUT:
            return initialState
        default: 
            return state;
    }
}

export default eventReducer
