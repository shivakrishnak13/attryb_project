import axios from "axios"
import { DEALER_AUTH, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_SUCCESS } from "./actionType";

let url = "https://attryb-backend-blond.vercel.app"
export const fetchLogin = (payload) => (dispatch) => {

    

    console.log(payload.email.split("@")[1]=== "dealer.com")
    dispatch({type:LOGIN_REQUEST})
    return  axios.post(`${url}/user/login`,payload).then((res)=>{
        
        if(res.data.token !== undefined){
            localStorage.setItem("token",res.data.token);
            if(payload.email.split("@")[1] === "dealer.com"){
                dispatch({type:DEALER_AUTH,payload:res.data.token})
            }else{
                dispatch({type:LOGIN_SUCCESS,payload:res.data.token,name: res.data.user.name});
            }
            
        }   

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
        console.log(err)
        dispatch({type:LOGIN_FAILURE,payload:err.response.data.Error})
    })
};