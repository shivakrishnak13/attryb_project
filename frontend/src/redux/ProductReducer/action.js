import axios from "axios"
import { CAR_FAILURE, CAR_REQUEST, DELETE_CAR_SUCCESS, EDIT_CAR_SUCCESS, GET_CAR_SUCCSESS } from "./actionType";

let url = "http://localhost:4500";

export const getCars = (params) => (dispatch) =>{
        dispatch({type:CAR_REQUEST})
        axios.get(`${url}/inventory/cars`, {
            params: params,
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VycyI6ImxvZ2luIiwiaWF0IjoxNjg5NzYyMjYwfQ.TJqJfpXwmNQMiZK1gSAB7YZKrgKUvv3ptjMkUWjc_EY"}`,
            },
          })
            .then((res) => {
              dispatch({ type: GET_CAR_SUCCSESS, payload: res.data.data });
              console.log(res.data);
            })
            .catch((err) => {
              dispatch({ type: CAR_FAILURE });
            });
} 


export const editCar = (payload,id) => (dispatch) =>{

    dispatch({type:CAR_REQUEST})
   return axios.patch(`${url}/inventory/edit-car/${id}`,payload, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VycyI6ImxvZ2luIiwiaWF0IjoxNjg5NzYyMjYwfQ.TJqJfpXwmNQMiZK1gSAB7YZKrgKUvv3ptjMkUWjc_EY"}`,
        },
      })
        .then((res) => {
          dispatch({ type: EDIT_CAR_SUCCESS});
          
          console.log(res.data);
        })
        .catch((err) => {
          dispatch({ type: CAR_FAILURE });
        });
}


export const deleteCar = (id) => (dispatch) =>{

    dispatch({type:CAR_REQUEST})
   return axios.delete(`${url}/inventory/delete-car/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VycyI6ImxvZ2luIiwiaWF0IjoxNjg5NzYyMjYwfQ.TJqJfpXwmNQMiZK1gSAB7YZKrgKUvv3ptjMkUWjc_EY"}`,
        },
      })
        .then((res) => {
          dispatch({ type: DELETE_CAR_SUCCESS});
          
          console.log(res.data);
        })
        .catch((err) => {
          dispatch({ type: CAR_FAILURE });
        });
}