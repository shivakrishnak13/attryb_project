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
                bcrypt.compare(password,user.password,(error,result)=>{
                    if(result){
                        console.log("token")
                        var token = jwt.sign({users:"login"},process.env.SECRET_KEY);
                        res.status(200).json({
                            message:"Login successful!",token
                        })
                    }else{
                        res.status(201).json({error})
                    }
                })
            }else{
                res.status(503).send({"Error":"User not found!"})
            }   
        } catch (error) {
            res.status(401).json({error:error.message})
        }
});


userRouter.post("/register", async (req,res)=>{
        const {email,password} = req.body;
    try {
        const user = await UserModel.find({email});
        
             // hashing password with
           bcrypt.hash(password,3,async (error,hashedPassword)=>{
                const newUser = await UserModel({...req.body,password:hashedPassword});
                newUser.save();
                res.status(200).json({
                    message:"user registered successfull",newUser
                })
            });
          
    } catch (error) {
        res.status(401).json({error:error.message})
    }
})

module.exports = {userRouter};