const usersReducer = (
    state = {
        user: null,
        token: null,
        img: null,
        admin: null
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
    } else {
        return state
    }
}

export default usersReducer;