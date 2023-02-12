const mongoose = require("mongoose");

const EdgeSchemas = new mongoose.Schema({
origin_id: Number,
destination_id: Number,
distance: Number,
duration: Number,
});
module.exports = EdgeModel = mongoose.model("Edges", EdgeSchemas);
