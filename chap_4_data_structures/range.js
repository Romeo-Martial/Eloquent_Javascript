// Number Number -> Array
// returns an array of numbers from start to end, inclusive
function range(start, end) {
  if (start === end) {
    return [start];
  }
  const result = [];
  const step = start < end ? 1 : -1;
  for (let i = start; i !== end + step; i += step) {
    result.push(i);
  }
  return result;
}

// Array[Number] -> Number 
// returns the sum of the numbers in the array
function sum(arr) {
  return arr.reduce((acc, elt) => acc + elt, 0);
}

module.exports = {
    range,
    sum
};
