import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { styled } from "styled-components";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const initialColors = searchParams.getAll("colors");
  const initialPrice = searchParams.get("price");
  const initialMileage = searchParams.get("mileage");

  const [colors, setColors] = useState(initialColors || "");
  const [price, setPrice] = useState(initialPrice || "");
  const [mileage, setMileage] = useState(initialMileage || "");
  const [clear, setClear] = useState(false);
  // Update URL parameters on change of filters or reset button click
  useEffect(() => {
    let params = {
      colors,
    };
    price && (params.price = price);
    mileage && (params.mileage = mileage);
    setSearchParams(params);
  }, [colors, price, mileage, clear]);

  const handleColors = (e) => {
    setColors(e.target.value);
  };

  const handlePriceSort = (e) => {
    setPrice(e.target.value)
  };
  const handleMileageSort = (e) => {
    setMileage(e.target.value)
  };

  const handleReset = () => {
    setColors("");
    setPrice("");
    setMileage("");

    const params = {
      colors: "",
      sort: "",
      order: "",
    };

    setSearchParams(params);
    setClear(!clear);
  };

  return (
    <SidebarContainer>
      <SidebarTitle>Filter By Color</SidebarTitle>
      <ColorFilterContainer>
        <ColorCheckbox>
          <input
            type="radio"
            value="red"
            name="color"
            onChange={handleColors}
            defaultChecked={colors === "red"}
          />
          <label>Red</label>
        </ColorCheckbox>
        <ColorCheckbox>
          <input
            type="radio"
            value="blue"
            name="color"
            onChange={handleColors}
            defaultChecked={colors === "blue"}
          />
          <label>Blue</label>
        </ColorCheckbox>
        <ColorCheckbox>
          <input
            type="radio"
            value="white"
            name="color"
            onChange={handleColors}
            defaultChecked={colors === "white"}
          />
          <label>White</label>
        </ColorCheckbox>
        <ColorCheckbox>
          <input
            type="radio"
            value="green"
            name="color"
            onChange={handleColors}
            defaultChecked={colors === "green"}
          />
          <label>Green</label>
        </ColorCheckbox>
        <ColorCheckbox>
          <input
            type="radio"
            name="color"
            value="black"
            onChange={handleColors}
            defaultChecked={colors === "black"}
          />
          <label>Black</label>
        </ColorCheckbox>
      </ColorFilterContainer>

      <SidebarTitle>Sort By Price</SidebarTitle>
      <PriceSortContainer>
        <SortRadioGroup onChange={handlePriceSort}>
          <label>
            <input
              type="radio"
              value="asc"
              defaultChecked={price === "asc"}
              name="priceSort"
            />
            Ascending
          </label>
          <label>
            <input
              type="radio"
              value="desc"
              defaultChecked={price === "desc"}
              name="priceSort"
            />
            Descending
          </label>
        </SortRadioGroup>
      </PriceSortContainer>

      <SidebarTitle>Sort By Milage</SidebarTitle>
      <MileageSortContainer>
        <SortRadioGroup onChange={handleMileageSort}>
          <label>
            <input
              type="radio"
              value="asc"
              defaultChecked={mileage === "asc"}
              name="mileageSort"
            />
            Ascending
          </label>
          <label>
            <input
              type="radio"
              value="desc"
              defaultChecked={mileage === "desc"}
              name="mileageSort"
            />
            Descending
          </label>
        </SortRadioGroup>
      </MileageSortContainer>

      <ResetButton onClick={handleReset}>Reset Filters</ResetButton>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  position: sticky;
  margin-top: 90px;
`;

const SidebarTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

const ColorFilterContainer = styled.div`
  margin-left: 12px;
  margin-top: 10px;
`;

const ColorCheckbox = styled.div`
  width: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    margin-left: 10px;
  }
`;

const PriceSortContainer = styled.div`
  margin-left: 12px;
  margin-top: 10px;
`;

const SortRadioGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 12px;

  label {
    margin-right: 10px;
  }
`;

const MileageSortContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 12px;

  label {
    margin-right: 10px;
  }
`;

const ResetButton = styled.button`
  margin-top: 30px;
  background-color: #f44336;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d32f2f;
  }
`;
