// Array -> Array
// Reversing the order in which the elements appear
function reverseArray(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }
  const reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}

// Array -> Array
// Reversing the order in which the elements appear in place
function reverseArrayInPlace(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return arr; // No need to reverse
  }
  let arrayCopy = arr.slice(); // Create a copy to avoid modifying the original array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arrayCopy[arrayCopy.length - 1 - i]; // Reverse in place
  }
}

module.exports = {
  reverseArray,
  reverseArrayInPlace,
};
