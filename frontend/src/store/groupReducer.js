import { csrfFetch } from "./csrf";

const GET_GROUPS = 'group/getGroups'
const GET_GROUP = 'group/getGroup'
const GET_PENDING = 'group/getPending'
const NEW_GROUP = 'group/newGroup'
const PUT_GROUP = 'group/putGroup'
const DELETE_GROUP = 'group/deleteGroup'
const INVITE_TO_GROUP = 'group/inviteToGroup'
const REMOVE_GROUP_INVITE = 'group/removeGroupInvite' 
const REMOVE_GROUP_MEMBER = 'group/removeGroupMember'
const LOGOUT = 'group/logout'

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

const putGroup = group => {
    return {
        type: PUT_GROUP,
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

const deleteGroup = (groupId) => {
    return {
        type: DELETE_GROUP,
        groupId
    }
}

const groupInvite = (invite) => {
    return {
        type: INVITE_TO_GROUP,
        invite
    }
}

const removeGroupInvite = (groupId, userId) => {
    return {
        type: REMOVE_GROUP_INVITE,
        payload: {
            groupId, userId
        }
    }
}

const removeGroupMember = (groupId, userId) => {
    return {
        type: REMOVE_GROUP_MEMBER,
        payload: {
            groupId, userId
        }
    }
}


export const groupsLogout = () => {
    return {
        type: LOGOUT
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
        return invites
    }
}

export const inviteToGroup = (groupId, userId) => async(dispatch) => {
    const res = await csrfFetch(`/api/groups/${groupId}/invite`, {
        method: "post",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({userId})
    })
    if (res.ok) {
        const invite = await res.json()
        dispatch(groupInvite(invite))
    }
}

export const destroyGroupInvite = (groupId, userId) => async(dispatch) => {
    const res = await csrfFetch(`/api/groups/${groupId}/uninvite`, {
        method: "post",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({userId})
    })

    if (res.ok) {
        dispatch(removeGroupInvite(groupId, userId))
    }
}

export const destroyGroupMember = (groupId, userId) => async(dispatch) => {
    const res = await csrfFetch(`/api/groups/${groupId}/remove`, {
        method: "post",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({userId})
    })
    if (res.ok) {
        dispatch(removeGroupMember(groupId, userId))
    }
}

export const editGroup = (groupId, groupName, groupPic) => async(dispatch) => {
    const payload = { groupName, groupPic}
    const res = await csrfFetch(`/api/groups/${groupId}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if (res.ok) {
        const group = await res.json()
        dispatch(putGroup(group))
        return group
    }
}

export const destroyGroup = (groupId) => async(dispatch) => {

    const res = await csrfFetch(`/api/groups/${groupId}`, {
        method: "DELETE"
    })

    if (res.ok) {
        dispatch(deleteGroup(groupId))
        return true
    }
}

export const leaveGroup = (groupId, userId) => async(dispatch) => {
    const res = await csrfFetch(`/api/groups/${groupId}/leave`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({userId})
    })

    if (res.ok) {
        dispatch(deleteGroup(groupId))
        return true
    }
}
const initialState = { }
const groupReducer = ( state= initialState, action) => {
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
        case PUT_GROUP: 
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
        case DELETE_GROUP:
            delete newState[action.groupId]
            return newState
        case INVITE_TO_GROUP:
            newState[action.invite.groupId].pending[action.invite.User.id] = action.invite.User
            return newState
        case REMOVE_GROUP_INVITE:
            delete newState[action.payload.groupId].pending[action.payload.userId]
            return newState
        case LOGOUT:
            return initialState
        default: 
            return state;
    }
}

export default groupReducer
