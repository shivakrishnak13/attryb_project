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
  const { color, price, mileage } = req.query;
  console.log(color, price, mileage);

  try {
    if (color && price === "asc" && mileage === "asc") {
      // Filter by color and sort by price ascending and mileage ascending
      const regex = new RegExp(color, "i");
      const cdata = await InventoryModel.find({})
        .populate({
          path: "oemSpecs",
          match: { colors: regex },
        })
        .sort({ price: 1, "oemSpecs.mileage": 1 })
        .exec();
      const data = cdata.filter((el) => el.oemSpecs && el.oemSpecs.colors);
      return res.status(200).json({ data });
    } else if (color && price === "asc" && mileage === "desc") {
      // Filter by color and sort by price ascending and mileage descending
      const regex = new RegExp(color, "i");
      const cdata = await InventoryModel.find({})
        .populate({
          path: "oemSpecs",
          match: { colors: regex },
        })
        .sort({ price: 1, "oemSpecs.mileage": -1 })
        .exec();
      const data = cdata.filter((el) => el.oemSpecs && el.oemSpecs.colors);
      return res.status(200).json({ data });
    } else if (color && price === "desc" && mileage === "asc") {
      // Filter by color and sort by price descending and mileage ascending
      const regex = new RegExp(color, "i");
      const cdata = await InventoryModel.find({})
        .populate({
          path: "oemSpecs",
          match: { colors: regex },
        })
        .sort({ price: -1, "oemSpecs.mileage": 1 })
        .exec();
      const data = cdata.filter((el) => el.oemSpecs && el.oemSpecs.colors);
      return res.status(200).json({ data });
    } else if (color && price === "desc" && mileage === "desc") {
      // Filter by color and sort by price descending and mileage descending
      const regex = new RegExp(color, "i");
      const cdata = await InventoryModel.find({})
        .populate({
          path: "oemSpecs",
          match: { colors: regex },
        })
        .sort({ price: -1, "oemSpecs.mileage": -1 })
        .exec();
      const data = cdata.filter((el) => el.oemSpecs && el.oemSpecs.colors);
      return res.status(200).json({ data });
    } else if (color && price === "asc") {
      // Filter by color and sort by price ascending

      const regex = new RegExp(color, "i");

      const cdata = await InventoryModel.find({})
        .populate({
          path: "oemSpecs",
          match: { colors: regex },
        })
        .sort({ price: 1 })
        .exec();

      const data = cdata.filter((el) => el.oemSpecs && el.oemSpecs.colors);
      return res.status(200).json({ data });
    } else if (color && price === "desc") {
      // Filter by color and sort by price descending

      const regex = new RegExp(color, "i");

      const cdata = await InventoryModel.find({})
        .populate({
          path: "oemSpecs",
          match: { colors: regex },
        })
        .sort({ price: -1 })
        .exec();

      const data = cdata.filter((el) => el.oemSpecs && el.oemSpecs.colors);
      return res.status(200).json({ data });
    } else if (color && mileage === "asc") {
      // Filter by color and sort by mileage ascending

      const regex = new RegExp(color, "i");

      const cdata = await InventoryModel.find({})
        .populate({
          path: "oemSpecs",
          match: { colors: regex },
        })
        .sort({ "oemSpecs.mileage": 1 })
        .exec();

      const data = cdata.filter((el) => el.oemSpecs && el.oemSpecs.colors);
      return res.status(200).json({ data });
    } else if (color && mileage === "desc") {
      // Filter by color and sort by mileage descending

      const regex = new RegExp(color, "i");

      const cdata = await InventoryModel.find({})
        .populate({
          path: "oemSpecs",
          match: { colors: regex },
        })
        .sort({ "oemSpecs.mileage": -1 })
        .exec();

      const data = cdata.filter((el) => el.oemSpecs && el.oemSpecs.colors);
      return res.status(200).json({ data });
    } else if (price === "asc" && mileage === "asc") {
      // Sort by price ascending and mileage ascending
      let cdata = await InventoryModel.find({})
        .sort({ price: 1, "oemSpecs.mileage": 1 })
        .exec();
      let data = cdata.filter((el) => el.oemSpecs && el.oemSpecs.colors);
      return res.status(200).json({ data });
    } else if (price === "asc" && mileage === "desc") {
      // Sort by price ascending and mileage descending
      const cdata = await InventoryModel.find({})
        .sort({ price: 1, "oemSpecs.mileage": -1 })
        .exec();
      const data = cdata.filter((el) => el.oemSpecs && el.oemSpecs.colors);
      return res.status(200).json({ data });
    } else if (price === "desc" && mileage === "asc") {
      // Sort by price descending and mileage ascending
      const cdata = await InventoryModel.find({})
        .sort({ price: -1, "oemSpecs.mileage": 1 })
        .exec();
      const data = cdata.filter((el) => el.oemSpecs && el.oemSpecs.colors);
      return res.status(200).json({ data });
    } else if (price === "desc" && mileage === "desc") {
      // Sort by price descending and mileage descending
      cdata = await InventoryModel.find({})
        .sort({ price: -1, "oemSpecs.mileage": -1 })
        .exec();
      data = cdata.filter((el) => el.oemSpecs && el.oemSpecs.colors);
      return res.status(200).json({ data });
    } else if (price === "asc") {
      // sort by price ascending
      let data = await InventoryModel.find({}).populate({ path: "oemSpecs" }).sort({ price: 1 }).exec();
      return res.status(200).json({ data });
    } else if (price === "desc") {
      // sort by price descending
      let data = await InventoryModel.find({}).populate({ path: "oemSpecs" }).sort({ price: -1 }).exec();
      return res.status(200).json({ data });
    }
    else if (mileage === "asc") {
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
    } else if (mileage === "desc") {
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
    } else if (color) {
      //filter by color

      const regex = new RegExp(color, "i");

      const cdata = await InventoryModel.find({})
        .populate({ path: "oemSpecs", match: { colors: regex } })
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

inventoryRouter.patch("/edit-car/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const editeddata = await InventoryModel.findByIdAndUpdate(
      { _id: id },
      req.body
    );

    res.status(200).json({ msg: "details updated succesfull", editeddata });
  } catch (error) {
    res.status(201).json({ error: error.message });
  }
});

inventoryRouter.delete("/delete-car/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteddata = await InventoryModel.findByIdAndDelete({ _id: id });

    res.status(200).json({ msg: "details updated succesfull", deleteddata });
  } catch (error) {
    res.status(201).json({ error: error.message });
  }
});

inventoryRouter.get("/single-car/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await InventoryModel.find({ _id: id }).populate({
      path: "oemSpecs",
    });

    res.status(200).json({ msg: "car details", data });
  } catch (error) {
    res.status(201).json({ error: error.message });
  }
});

module.exports = { inventoryRouter };
