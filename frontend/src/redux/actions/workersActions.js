import axios from 'axios';

const workersActions = {
  getWorkersByService: (id) => {
    return async (dispatch, getState) => {
      let response = await axios.get(`https://brokandfix.herokuapp.com/api/workers/services/${id}`)
      if(!response.data.success){
        throw new Error('Problem communicating with server')
      }
      dispatch({type: 'GET_WORKERS_BY_SERVICE', payload: response.data.response})
    }
  },
  handleReview: (id, review, token) => {
    return async () => {
      try {
        let response = await axios.put(`https://brokandfix.herokuapp.com/api/rate/worker/${id}`, {review}, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        return response.data
      }catch(err) {
        console.log(err)
      }
    }
  },
  deleteReview: (id, reviewId, token) => {
    return async () => {
      let response;
      try{
        response = await axios.put(`https://brokandfix.herokuapp.com/api/worker/reviews/${id}`, {reviewId},{
          headers: {
            Authorization: "Bearer " + token
          }
        })
        console.log(response)
        if(response.data.success){
          return response.data
        }
      }catch(err) {
        console.log(err)
      }
    }
  }
}

export default workersActions
