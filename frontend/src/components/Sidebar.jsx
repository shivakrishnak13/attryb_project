import {
  Button,
  Checkbox,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";

const Sidebar = () => {



    const [searchparams,setSearchParams] = useSearchParams();

    const intialColors = searchparams.getAll("colors");
    const intialsort = searchparams.get("sort");
    const intialOrder = searchparams.get("order");

    const [colors,setColors] = useState(intialColors || []);
    const [sort,setsort] = useState(intialsort|| "");
    const [order, setorder]=useState(intialOrder || "");

    useEffect(() => {
        let params = {
            colors,
           
        }
        sort && (params.sort= sort)
        order && (params.order= order);
        setSearchParams(params)
    },[colors,sort,order])

    const handleColors = (e) =>{
        const {name,value} = e.target;
        let newColors = [...colors];
        if(newColors.includes(value)){
            newColors = newColors.filter((el)=> el !== value);
        }else{
            newColors.push(value);
        }
        setColors(newColors)
    }

    const handleSort = (e,val) =>{
        setorder(e);
        setsort(val)
        console.log(e,val)
    }

  return (
    <DIV>
      <Text fontWeight={"bold"} fontSize={"20px"}>
        Filter By Color
      </Text>
      <div className="colorsfilter">
        <div className="checkbox">
          <Checkbox value={"red"} onChange={handleColors} checked={colors.includes("red")}/>
          <label>Red</label>
        </div>
        <div className="checkbox">
          <Checkbox value={"white"} onChange={handleColors} checked={colors.includes("white")}/>
          <label>White</label>
        </div>
        <div className="checkbox">
          <Checkbox value={"yellow"} onChange={handleColors} checked={colors.includes("yellow")}/>
          <label>Yellow</label>
        </div>
        <div className="checkbox">
          <Checkbox value={"silver"} onChange={handleColors} checked={colors.includes("silver")}/>
          <label>Silver</label>
        </div>
        <div className="checkbox">
          <Checkbox value={"brown"} onChange={handleColors} checked={colors.includes("brown")}/>
          <label>Brown</label>
        </div>
      </div>
      <Text fontWeight={"bold"} fontSize={"20px"} mt={"20px"}>
       
        Sort By Price
      </Text>

      <div className="pricesort">
        <div className="checkbox">
         
        <RadioGroup onChange={(e)=> handleSort(e,"price")}>
            <Stack direction="row">
              <Radio value="asc" isChecked={order === "asc"}>Ascending</Radio>
              <Radio value="desc" isChecked={order === "desc"}>Descending</Radio>
            </Stack>
          </RadioGroup>
        </div>
      </div>
      <Text fontWeight={"bold"} fontSize={"20px"} mt={"25px"}>
        
        Sort By Milage
      </Text>

      <div className="pricesort">
        <div className="checkbox">
          <RadioGroup onChange={(e)=> handleSort(e,"mileage")}>
            <Stack direction="row">
              <Radio value="asc" isChecked={order === "asc"}>Ascending</Radio>
              <Radio value="desc" isChecked={order === "desc"}>Descending</Radio>
            </Stack>
          </RadioGroup>
        </div>
      </div>

      <Button mt={"30px"} >Reset Filters</Button>
    </DIV>
  );
};

export default Sidebar;

const DIV = styled.div`
 
 box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
 border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
 position: sticky;
 margin-top: 70px;

  .colorsfilter {
   
    margin-top: 10px;
  }

  .checkbox {
    width: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    label {
      margin-left: 10px;
    }
  }
  .pricesort {
    
    margin-top: 10px;
  }
`;
