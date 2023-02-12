const { default: axios } = require("axios");
const { API_KEY } = require("../constanst/constanst");

const getDistance = (origin, destination) =>
  axios
    .get(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}&key=${API_KEY}&mode=driving`
    )
    .then(({ data }) => {
      return {
        distance: data.routes[0].legs[0].distance.value,
        duration: data.routes[0].legs[0].duration.value,
      };
    })
    .catch((error) => console.error(error));

module.exports = {
  getDistance,
};
