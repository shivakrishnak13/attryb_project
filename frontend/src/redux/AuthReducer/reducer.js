import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCSESS } from "./actionType";

const intialstate = {
    isAuth:false,
    token:"",
    isLoading:false,
    isError:false,
    errorMessage:""
};


export const reducer = (state= intialstate,{type,payload}) => {
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        case LOGIN_SUCSESS:
            return{
                ...state,
                isAuth :true,
                token : payload,
                isLoading : false,
                isError : false
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading : false,
                isError : true,
                errorMessage : payload
            }
    
        default:
            return state;
    }
}