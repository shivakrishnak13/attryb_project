import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCSESS, SIGNUP_SUCCESS } from "./actionType";

let url = "http://localhost:4500";

export const fetchLogin = (payload) => (dispatch) => {
    dispatch({type:LOGIN_REQUEST})
    return axios.post(`${url}/user/login`,payload).then((res)=>{
        dispatch({type:LOGIN_SUCSESS,payload:res.data.token});
        console.log(res.data)
    }).catch((err)=>{ 
        console.log(err.response.data.Error)
        dispatch({type:LOGIN_FAILURE,payload:err.response.data.Error})
    })
};

export const fetchregister = (payload) => (dispatch) => {
    dispatch({type:LOGIN_REQUEST})
    return axios.post(`${url}/user/register`,payload).then((res)=>{
        dispatch({type:SIGNUP_SUCCESS})
        console.log(res.data)
    }).catch((err)=>{ 
        console.log(err.response.data.Error)
        dispatch({type:LOGIN_FAILURE,payload:err.response.data.Error})
    })
};