const mongoose = require("mongoose");


const oemspecsSchema = mongoose.Schema({
    
});

const OEM_SpecsModel = mongoose.model("OEM_Specs",oemspecsSchema);

module.exports = {OEM_SpecsModel}