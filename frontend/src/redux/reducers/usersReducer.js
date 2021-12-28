const usersReducer = (
    state = {
        user: null,
        token: null,
        img: null
}, action) => {
    console.log(action)
    if (action.type === 'LOG_USER') {
        return {
            ...state,
            user : action.payload,
            token: action.payload.token,
            img: action.payload.img
        }

    } else if (action.type === 'LOG_OUT') {
        localStorage.clear()
        return {
            user : null,
            token: null,
            img: null
        }
    } else {
        return state
    }
}

export default usersReducer;