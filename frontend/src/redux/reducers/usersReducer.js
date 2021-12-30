const usersReducer = (
    state = {
        user: null,
        token: null,
        img: null,
        role: null,
        users: [],
        aux: []
    }, action) => {
    if (action.type === 'LOG_USER') {
        localStorage.setItem('token', action.payload.token);
        return {
            ...state,

            user: action.payload,
            token: action.payload.token,
            img: action.payload.img,
            role: action.payload.range
        }

    } else if (action.type === 'LOG_OUT') {
        localStorage.clear()
        return {
            user: null,
            token: null,
            img: null
        }
    } else if (action.type === 'GET_USERS') {
        return {
            ...state,
            users: action.payload
        }

    } else if (action.type === 'DELETE_USER') {
        const filtered = state.users.filter(userDB => userDB._id !== action.payload)
        return {
            ...state,
            users: filtered
        }
    } else {

        return state
    }
}


export default usersReducer;