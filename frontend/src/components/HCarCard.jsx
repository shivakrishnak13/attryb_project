import React from "react";
import { styled } from "styled-components";

const HCarCard = ({
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
  price,
}) => {
  return (
    <DIV>
      <div className="image">
        <img src={image} alt="car" />
      </div>
      <div className="details">
        <h6>{title}</h6>
        <h5>₹{price}</h5>
      </div>
      <div className="other">
         <div className="kms">
            {kmOnOdometer}
         </div>
         <div className="kms">
             {majorScratches}
         </div>
      </div>
    </DIV>
  );
};

export default HCarCard;

const DIV = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 0.5rem;
  width: 300px;
    background-color: #222732;
  .image {
    width: 100%;
    height: 150px;
    img {
      width: 100%;
      height: 150px;
      border-top-right-radius: 0.5rem;
      border-top-left-radius: 0.5rem;
    }
  }
  .details {
    padding: 10px;
    h6 {
      font-size: 18px;
      margin-bottom: 7px;
      color: #9b9bae;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: start;
    }
    h5 {
       font-size:20px;
       text-align: start;
       font-weight: 400;
       font-family: sans-serif;
       letter-spacing: 0.5px;
    color: #e1dddd;
    }    
}
.other{
    width: 100%;
    padding: 10px;
    border-top: 0.5px solid #e1dddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        color: white;
    }
}
.kms{
    
   margin-top: 10px;
    padding: 5px;
    background-color: teal;
    border-radius: 0.5rem;
    color: white;
}
`;
