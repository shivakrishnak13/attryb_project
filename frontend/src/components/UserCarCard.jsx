import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteCar, editCar } from "../redux/ProductReducer/action";
import Modal from "react-modal";
import { BsX } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { toast } from "react-toastify";
Modal.setAppElement('#root');





const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    width: '600px',
    height:"800px",
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'transform 0.3s ease',
  },
};


const UserCarCard = ({
  _id,
  accidentsReported,
  description,
  image,
  kmOnOdometer,
  majorScratches,
  title,
  previousBuyers,
  registrationPlace,
  originalPaint,
  price
}) => {
  
  const dispatch = useDispatch();
  


  



 

 

  
  

  
  
  return (
    <DIV>
      <img className="carImage" src={image} alt="img" />
      <div className="title">
        <h3>{title}</h3>
        
        <p>{description}</p>
        <h3>₹{price}</h3>
      </div>

      <div className="car-inventory">
        <div>
          <span>Accidents Reported</span>
          <p>{accidentsReported}</p>
        </div>
        <div>
          <span>Km On OdoMeter</span>
          <p>{kmOnOdometer}</p>
        </div>
        <div>
          <span>Major Scratches</span>
          <p>{majorScratches}</p>
        </div>
        <div>
          <span>Previous Buyers</span>
          <p>{previousBuyers}</p>
        </div>
        <div>
          <span>Registration Place</span>
          <p>{registrationPlace}</p>
        </div>
        <div>
          <span>Original Paint</span>
          <p>{originalPaint}</p>
        </div>
      </div>

      <div className="btns">
        <button className="contact" >Contact Dealer </button>
      </div>



    </DIV>
  );
};

export default UserCarCard;

const DIV = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 1rem;

  .title {
    padding-left: 15px;
    margin-top: 15px;

    h3 {
      font-size: 18px;
      font-weight: bold;
      text-align: start;
    }

    p {
      margin-top: 8px;
      font-size: 13px;
      text-align: start;
      height: 40px;
    }
  }

  .car-inventory {
    padding-left: 15px;
    margin-top: 15px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;

    div {
      background-color: #eceff1;
      border-radius: 0.7rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
      padding: 5px;
      margin-right: 10px;
      margin-top: 10px;

      span {
        font-size: 12px;
      }

      p {
        font-size: 16px;
      }
    }
  }

  .btns {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 20px;
  }
  .carImage {
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .contact{
    background-color: #4DB6AC;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .contact:hover{
    background-color:#3e9b91 ;
  }

 


  
`;

