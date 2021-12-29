const workersReducer = (state = {workersByService:[]}, action) => {
  switch (action.type) {
    case 'GET_WORKERS_BY_SERVICE': 
      return {
        ...state,
        workersByService: action.payload
      }
    default:
      return state;
  }
}

export default workersReducer