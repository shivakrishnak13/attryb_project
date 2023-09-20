import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addCar } from "../redux/ProductReducer/action";
import styled from "styled-components";
import { toast } from "react-toastify";
import CloudinaryUploadWidget from "../components/CloudinaryUpload";

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
  price:""
};

const AddCar = () => {
  const [car, setCar] = useState(initialState);
  const [search, setSearch] = useState("");
  const [oemSpecs, setOemSpecsData] = useState([]);
  const [model, setModel] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.CarsReducer);
  const [imageURL,setimageURL] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: (name === "price" || name === "kmOnOdometer" || name === "accidentsReported" || name === "previousBuyers" ) ? +value : value,image : imageURL });
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (search !== "") {
        axios
          .get(`https://attryb-backend-blond.vercel.app/oem/specs?q=${search}`)
          .then((res) => {
            console.log(res.data);
            setOemSpecsData(res.data.specification);
          })
          .catch((err) => console.log(err));
      }
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
      car.registrationPlace !== "" &&
      car.price !== ""
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
        <label>Price</label>
        <input
          placeholder="Price"
          onChange={handleChange}
          value={car.price}
          name="price"
        />

        <IMGUPLOAD>
        <CloudinaryUploadWidget setimageURL={setimageURL}/>
        </IMGUPLOAD>
        <input
          placeholder="Image"
          value={imageURL}
          name="image"
          disabled
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

          <option value="">Select</option>
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

const IMGUPLOAD = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`



const DIV = styled.div`
  h2 {
    color: #4267b2;
    text-align: center;
    margin-bottom: 20px;
  }

  .form {
    width: 500px;
    margin: auto;
    padding: 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #fff;
  }

  .search-div {
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
    border-radius: 10px;
    background-color: #f9f9f9;
    margin-top: 10px;
  }

  .card {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .card:hover {
    background-color: #f0f0f0;
  }

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  textarea {
    height: 100px;
  }

  button {
    background-color: #4267b2;
    color: #fff;
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
