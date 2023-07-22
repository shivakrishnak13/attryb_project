const { Router } = require("express");
const { InventoryModel } = require("../model/inventory.model");

const inventoryRouter = Router();

inventoryRouter.post("/add-car", async (req, res) => {
  try {
    const newInventory = new InventoryModel({ ...req.body });
    newInventory.save();
    res.status(200).json({ msg: "posted", newInventory });
  } catch (error) {
    res.status(201).json({ error: error.message });
  }
});

inventoryRouter.get("/cars", async (req, res) => {
  const { color, sort, order } = req.query;
  console.log(color, sort, order);

  try {
    if (sort === "price" && order === "asc") {
      // sort by price ascending
      let data = await InventoryModel.find({}).sort({ "price": 1 });
      return res.status(200).json({ data });

    } else if (sort === "price" && order === "desc") {
      // sort by price descending
      let data = await InventoryModel.find({}).sort({ "price": -1 });
      return res.status(200).json({ data });


    }if (sort === "mileage" && order === "asc") {
      // sort by price ascending
      let data = await InventoryModel.aggregate([
        {
          $lookup: {
            from: "oem_specs",
            localField: "oemSpecs",
            foreignField: "_id",
            as: "oemSpec",
          },
        },
        { $unwind: "$oemSpec" },
        { $sort: { "oemSpec.mileage": 1 } },
      ]);
      return res.status(200).json({ data });
    } else if (sort === "mileage" && order === "desc") {
      // sort by price descending
      let data = await InventoryModel.aggregate([
        {
          $lookup: {
            from: "oem_specs",
            localField: "oemSpecs",
            foreignField: "_id",
            as: "oemSpec",
          },
        },
        { $unwind: "$oemSpec" },
        { $sort: { "oemSpec.mileage": -1 } },
      ]);
      return res.status(200).json({ data });
    }
    
    
    else if (color) {
      //filter by color

      const regexColors = color?.map((color) => new RegExp(color, "i"));

    const cdata = await InventoryModel.find({})
    .populate({ path: "oemSpecs", match: { colors: { $in: regexColors } } })
    .exec();

  const data = cdata.filter((el) => el.oemSpecs && el.oemSpecs.colors);
  return res.status(200).json({ data });

    } else if (color && sort === "price" && order === "asc") {
      // Filter by color and sort by price ascending

      const regex = color?.map((color) => new RegExp(color, "i"));

      const cdata = await InventoryModel.find({})
        .populate({
          path: "oemSpecs",
          match: { colors: { $in: regex } },
        })
        .sort({ "oemSpecs.new_model_price": 1 })
        .exec();

      const data = cdata.filter((el) => el.oemSpecs && el.oemSpecs.colors);
     return res.status(200).json({ data });
    } else if (color && sort === "price" && order === "desc") {

      // Filter by color and sort by price descending

      const regex = color?.map((color) => new RegExp(color, "i"));

      const cdata = await InventoryModel.find({})
        .populate({
          path: "oemSpecs",
          match: { colors: { $in: regex } },
        })
        .sort({ "oemSpecs.new_model_price": -1 })
        .exec();

      const data = cdata.filter((el) => el.oemSpecs && el.oemSpecs.colors);
      return res.status(200).json({ data });
    }else if (color && sort === "mileage" && order === "asc") {
      // Filter by color and sort by mileage ascending
    
      const regex = color?.map((color) => new RegExp(color, "i"));
    
      const cdata = await InventoryModel.find({})
        .populate({
          path: "oemSpecs",
          match: { colors: { $in: regex} },
        })
        .sort({ "oemSpecs.mileage": 1 })
        .exec();
    
      const data = cdata.filter((el) => el.oemSpecs && el.oemSpecs.colors);
      return res.status(200).json({ data });
    
    } else if (color && sort === "mileage" && order === "desc") {
      // Filter by color and sort by mileage descending
    
      const regex = color?.map((color) => new RegExp(color, "i"));
    
      const cdata = await InventoryModel.find({})
        .populate({
          path: "oemSpecs",
          match: { colors: { $in: regex}},
        })
        .sort({ "oemSpecs.mileage": -1 })
        .exec();
    
      const data = cdata.filter((el) => el.oemSpecs && el.oemSpecs.colors);
      return res.status(200).json({ data });
    
    } else {
      let data = await InventoryModel.find({}).populate({ path: "oemSpecs" });

      return res.status(200).json({ data });
    }
  } catch (error) {
    res.status(201).json({ error: error.message });
  }
});


inventoryRouter.patch("/edit-car/:id", async (req,res)=>{
        const {id} = req.params;
    try {

        const editeddata = await InventoryModel.findByIdAndUpdate({_id:id},req.body);

            res.status(200).json({msg:"details updated succesfull",editeddata})
        
    } catch (error) {
        res.status(201).json({ error: error.message });
    }
})

inventoryRouter.delete("/delete-car/:id", async (req,res)=>{
    const {id} = req.params;
try {

    const deleteddata = await InventoryModel.findByIdAndDelete({_id:id});

        res.status(200).json({msg:"details updated succesfull",deleteddata})
    
} catch (error) {
    res.status(201).json({ error: error.message });
}
})

inventoryRouter.get("/single-car/:id", async (req,res)=>{
    const {id} = req.params;
try {

    const data = await InventoryModel.find({_id:id}).populate({path: "oemSpecs"});

        res.status(200).json({msg:"car details",data})
    
} catch (error) {
    res.status(201).json({ error: error.message });
}
})

module.exports = { inventoryRouter };
