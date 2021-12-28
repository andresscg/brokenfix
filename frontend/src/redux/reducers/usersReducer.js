const usersReducer = (
    state = {
        user: null,
        token: null,
        img: null,
        admin: null,
        users: []
    }, action) => {
    if (action.type === 'LOG_USER') {
        return {
            ...state,
            user: action.payload.user,
            token: action.payload.token,
            img: action.payload.img,
            admin: action.payload.admin
        }

    } else if (action.type === 'LOG_OUT') {
        localStorage.clear()
        return {
            ...state,
            user: null,
            token: null,
            img: null,
            admin: null
        }
    } else if (action.type === 'GET_USERS') {
        return {
            ...state,
            users: action.payload,
        }

    } else {

        return state
    }
}


export default usersReducer;