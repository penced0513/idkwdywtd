import { csrfFetch } from "./csrf";

const GET_GROUPS = 'group/getGroups'
const NEW_GROUP = 'group/newGroup'

const getGroups = (groups) => {
    return { type: GET_GROUPS, groups };
};

const newGroup = (group) => {
    return { 
        type: NEW_GROUP,
        group
    }
}


export const fetchGroups = (userId) => async(dispatch) => {
    const res = await csrfFetch(`/api/users/${userId}/groups`)
    if (res.ok) {
        const groups = await res.json()
        dispatch(getGroups(groups))
    }
}

export const postGroup = (groupName, userId) => async(dispatch) => {
    const payload = {groupName, userId}
    const res = await csrfFetch(`/api/groups/new`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })
    if (res.ok) {
        const group = await res.json()
        dispatch(newGroup(group, userId))
    }
}

const groupReducer = ( state= {}, action) => {
    let newState = { ...state }
    switch (action.type) {
        case GET_GROUPS: 
            Object.values(action.groups).forEach(group => {
                newState[group.id] = group
            })
            return newState
        case NEW_GROUP:
            newState[action.group.id] = action.group
            return newState
        default: 
            return state;
    }
}

export default groupReducer
