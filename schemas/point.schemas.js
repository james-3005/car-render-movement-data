const mongoose = require("mongoose");
const { CoordinateShemas } = require("./coordinate.schemas");
const {findLastIndex} = require("lodash");

const PointSchemas = new mongoose.Schema({
  id: Number,
  coordinates: CoordinateShemas,
  name: String,
  pool: Number,
});
module.exports = PointModel = mongoose.model("Points", PointSchemas);
