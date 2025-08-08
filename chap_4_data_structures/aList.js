// Array -> List
// Given an array, return a list containing the same elements.
function arrayToList(arr) {
  if (arr.length === 0) {
    return null; // Return null for an empty array
  }
  return { value: arr[0], rest: arrayToList(arr.slice(1)) };
}

// List -> Array
// Given a list, return an array containing the same elements.

const result = [];
function listToArray(list) {
  if (list === null) {
    return []; // Return empty array for null list
  }
  return [list.value].concat(listToArray(list.rest));
}

// Any List -> List
// Adds the first argument to the front of the input list.
function prepend(value, list) {
  return { value: value, rest: list };
}

// List Number -> Any or undefined
// Returns the element at the given position in the list or undefined if the position is out of bounds.
function nth(list, position) {
  if (list === null) {
    return undefined; // Return undefined for null list
  }
  if (position === 0) {
    return list.value; // Return the value at the current position
  }
  return nth(list.rest, position - 1); // Recur with the rest of the list and decremented position
}

module.exports = {
  arrayToList,
  listToArray,
  prepend,
  nth,
};
