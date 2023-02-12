const mongoose = require("mongoose");
const { syncLocation, calDistance } = require("./services/point");
const { fillTrajectionWithRequentRoute } = require("./services/trajection");

(async function run() {
  mongoose.set('strictQuery', false);
  const instance = await mongoose.connect(
    "mongodb://127.0.0.1:27017/ride-render"
  );
  console.log("connect!");
  // Read from points.xlsx to generate points and all edge posible
  // 12 poll, each pool 7 points, expect mỗi pool đi cách nhau 5p duration
  // await syncDistanceAndEdge();
  // ------------------------------
  // getRandom Trajection
  await randomTrajectory()
  instance.connection.close();
})();

async function syncDistanceAndEdge() {
  await syncLocation();
  await calDistance();
}
async function randomTrajectory() {
  await fillTrajectionWithRequentRoute();
}
