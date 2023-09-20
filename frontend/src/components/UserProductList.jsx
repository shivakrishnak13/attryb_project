import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../redux/ProductReducer/action";
import { styled } from "styled-components";
import { Link, useLocation, useSearchParams } from "react-router-dom";

import UserCarCard from "./UserCarCard";
import Skeleton from "./Skeleton";

const UserProducts = () => {
  const [searchParams, _] = useSearchParams();
  const dispatch = useDispatch();
  const { cars, change, isLoading } = useSelector((store) => store.CarsReducer);
  const [isAuth,setisAuth] = useState(true)
  const array = new Array(12).fill(0)
  const color = searchParams.get("colors");
  const price = searchParams.get("price");
  const mileage = searchParams.get("mileage");
  const location = useLocation();
  

  let ParamObj = {
    color,
    price,
    mileage,
  };

  useEffect(() => {
    dispatch(getCars(ParamObj));
    const token = localStorage.getItem("token")
    if(!token){
      setisAuth(false)
    }
  }, [change, location.search]);

  console.log({isAuth});

  return (
    <DIV>
      <div className="haeading">
        <h2>Find Perfects Here</h2>
      </div>
      {isLoading ? (
        <div className="loaders">
          {
            array.map((el,i)=>{
              return <LOADING key={i}>
           <div className="skel_div">
                <Skeleton width={"100%"} height={"200px"} borderradius={"1rem"} />
    
                <div className="textload">
                <Skeleton width={"90%"} height={"20px"} />
                <Skeleton width={"60%"} height={"20px"} />
                </div>
                <div className="spec_div">
                  <Skeleton width={"140px"} height={"80px"} borderradius={"1rem"} />
                  <Skeleton width={"140px"} height={"80px"} borderradius={"1rem"} />
                  <Skeleton width={"140px"} height={"80px"} borderradius={"1rem"} />
                  <Skeleton width={"140px"} height={"80px"} borderradius={"1rem"} />
                  <Skeleton width={"140px"} height={"80px"} borderradius={"1rem"} />
                  <Skeleton width={"140px"} height={"80px"} borderradius={"1rem"} />
                </div>
    
              </div>
        </LOADING>
            })
          }
        </div>
      ) : isAuth? (
        <div className="main">
          {cars.map((el) => {
            return <UserCarCard key={el._id} {...el} />;
          })}
        </div>
        )
        :
        <div className="empty">
          <h3>Please <a href="/login">Login</a> to View Cars </h3>
        </div>
      
      }
    </DIV>
  );
};

export default UserProducts;

const DIV = styled.div`
  margin-left: 20px;
  .main {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .empty{
    margin-top: 30px;
    width: 100%;
    height: 1200px;
    background:#f5f7fa ;
    display: flex;
    justify-content: center;
    align-items:center;
    text-align:center;
    border-radius: 1rem;
  }
  .haeading {
    h2 {
      text-align: center;
      font-size: 45px;
      color: black;
      margin-left: 30px;
      font-weight: 700;
      padding-right: 20px;
    }
    button {
      margin-left: 190px;
      background-color: #027cee;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
      a {
        text-decoration: none !important;
        color: white;
      }
    }
    button:hover {
      background-color: #0084ff;
    }
  }
  .loaders{
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`;

const LOADING = styled.div`
    width: 350px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 1rem;
  .skel_div {
    .spec_div {
      width: 88%;
      margin: auto;
      display: grid;
      grid-template-columns: repeat(2,1fr);
      gap: 10px;
    }
    .textload{
      width: 90%;
      margin: 20px auto;
    }
  }
`;
