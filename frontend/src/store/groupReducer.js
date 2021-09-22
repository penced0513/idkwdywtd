import { csrfFetch } from "./csrf";

const GET_GROUPS = 'group/getGroups'
const GET_GROUP = 'group/getGroup'
const NEW_GROUP = 'group/newGroup'
const GET_PENDING = 'group/getPending'

const getGroups = (groups) => {
    return { type: GET_GROUPS, groups };
};

const getGroup = (group) => {
    return {
        type: GET_GROUP,
        group
    }
}

const newGroup = (group) => {
    return { 
        type: NEW_GROUP,
        group
    }
}

const getPending = (groupId, invites) => {
    return {
        type: GET_PENDING,
        payload: {
            groupId, invites
        }
    }
}

export const fetchGroups = (userId) => async(dispatch) => {
    const res = await csrfFetch(`/api/users/${userId}/groups`)
    if (res.ok) {
        const groups = await res.json()
        dispatch(getGroups(groups))
    }
}

export const fetchGroup = (groupId ) => async(dispatch) => {
    const res = await csrfFetch(`/api/groups/${groupId}`)
    if (res.ok) {
        const group = await res.json()
        if (group) dispatch(getGroup(group))
    }
}

export const postGroup = (groupName, userId) => async(dispatch) => {
    const payload = {name: groupName, userId}
    const res = await csrfFetch(`/api/groups/new`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if (res.ok) {
        const group = await res.json()
        dispatch(newGroup(group, userId))
        return(group)
    }
}

export const fetchPending = (groupId) => async(dispatch) => {
    const res = await csrfFetch(`/api/groups/${groupId}/pending`)
    if (res.ok) {
        const invites = await res.json()
        dispatch(getPending(groupId, invites))
    }
}
const groupReducer = ( state= {}, action) => {
    let newState = { ...state }
    switch (action.type) {
        case GET_GROUPS: 
            Object.values(action.groups).forEach(group => {
                newState[group.Group.id] = group.Group
            })
            return newState
        case GET_GROUP: 
            newState[action.group.id] = action.group
            return newState
        case NEW_GROUP:
            newState[action.group.id] = action.group
            return newState
        case GET_PENDING:
            const pending = {}
            action.payload.invites.forEach(invite => {
                pending[invite.User.id] = invite.User
            })
            newState[action.payload.groupId].pending = pending
            return newState
        default: 
            return state;
    }
}

export default groupReducer
