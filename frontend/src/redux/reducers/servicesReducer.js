<<<<<<< HEAD
const servicesReducer = (state = {allServices:[], newService:{}}, action) => {
  switch(action.type) {
    case 'GET_SERVICES':
      return{
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
=======
const servicesReducer = (
  state = { allServices: [], newService: {} },
  action
) => {
  switch (action.type) {
    case "GET_SERVICES":
      return {
        ...state,
        allServices: action.payload,
      };
    case "GET_ONE_SERVICE":
      let oneService = state.allServices.find(
        (service) => service._id === action.payload
      );
      return {
        ...state,
        newService: oneService,
      };
    default:
      return state;
  }
};
>>>>>>> f19d550a25360156d5cea6d3cea4eab0cea1b484

export default servicesReducer;
