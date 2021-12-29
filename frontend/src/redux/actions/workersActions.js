import axios from 'axios';

const workersActions = {
  getWorkersByService: (id) => {
    return async (dispatch, getState) => {
      let response = await axios.get(`http://localhost:4000/api/workers/services/${id}`)
      if (!response.data.success) {
        throw new Error('Problem communicating with server')
      }
      dispatch({ type: 'GET_WORKERS_BY_SERVICE', payload: response.data.response })
    }
  },
  getWorkers: () => {
    return async (dispatch, getState) => {
      let response = await axios.get(`http://localhost:4000/api/workers`)
      if (!response.data.success) {
        throw new Error('Problem communicating with server')
      }

      dispatch({ type: 'GET_WORKERS', payload: response.data.workers })
    }
  }
}

export default workersActions
