import axios from 'axios';

const adminActions = {
    getWorkers: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/workers')
            dispatch({ type: 'GET_WORKERS', payload: res.data.workers })
        }
    },
    getUsers: () => {
        return async (dispatch, getState) => {
            const token = localStorage.getItem('token')
            const res = await axios.get('http://localhost:4000/api/admin/users', {
                headers: { 'Authorization': 'Bearer ' + token }
            })
            dispatch({ type: 'GET_USERS', payload: res.data.users })
        }
    },
    getServices: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/services')
            dispatch({ type: 'GET_SERVICES', payload: res.data.services })
        }
    }
}

export default adminActions
