import axios from 'axios';

const workersActions = {
    getWorkers: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/workers')
            dispatch({ type: 'request', payload: res.data.workers })
        }
    },

}

export default workersActions
