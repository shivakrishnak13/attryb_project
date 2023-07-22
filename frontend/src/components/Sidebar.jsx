import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { styled } from "styled-components";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const initialColors = searchParams.getAll("colors");
  const initialSort = searchParams.get("sort");
  const initialOrder = searchParams.get("order");

  const [colors, setColors] = useState(initialColors || []);
  const [sort, setSort] = useState(initialSort || "");
  const [order, setOrder] = useState(initialOrder || "");
  const [clear, setClear] = useState(false);
  useEffect(() => {
    let params = {
      colors,
    };
    sort && (params.sort = sort);
    order && (params.order = order);
    setSearchParams(params);
  }, [colors, sort, order, clear]);

  const handleColors = (e) => {
    const { name, value } = e.target;
    let newColors = [...colors];
    if (newColors.includes(value)) {
      newColors = newColors.filter((el) => el !== value);
    } else {
      newColors.push(value);
    }
    setColors(newColors);
  };

  const handleSort = (e, val) => {
    setOrder(e);
    setSort(val);
    console.log(e, val);
  };

  const handleReset = () => {
    setColors([]);
    setSort("");
    setOrder("");

    const params = {
      colors: [],
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
            type="checkbox"
            value="red"
            onChange={handleColors}
            defaultChecked={colors.includes("red")}
          />
          <label>Red</label>
        </ColorCheckbox>
        <ColorCheckbox>
          <input
            type="checkbox"
            value="blue"
            onChange={handleColors}
            defaultChecked={colors.includes("blue")}
          />
          <label>Blue</label>
        </ColorCheckbox>
        <ColorCheckbox>
          <input
            type="checkbox"
            value="white"
            onChange={handleColors}
            defaultChecked={colors.includes("white")}
          />
          <label>White</label>
        </ColorCheckbox>
        <ColorCheckbox>
          <input
            type="checkbox"
            value="green"
            onChange={handleColors}
            defaultChecked={colors.includes("green")}
          />
          <label>Green</label>
        </ColorCheckbox>
      </ColorFilterContainer>

      <SidebarTitle>Sort By Price</SidebarTitle>
      <PriceSortContainer>
        <SortRadioGroup onChange={(e) => handleSort(e, "price")}>
          <label>
            <input
              type="radio"
              value="asc"
              defaultChecked={order === "asc"}
              name="priceSort"
            />
            Ascending
          </label>
          <label>
            <input
              type="radio"
              value="desc"
              defaultChecked={order === "desc"}
              name="priceSort"
            />
            Descending
          </label>
        </SortRadioGroup>
      </PriceSortContainer>

      <SidebarTitle>Sort By Milage</SidebarTitle>
      <MileageSortContainer>
        <SortRadioGroup onChange={(e) => handleSort(e, "mileage")}>
          <label>
            <input
              type="radio"
              value="asc"
              defaultChecked={order === "asc"}
              name="mileageSort"
            />
            Ascending
          </label>
          <label>
            <input
              type="radio"
              value="desc"
              defaultChecked={order === "desc"}
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
  margin-top: 70px;
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
