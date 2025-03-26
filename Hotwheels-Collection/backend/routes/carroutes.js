const express = require("express");
const router = express.Router();
const Car = require("../models/Car"); // Adjust the path based on your structure

// Get all cars in the user's collection
router.get("/mycollection", async (req, res) => {
  try {
    const userCars = await Car.find({ ownedByUser: true }); // Adjust based on schema
    res.json(userCars);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user collection" });
  }
});

module.exports = router;
