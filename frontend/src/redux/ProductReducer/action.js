import axios from "axios";
import {
  CAR_FAILURE,
  CAR_REQUEST,
  DELETE_CAR_SUCCESS,
  EDIT_CAR_SUCCESS,
  GET_CAR_SUCCSESS,
} from "./actionType";

let url = "https://attryb-backend-blond.vercel.app";

export const getCars = (params) => (dispatch) => {
  if (
    params.color === null &&
    params.price === null &&
    params.mileage === null
  ) {
    params.price = "";
    params.color = "";
    params.mileage = "";
  } else if (params.price === null && params.mileage === null) {
    params.price = "";
    params.mileage = "";
  } else if (params.color === null && params.price === null) {
    params.price = "";
    params.color = "";
  }else if (params.color === null && params.mileage === null){
    params.color= "" ;
    params.mileage="";
  }else if(params.color === null){
    params.color=""
  }else if(params.price === null){
    params.price="";
  }else if(params.mileage === null){
    params.mileage="";
  }




  dispatch({ type: CAR_REQUEST });
  axios
    .get(
      `${url}/inventory/cars?price=${params.price}&color=${params.color}&mileage=${params.mileage}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .then((res) => {
      dispatch({ type: GET_CAR_SUCCSESS, payload: res.data.data });
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: CAR_FAILURE });
    });
};

export const editCar = (payload, id) => (dispatch) => {
  console.log(localStorage.getItem("token"));
  dispatch({ type: CAR_REQUEST });
  return axios
    .patch(`${url}/inventory/edit-car/${id}`, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      dispatch({ type: EDIT_CAR_SUCCESS });

      console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: CAR_FAILURE });
    });
};

export const deleteCar = (id) => (dispatch) => {
  dispatch({ type: CAR_REQUEST });
  return axios
    .delete(`${url}/inventory/delete-car/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      dispatch({ type: DELETE_CAR_SUCCESS });

      console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: CAR_FAILURE });
    });
};

export const addCar = (payload) => (dispatch) => {
  console.log("add car");
  console.log(localStorage.getItem("token"));
  dispatch({ type: CAR_REQUEST });
  return axios
    .post(`${url}/inventory/add-car`, payload, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      dispatch({ type: EDIT_CAR_SUCCESS });

      console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: CAR_FAILURE });
    });
};
