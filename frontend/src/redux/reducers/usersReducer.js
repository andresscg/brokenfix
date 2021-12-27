const usersReducer = (
    state = {
        user: null,
        token: null
}, action) => {
    if(action.type === 'LOG_USER'){
        localStorage.setItem('token', action.payload.token);
        return {
            ...state,
            user : action.payload,
            token: action.payload.token
        }

    }else if(action.type === 'LOG_OUT'){
        localStorage.clear()
        return {
            user : null,
            token: null
        }
    } else {

    }
}

export default usersReducer;