const mongoose = require("mongoose");


const oemspecsSchema = mongoose.Schema({
    model_name : {type: String,required:true},
    year : {type: String,required:true},
    new_model_price : {type: Number,required:true},
    colors : { type: String, required: true },
    mileage : {type: Number,required:true},
    power : {type: String,required:true},
    maxspeed : {type: Number,required:true},
},{
    versionKey:false
});

const OEM_SpecsModel = mongoose.model("OEM_Specs",oemspecsSchema);

module.exports = {OEM_SpecsModel}