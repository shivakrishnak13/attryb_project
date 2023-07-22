import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../redux/ProductReducer/action";
import { styled } from "styled-components";
import CarCard from "./CarCard";
import { Button, Heading } from "@chakra-ui/react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import {GrFormAdd} from "react-icons/gr"
const Products = () => {
  const [searchParams, _] = useSearchParams();
  const dispatch = useDispatch();
  const { cars, change } = useSelector((store) => store.CarsReducer);

  const color = searchParams.get("colors");
  const price = searchParams.get("price");
  const mileage = searchParams.get("mileage");
  const location = useLocation();

  let ParamObj = {
   
      color,
      price,
      mileage
    
  };
  

  useEffect(() => {
    dispatch(getCars(ParamObj));
  }, [change, location.search]);

  return (
    <DIV>
      <div className="haeading">
        <h1></h1>
        <h2>All Cars</h2>
        <button>
        <GrFormAdd style={{width:"30px",height:"30px"}} />
          <Link to={"/add-car"}> Add New car</Link>
        </button>
      </div>
      <div className="main">
        {cars.map((el) => {
          return <CarCard key={el._id} {...el} />;
        })}
      </div>
    </DIV>
  );
};

export default Products;

const DIV = styled.div`
  margin-left: 20px;
  .main {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .haeading {
    display: flex;
    justify-content: space-between;
    h2 {
      font-size: 45px;
      color: black;
      margin-left: 30px;
      font-weight: 700;
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
`;
