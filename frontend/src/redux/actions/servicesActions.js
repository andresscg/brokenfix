import axios from "axios";

const servicesActions = {
  getServices: () => {
    return async (dispatch, getState) => {
      let response = await axios.get("http://localhost:4000/api/services");
      if (!response.data.success) {
        throw new Error(response.data.error);
      }
      dispatch({ type: "GET_SERVICES", payload: response.data.services });
    };
  },
  getOneService: (id) => {
    return (dispatch, getState) => {
<<<<<<< HEAD
      dispatch({type: 'GET_ONE_SERVICE', payload:id});
    }
  }
}

export default servicesActions
=======
      dispatch({ type: "GET_ONE_SERVICE", payload: id });
    };
  },
};

export default servicesActions;
>>>>>>> f19d550a25360156d5cea6d3cea4eab0cea1b484
