const { Router } = require("express");
require('dotenv').config();
const { UserModel } = require("../model/user.model");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");

const userRouter = Router();

userRouter.post("/login", async (req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await UserModel.findOne({email});
        if(user){
            bcrypt.compare(password,user.password, (error, result) => {
                if(result){
                    const token = jwt.sign({ users: "login" }, process.env.SECRET_KEY);
                    res.status(200).json({
                        message: "Login successful!",
                        token,
                        user
                    });
                } else {
                    res.status(401).json({ message: "Incorrect password" });
                }
            });
        } else {
            res.status(401).json({ message: "User not found" });
        }   
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


userRouter.post("/register", async (req,res)=>{
       const {email,password} = req.body;
    try {
        const existingUser = await UserModel.findOne({ email });

        if(existingUser) {
            return res.status(400).json({ message: "User already exists with this email" });
        }

        // hashing password
        bcrypt.hash(password, 10, async (error, hashedPassword) => {
            if(error) {
                throw new Error('Password hashing failed'); // Handle hashing error
            }

            try {
                const newUser = new UserModel({...req.body,password:hashedPassword});

                await newUser.save();
                res.status(200).json({
                    message: "User registered successfully",
                    newUser
                });
            } catch (error) {
                res.status(500).json({ error: error.message }); // Handle save error
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handle findOne error
    }
})

module.exports = {userRouter};