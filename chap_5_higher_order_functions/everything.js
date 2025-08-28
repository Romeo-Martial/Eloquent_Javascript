// Array Function -> Boolean
// Returns true if all elements in the array pass the test implemented by the provided function.
function everyV1(array, test) {
  let result = true;
  for (let element of array) {
    result = result && test(element);
  }
  return result;
}

function everyV2(array, test) {
  return !array.some((element) => !test(element));
}

module.exports = { everyV1, everyV2 };
