const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

app.use(cors()); // Allow frontend to fetch data
app.use(express.static("data")); // Serve the data folder

app.get("/cars", (req, res) => {
  res.sendFile(path.join(__dirname, "data/cars.json"));
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port  ${PORT} ✅✅`));
