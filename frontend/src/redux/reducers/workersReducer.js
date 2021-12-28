const initialState = {
    workers: [],
}


const workersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_WORKERS':
            return {
                ...state,
                workers: action.payload,
            }

        default: return state
    }
}

export default workersReducer