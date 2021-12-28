import axios from 'axios';

const usersActions = {
    signUpUser: (newUser) => {
        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/user/signup', newUser)
            if (res.data.success && !res.data.error) {
                localStorage.setItem('token', res.data.response.token)
                dispatch({ type: 'LOG_USER', payload: { _id: res.data.response._id, token: res.data.response.token, img: res.data.response.img, name: res.data.response.name, admin: res.data.response.admin } });
                return res
            } else {
                console.error(res)
                return res
            }
        }
    },
    signInUser: (logUser) => {
        const user = { ...logUser }
        console.log(user);
        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/user/signin', { ...logUser })
            if (res.data.success && !res.data.error) {
                localStorage.setItem('token', res.data.response.token)
                dispatch({ type: 'LOG_USER', payload: { _id: res.data.response._id, token: res.data.response.token, img: res.data.response.img, name: res.data.response.name, admin: res.data.response.admin } })
                return res
            } else {
                console.log(res)
                return res
            }
        }
    },
    isAuth: () => {
        return async (dispatch, getState) => {
            try {
                const token = localStorage.getItem('token')
                const res = await axios.get('http://localhost:4000/api/user/auth', {
                    headers: { 'Authorization': 'Bearer ' + token }
                })
                dispatch({ type: 'usuario', payload: { _id: res.data.response._id, token: res.data.response.token, img: res.data.response.img, name: res.data.response.name, admin: res.data.response.admin } })
                return { response: res.data.response }
            } catch (error) {
                return { error: 'Unauthorized user, try login again' }
            }
        }
    },
    logOut: () => {
        return async (dispatch, getState) => {
            dispatch({ type: "LOG_OUT" })
        }
    },
}

export default usersActions
