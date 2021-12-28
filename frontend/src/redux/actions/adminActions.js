import axios from 'axios';

const adminActions = {
    getWorkers: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/workers')
            dispatch({ type: 'getWorkers', payload: res.data.workers })
        }
    },
    getUsers: () => {
        return async (dispatch, getState) => {
            const token = localStorage.getItem('token')
            const res = await axios.get('http://localhost:4000/api/admin/users', {
                headers: { 'Authorization': 'Bearer ' + token }
            })
            dispatch({ type: 'getUsers', payload: res.data.users })
        }
    },
    getServices: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/services')
            dispatch({ type: 'getServices', payload: res.data.services })
        }
    }
}

export default adminActions
