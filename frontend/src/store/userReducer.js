import { csrfFetch } from "./csrf";

const GET_USERS = 'user/getUsers'

const getUsers = (users) => {
    return {
        type: GET_USERS,
        users
    }
}

export const fetchUsers = () => async(dispatch) => {
    const res = await csrfFetch(`/api/users`)

    if (res.ok) {
        const users = await res.json()
        dispatch(getUsers(users))
    }
}


const initialState = {}
const userReducer = ( state= initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case GET_USERS: 
            Object.values(action.users).forEach(user => {
                newState[user.id] = user
            })
            return newState
        default: 
            return state;
    }
}

export default userReducer
