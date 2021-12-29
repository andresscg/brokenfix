import axios from 'axios';

const usersActions = {
    signUpUser: (newUser) => {
        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/user/signup', newUser)
            if (res.data.success && !res.data.error) {
                localStorage.setItem('token', res.data.response.token)
                dispatch({ type: 'LOG_USER', payload: { _id: res.data.response._id, token: res.data.response.token, img: res.data.response.img, name: res.data.response.name, range: res.data.response.range } });
                return res
            } else {
                console.error(res)
                return res
            }
        }
    },
    signInUser: (logUser) => {
        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/user/signin', { ...logUser })
            if (res.data.success && !res.data.error) {
                localStorage.setItem('token', res.data.response.token)
                dispatch({ type: 'LOG_USER', payload: { _id: res.data.response._id, token: res.data.response.token, img: res.data.response.img, name: res.data.response.name, range: res.data.response.range } })
                return res
            } else {
                console.log(res)
                return res
            }
        }
    },
    logOut: () => {
        return async (dispatch, getState) => {
            dispatch({ type: "LOG_OUT" })
        }
    },
    authUser: (token) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.get('http://localhost:4000/api/user/auth', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                const authUser = response.data.response
                authUser.token = token
                dispatch({ type: "LOG_USER", payload: authUser })
            } catch (error) {
                console.error(error)
                return dispatch({ type: 'LOG_OUT' })
            }
        }
    },
    getUsers: () => {
        return async (dispatch, getState) => {
            try {
                const token = localStorage.getItem('token')
                const res = await axios.get('http://localhost:4000/api/admin/users', {
                    headers: { 'Authorization': 'Bearer ' + token }
                })
                dispatch({ type: 'GET_USERS', payload: res.data.users })
                return res.data.users
            } catch (error) {
                return { msg: 'Unauthorized' }
            }

        }
    },
    deleteUser: (userId) => {
        return async (dispatch, getState) => {
            try {
                const token = localStorage.getItem('token')
                const res = await axios.delete(`http://localhost:4000/api/admin/user/${userId}`, {
                    headers: { 'Authorization': 'Bearer ' + token }
                })
                // dispatch({ type: 'DELETE_USER', payload: res.data.users })
                return res.data.users
            } catch (error) {
                return { msg: 'You must be login' }
            }

        }
    },

}

export default usersActions
