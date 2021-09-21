import { csrfFetch } from "./csrf";

const GET_GROUPS = 'group/getGroups'

const getGroups = (groups) => {
    return { type: GET_GROUPS, groups };
};

export const fetchGroups = (userId) => async(dispatch) => {
    const res = await csrfFetch(`/api/users/${userId}/groups`)
    if (res.ok) {
        const groups = await res.json()
        dispatch(getGroups(groups))
    }
}

const groupReducer = ( state= {}, action) => {
    let newState = { ...state }
    switch (action.type) {
        case GET_GROUPS: 
            action.groups.forEach(group => {
                newState[group.id] = group
            })
            return newState
        default: 
            return state;
    }
}

export default groupReducer
