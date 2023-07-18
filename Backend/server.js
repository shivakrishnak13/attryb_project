const express = require("express");
const cors = require("cors");
const connection = require("./db");
const { userRouter } = require("./routes/user.routes");
require("dotenv").config();


const app = express();

app.use(cors())
app.use(express.json());

app.use("/user",userRouter)


app.listen(process.env.PORT || 4000, async ()=>{
    try {
        await connection;
        console.log("db is connected");
        console.log("server is  running");
    } catch (error) {
        console.log(error.message)
    }
})
