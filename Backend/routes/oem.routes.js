const { Router} = require("express");
const { OEM_SpecsModel } = require("../model/oem_specs.model");


const oemRouter = Router();


oemRouter.get("/specs", async (req,res)=>{
       const {q} = req.query;
    try {
        
        if(q){
           let specification = await OEM_SpecsModel.find({
                $or: [
                  { model_name: { $regex: q, $options: "i" } },
                  { year: { $regex: q, $options: "i" } },
                  { colors: { $regex: q, $options: "i" } },
                ],
              });

            res.status(201).json({specification})
        }else{
            let specification = await OEM_SpecsModel.find({});
            res.status(201).json({specification})
        }  
    } catch (error) {
        res.status(401).json({error:error.message});
    }
})


oemRouter.post("/post-specs", async (req,res)=>{
    try {
        const newOEM = new OEM_SpecsModel({...req.body});
        await newOEM.save();
        res.status(200).json({msg:"New Specs added",newOEM})        
    } catch (error) {
        res.status(401).json({error:error.message});
    }
});

module.exports = {oemRouter};