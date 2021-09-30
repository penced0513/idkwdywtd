import { csrfFetch } from "./csrf"
import { deleteEvent } from "./eventReducer"

const GET_GROUP_INVITES = 'invites/getGroupInvites'
const REMOVE_GROUP_INVITE = 'invites/removeGroupInvite'
const GET_EVENT_INVITES = 'invites/getEventInvites'
const REMOVE_EVENT_INVITE = 'invites/removeEventInvite'


const getGroupInvites = (groups) => {
    return {
        type: GET_GROUP_INVITES,
        groups
    }
}

const removeGroupInvite = (groupId) => {
    return {
        type: REMOVE_GROUP_INVITE,
        groupId
    }
}

const getEventInvites = (events) => {
    return {
        type: GET_EVENT_INVITES,
        events
    }
}

const removeEventInvite = (eventId) => {
    return {
        type: REMOVE_EVENT_INVITE,
        eventId
    }
}

export const fetchGroupInvites = (userId) => async(dispatch) => {
    const res = await csrfFetch(`/api/users/${userId}/groups/invited`)

    if (res.ok) {
        const groups = await res.json()
        dispatch(getGroupInvites(groups))
    }
}

export const fetchEventInvites = (userId) => async(dispatch) => {
    const res = await csrfFetch(`/api/users/${userId}/events/invited`)

    if (res.ok) {
        const events = await res.json()
        dispatch(getEventInvites(events))
    }
}

export const destroyUserGroupInvite = (userId, groupId, accepted) => async(dispatch) => {
    if (!accepted) {
        const res = await csrfFetch(`/api/users/${userId}/groups/${groupId}/reject`, {
            method: "DELETE"
        })
        if (!res.ok) {
            return
        }
        
    }
    dispatch(removeGroupInvite(groupId))
}

export const destroyUserEventInvite = (userId, eventId, accepted) => async(dispatch) => {
    if (!accepted) {
        const res = await csrfFetch(`/api/users/${userId}/events/${eventId}/reject`, {
            method: "DELETE"
        })
        if (!res.ok) {
            return
        }
        
    }
    dispatch(removeEventInvite(eventId))
}


const initialState = { groups: {}, events:{} }
const inviteReducer = ( state= initialState, action) => {
    let newState = {...state}
    switch (action.type) {
        case GET_GROUP_INVITES:
            Object.values(action.groups).forEach(group => {
                newState.groups[group.Group.id] = group.Group
            })
            return newState
        case GET_EVENT_INVITES:
            Object.values(action.events).forEach(event => {
                newState.events[event.Event.id] = event.Event
            })
            return newState
        case REMOVE_GROUP_INVITE:
            delete newState.groups[action.groupId]
            return newState
        case REMOVE_EVENT_INVITE:
            delete newState.events[action.eventId]
            return newState
        default:
            return state;
    }
}

export default inviteReducer
