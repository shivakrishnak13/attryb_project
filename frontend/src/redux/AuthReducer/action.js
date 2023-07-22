import axios from "axios"
import { DEALER_AUTH, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCSESS, SIGNUP_SUCCESS } from "./actionType";

let url = "https://buy-cars.onrender.com";

export const fetchLogin = (payload) => (dispatch) => {

    

    console.log(payload.email.split("@")[1]=== "dealer.com")
    dispatch({type:LOGIN_REQUEST})
    return axios.post(`${url}/user/login`,payload).then((res)=>{
       

        localStorage.setItem("token",res.data.token);

        if(payload.email.split("@")[1] === "dealer.com"){
            dispatch({type:DEALER_AUTH})
        }else{
            dispatch({type:LOGIN_SUCSESS,payload:res.data.token,name: res.data.user.name});
        }


        console.log("hair",res.data)
    }).catch((err)=>{ 
        console.log("login",err.response.data.Error)
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