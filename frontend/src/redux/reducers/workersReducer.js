const initialState = {
    workers: [],
}


const workersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getWorkers':
            return {
                ...state,
                workers: action.payload,
            }

        default: return state
    }
}

export default workersReducer