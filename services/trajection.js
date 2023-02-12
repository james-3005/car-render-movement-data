const { allTrajections } = require("../constanst/trajections.constant");
const EdgeModel = require("../schemas/edges.schemas.js");
const PointModel = require("../schemas/point.schemas.js");
const HistoryMovementModel = require("../schemas/history_movement.schemas");
const {
  MAX_DURATION,
  TIME_START_UNIX,
  _5MIN,
  _1DAY,
} = require("../constanst/constanst");
const {
  getRandomElement,
  cloneObject,
  getRandomIntBetween0And10,
} = require("../constanst/utilities");
const { findLastIndex } = require("lodash");

async function fillTrajectionWithRequentRoute() {
  const finalTrajectoryList = [];
  for (let user = 0; user < allTrajections.length; user++) {
    const {
      noisyTranjection,
      userId,
      trajection: directTrajection,
    } = allTrajections[user];
    await HistoryMovementModel.deleteMany({ userId });
    console.log(`delete all data of user ${userId}`);
    let day = 0;
    while (day < 7) {
      const randomNumber = getRandomIntBetween0And10();
      // if < 7 render beautify trajection contains frequent item, if not return noisy trajection
      const trajection =
        randomNumber < 7
          ? cloneObject(directTrajection)
          : cloneObject(getRandomElement(noisyTranjection));
      const start = trajection.findIndex(
        (element) => typeof element === "number"
      );
      const end = findLastIndex(
        trajection,
        (element) => typeof element === "number"
      );
      try {
        for (let i = start - 1; i >= 0; i--) {
          const point = await EdgeModel.find({
            duration: { $lte: MAX_DURATION },
            destination_id: trajection[i + 1],
          });
          if (!point.length) throw Error();
          trajection[i] = getRandomElement(point).origin_id;
        }
        for (let i = end + 1; i < trajection.length; i++) {
          const point = await EdgeModel.find({
            origin_id: trajection[i - 1],
            duration: { $lte: MAX_DURATION },
          });
          if (!point.length) throw Error();
          trajection[i] = getRandomElement(point).destination_id;
        }
        finalTrajectoryList.push(trajection);
        for (let i = 0; i < trajection.length; i++) {
          const point = await PointModel.findOne({ id: trajection[i] });
          await HistoryMovementModel.create({
            coordinates: point.coordinates,
            time: TIME_START_UNIX + i * _5MIN + day * _1DAY,
            userId,
          });
        }
        day++;
      } catch (e) {
        // console.log("")
      }
    }
    console.log(finalTrajectoryList);
  }
}
module.exports = {
  fillTrajectionWithRequentRoute,
};
