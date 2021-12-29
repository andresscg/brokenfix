const workersReducer = (state = { workersByService: [], workers: [] }, action) => {
  switch (action.type) {
    case 'GET_WORKERS':
      console.log(action.payload);
      return {
        ...state,
        workers: action.payload
      }
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