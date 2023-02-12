const { default: mongoose } = require("mongoose");

const CoordinateShemas = new mongoose.Schema(
  {
    lat: Number,
    lng: Number,
  },
  { _id: false }
);
module.exports = {
  CoordinateShemas
}