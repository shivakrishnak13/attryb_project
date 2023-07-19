import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCars } from '../redux/ProductReducer/action';
import { styled } from 'styled-components';
import CarCard from './CarCard';
import { Button, Heading } from '@chakra-ui/react';
import { useLocation, useSearchParams } from 'react-router-dom';

const Products = () => {
    const [searchParams,_] = useSearchParams()
    const dispatch = useDispatch();
    const {cars,change} = useSelector((store)=> store.CarsReducer)

    const colors = searchParams.getAll("colors");
    const sort = searchParams.get("sort");
    const order = searchParams.get("order");
    const location = useLocation();

    let ParamObj={
        params : {
          color:colors,
          sort: sort ,
          order : order
        }
      }


    useEffect(()=> {
       dispatch(getCars(ParamObj));
    },[change,location.search])





  return (
    <DIV>
        <div className='haeading'>
            <h1></h1>
         <Heading ml={"150px"}>All Cars</Heading>
          <Button colorScheme={"blue"}>
            Add New car
          </Button>
        </div>
        <div className='main'>
            { cars.map((el) => {
                return <CarCard key={el._id} {...el} />
            })}
        </div>
    </DIV>
  )
}

export default Products;

const DIV =  styled.div`
    margin-left: 20px;
    .main{
        margin-top: 30px;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 20px;
    }
    .haeading{
        display: flex;
        justify-content: space-between;
        button{
            margin-left: 190px;
        }
    }
`;