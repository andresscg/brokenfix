import axios from 'axios';

const usersActions =  {
    signUpUser: (newUser) => {
        return async(dispatch, getState) => {    
            const res = await axios.post('http://localhost:4000/api/user/signup', {...newUser})
            if(res.data.success && !res.data.error) {
                dispatch({type:'LOG_USER', payload: res.data.response});
                return res
            } else {
                console.error(res)
                return res
            }
        }
    },
    signInUser: (logUser) => {
        return async(dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/user/signin', {...logUser})
            console.log(res)
            if(res.data.success){
                dispatch({type: 'LOG_USER', payload: res.data.response})
                return res
            } else {
                console.error(res.data.response)
                return res
            }
        }
    },
    logOut: () => {
        return async (dispatch, getState) => {
            dispatch({type: "LOG_OUT"})
        }
    },
    authUser: (token) => {
        return async (dispatch, getState) => {
            try{
                const response = await axios.get('http://localhost:4000/api/user/auth', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        }
                })
                const authUser = response.data.response
                authUser.token = token
                dispatch({type:"LOG_USER", payload: authUser})
            }catch(error) {
                console.error(error)
                return  dispatch({type:'LOG_OUT' })
            }
        }
    }
}

export default usersActions
