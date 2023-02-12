const mongoose = require("mongoose");
const PointModel = require("../schemas/point.schemas.js");
const EdgeModel = require("../schemas/edges.schemas.js");
const reader = require("xlsx");
const { getDistance } = require("../api/distance.js");

const POOL_LENGTH = 12;
const DATA_POINT = [];
async function syncLocation() {
  await PointModel.deleteMany({});
  const file = await reader.readFile(__dirname + "/points.xlsx");
  const sheetName = file.SheetNames[0];
  const rowsData = reader.utils.sheet_to_json(file.Sheets[sheetName]);
  await rowsData.forEach(async (row, index) => {
    const { name, lat, lng, pool } = row;
    DATA_POINT.push({ ...row, id: index + 1 });
    await PointModel.create({
      id: index + 1,
      name,
      coordinates: {
        lat,
        lng,
      },
      pool,
    });
  });
  console.log("import Points finished");
}

async function calDistance() {
  console.log("start create possible edge");
  await EdgeModel.deleteMany({});
  for (let i = 1; i < POOL_LENGTH; i++) {
    const originPoints = DATA_POINT.filter((item) => item.pool === i);
    const destinationPoints = DATA_POINT.filter((item) => item.pool === i + 1);
    for (let j = 0; j < originPoints.length; j++) {
      for (let k = 0; k < destinationPoints.length; k++) {
        const response = await getDistance(
          { lat: originPoints[j].lat, lng: originPoints[j].lng },
          { lat: destinationPoints[k].lat, lng: destinationPoints[k].lng }
        );
        await EdgeModel.create({
          destination_id: destinationPoints[k].id,
          origin_id: originPoints[j].id,
          ...response,
        });
      }
    }
    console.log(`finised pool ${i} to ${i + 1}`);
  }
}
module.exports = {
  syncLocation,
  calDistance,
};
