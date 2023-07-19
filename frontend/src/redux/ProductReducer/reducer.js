import { CAR_FAILURE, CAR_REQUEST, DELETE_CAR_SUCCESS, EDIT_CAR_SUCCESS, GET_CAR_SUCCSESS } from "./actionType";

const intialstate = {
    isLoading:false,
    cars:[],
    isError:false,
    change:false
}

export const reducer = (state=intialstate,{type,payload}) => {

    switch (type) {
        case CAR_REQUEST:
            return {
                ...state,
                isLoading : true,
                isError:false
            }
        case CAR_FAILURE:
            return {
                ...state,
                isLoading : false,
                isError:true
            }
        case GET_CAR_SUCCSESS:
            return {
                ...state,
                isLoading : false,
                cars:payload
            }
        case DELETE_CAR_SUCCESS:
            return {
                ...state,
                isLoading:false,
                change: !state.change
            }
        case EDIT_CAR_SUCCESS:
            return {
                ...state,
                isLoading:false,
                change: !state.change
            }
        default:
            return state;
    }



}