const jwt = require("jsonwebtoken");
require("dotenv").config();

const authmiddleware = async (req,res,next) => {
    const token= req.headers.authorization?.split(" ")[1];
        try {
            const decoded = jwt.verify(token,process.env.SECRET_KEY);
            if(decoded){
                next() ;
            }else{
                return  res.status(500).send({"Error":"Invalid Token"})
            }
        } catch (error) {
            res.status(400).json({error:error.message})
        }
};

module.exports = {authmiddleware}