import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addCar } from "../redux/ProductReducer/action";
import styled from "styled-components";
import { toast } from "react-toastify";

const initialState = {
  title: "",
  description: "",
  image: "",
  kmOnOdometer: "",
  majorScratches: "",
  accidentsReported: "",
  previousBuyers: "",
  registrationPlace: "",
  originalPaint: "",
  oemSpecs: "",
};

const AddCar = () => {
  const [car, setCar] = useState(initialState);
  const [search, setSearch] = useState("");
  const [oemSpecs, setOemSpecsData] = useState([]);
  const [model, setModel] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.CarsReducer);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (search !== "") {
        axios
          .get(`https://buy-cars.onrender.com/oem/specs?q=${search}`)
          .then((res) => {
            console.log(res.data);
            setOemSpecsData(res.data.specification);
          })
          .catch((err) => console.log(err));
      }
      console.log("Perform search for:", search);
    }, 500);

    return () => {
      clearTimeout(debounceTimer); 
    };
  }, [search]);

  const handleAddCar = () => {
    console.log(car)
    if (
      car.oemSpecs !== "" &&
      car.description !== "" &&
      car.image !== "" &&
      car.description !== "" &&
      car.kmOnOdometer !== "" &&
      car.originalPaint !== "" &&
      car.majorScratches !== "" &&
      car.previousBuyers !== "" &&
      car.registrationPlace !== ""
    ) {
      dispatch(addCar(car)).then((res) => {
        toast.success("Car Details Added Successfull!", {
          position: "top-center",
          autoClose: 3000,
        });
      });
    } else {
      toast.info("Please fill all fields", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <DIV>
      <h2>ADD YOUR CAR DETAILS HERE</h2>
      <div className="form">
        <label>Car Model</label>
        <input
          placeholder="Search your car"
          onChange={(e) => setSearch(e.target.value)}
          name="name"
          type="search"
        />

        {search === "" ? (
          ""
        ) : (
          <div className="search-div">
            {oemSpecs?.map((el) => (
              <div
                key={el._id}
                className="card"
                onClick={() => {
                  setModel(`${el.model_name}, ${el.year}, ${el.colors}`);
                  setCar({ ...car, oemSpecs: el._id });
                  setSearch("");
                }}
              >
                <p>{`${el.model_name}, ${el.year}, ${el.colors}`}</p>
              </div>
            ))}
          </div>
        )}

        <label>OEM Model</label>
        <input
          placeholder="Model"
          onChange={handleChange}
          value={model}
          name="model"
          disabled
        />

        <label>Title</label>
        <input
          placeholder="title"
          onChange={handleChange}
          value={car.title}
          name="title"
        />

        <label>Description</label>
        <textarea
          placeholder="Description"
          onChange={handleChange}
          value={car.description}
          name="description"
        />

        <label>Image</label>
        <input
          placeholder="Image"
          onChange={handleChange}
          value={car.image}
          name="image"
        />

        <label>km On Odometer</label>
        <input
          placeholder="kmOnOdometer"
          onChange={handleChange}
          value={car.kmOnOdometer}
          name="kmOnOdometer"
        />

        <label>Major Scratches</label>
        <input
          placeholder="Major Scratches"
          onChange={handleChange}
          value={car.majorScratches}
          name="majorScratches"
        />

        <label>Accidents Reported</label>
        <input
          placeholder="Accidents Reported"
          onChange={handleChange}
          value={car.accidentsReported}
          name="accidentsReported"
        />

        <label>Previous Buyers</label>
        <input
          placeholder="Previous Buyers"
          onChange={handleChange}
          value={car.previousBuyers}
          name="previousBuyers"
        />

        <label>Registration Place</label>
        <input
          placeholder="Registration Place"
          onChange={handleChange}
          value={car.registrationPlace}
          name="registrationPlace"
        />

        <label>Original Paint</label>
        <select
          placeholder="Original Paint"
          onChange={handleChange}
          value={car.originalPaint}
          name="originalPaint"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <button onClick={handleAddCar} disabled={isLoading}>
          {!isLoading ? "ADD" : "Adding..."}
        </button>
      </div>
    </DIV>
  );
};

export default AddCar;

const DIV = styled.div`
  h2 {
    color: #4267b2;
  }

  .form {
    width: 600px;
    margin: auto;
    padding: 20px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 0.6rem;
    margin-top: 30px;
  }

  .search-div {
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 0.6rem;
  }

  .card {
    padding-left: 15px;
    border: 0.5px solid black;
    border-top: none;
    border-left: none;
    border-right: none;
  }

  label {
    font-weight: bold;
    text-align: start; /* Align labels to the start position */
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    background-color: blue;
    color: white;
    margin-top: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:disabled {
    background-color: lightgray;
    cursor: not-allowed;
  }
`;
