const express = require("express");
const cors = require("cors");
const connection = require("./db");
const { userRouter } = require("./routes/user.routes");
const cloudinary = require("cloudinary");
const { oemRouter } = require("./routes/oem.routes");
const { inventoryRouter } = require("./routes/inventory.routes");
require("dotenv").config();

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});

const app = express();

app.use(cors())
app.use(express.json());

app.use("/user",userRouter);
app.use("/oem",oemRouter);
app.use("/inventory",inventoryRouter);


app.listen(process.env.PORT || 4000, async ()=>{
    try {
        await connection;
        console.log("db is connected");
        console.log("server is  running");
    } catch (error) {
        console.log(error.message)
    }
})
