const servicesReducer = (state = { allServices: [], newService: {} }, action) => {
  switch (action.type) {
    case 'GET_SERVICES':
      return {
        ...state,
        allServices: action.payload
      }
    case 'GET_ONE_SERVICE':
      let oneService = state.allServices.find(service => service._id === action.payload);
      return {
        ...state,
        newService: oneService
      }
    default:
      return state;
  }
}

export default servicesReducer;
