// Array[Array] -> Array
// Given an array of arrays, flatten it into a single array
function flatten(arr) {
  return arr.reduce((acc, current) => acc.concat(current), []);
}

module.exports = { flatten };
