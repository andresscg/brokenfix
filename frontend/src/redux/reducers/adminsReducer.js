const initialState = {
    workers: [],
    services: [],
    users: []
}


const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getWorkers':
            return {
                ...state,
                workers: action.payload,
            }
        case 'getUsers':
            return {
                ...state,
                users: action.payload
            }
        case 'getServices':
            return {
                ...state,
                services: action.payload
            }
        default: return state
    }
}

export default adminReducer