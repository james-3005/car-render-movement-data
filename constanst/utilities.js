function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
const cloneObject = (obj) => JSON.parse(JSON.stringify(obj));

function getRandomIntBetween0And10() {
  return Math.floor(Math.random() * (10 - 0 + 1)) + 0;
}

console.log(getRandomIntBetween0And10());
module.exports = {
  getRandomElement,
  cloneObject,
  getRandomIntBetween0And10
};
