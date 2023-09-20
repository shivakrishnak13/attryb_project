import { DEALER_AUTH, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SIGNUP_SUCCESS } from "./actionType";

const intialstate = {
    isauth:false,
    token:"",
    isLoading:false,
    isError:false,
    isdealerauth:false,
    errorMessage:"",
    username:""
};


export const reducer = (state= intialstate,{type,payload,name}) => {
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                isauth :true,
                token : payload,
                isLoading : false,
                isError : false,
                username: name
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading : false,
                isError : true,
                errorMessage : payload
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading:false,
                isError:false
            }
        case DEALER_AUTH:
            return {
                ...state,
                isdealerauth:true,
                isauth:true,
                isLoading:false,
                isError:false,
                token : payload,
            }
        case LOGOUT:
            return {
                ...state,
                isdealerauth:false,
                isauth:false,
                isLoading:false,
                isError:false
            }
        default:
            return state;
    }
}