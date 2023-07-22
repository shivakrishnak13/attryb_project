const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema({
  
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  kmOnOdometer: {
    type: Number,
    required: true,
  },
  majorScratches: {
    type: String,
    required: true,
  },
  originalPaint: {
    type: String,
    required: true,
  },
  accidentsReported: {
    type: Number,
    required: true,
  },
  previousBuyers: {
    type: Number,
    required: true,
  },
  registrationPlace: {
    type: String,
    required: true,
  },
  oemSpecs:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "OEM_Specs",
    required: true,
  }
},{
    timestamps :true,
    versionKey : false
});

const InventoryModel = mongoose.model("Marketplace_Inventory", inventorySchema);

module.exports = { InventoryModel };
