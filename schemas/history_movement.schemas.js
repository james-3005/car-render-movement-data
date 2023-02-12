const mongoose = require("mongoose");
const { CoordinateShemas } = require("./coordinate.schemas");

const HistoryMovement = new mongoose.Schema({
  time: Number,
  coordinates: CoordinateShemas,
  userId: Number
});
module.exports = EdgeModel = mongoose.model("HistoryMovement", HistoryMovement);
