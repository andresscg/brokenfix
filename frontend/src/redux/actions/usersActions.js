import axios from 'axios';

const usersActions =  {
    signUpUser: (newUser) => {
        return async(dispatch, getState) => {    
            const res = await axios.post('http://localhost:4000/api/users/signup', {...newUser})
            if(res.data.success) {
                dispatch({type:'LOG_USER', payload: res.data.response});
            } else {
                console.error(response)
            }
        }
    },
    signInUser: (logUser) => {
        return async(dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/users/signin', {...logUser})
            if(res.data.success){
                dispatch({type: 'LOG_USER', payload: res.data.response})
            } else {
                console.error(res.data.response)
            }
            return res
        }
    },
    logOut: () => {
        return async (dispatch, getState) => {
            dispatch({type: "LOG_OUT"})
        }
    },
}

export default usersActions
