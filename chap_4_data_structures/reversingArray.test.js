const { reverseArray, reverseArrayInPlace } = require("./reversingArray");

// tests for reverseArray function
// helper function for checking reversal
function expectReversed(fn, originalArray, expectedReversedArray) {
  const result = fn(originalArray);
  expect(result).toEqual(expectedReversedArray);
  // Check original array is unchanged
  expect(originalArray).toEqual(originalArray);
}

test("empty array", () => {
  expectReversed(reverseArray, [], []);
});
test("single element array", () => {
  expectReversed(reverseArray, [1], [1]);
});
test("two elements array", () => {
  expectReversed(reverseArray, [1, 2], [2, 1]);
});
test("multiple elements array", () => {
  expectReversed(reverseArray, [1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
});

// tests for reverseArrayInPlace function
// helper function to check in-place reversal
function expectReversedInPlace(fn, originalArray, expectedReversedArray) {
  const originalRef = originalArray;

  fn(originalArray); // Call the function that should reverse in place

  // Check content is correctly reversed
  expect(originalArray).toEqual(expectedReversedArray);

  // Check it's the same object (in-place mutation)
  expect(originalArray).toBe(originalRef);
}

test("empty array in place", () => {
  const arr = [];
  expectReversedInPlace(reverseArrayInPlace, arr, []);
});
test("single element array in place", () => {
  const arr = [1];
  expectReversedInPlace(reverseArrayInPlace, arr, [1]);
});
test("two elements array in place", () => {
  const arr = [1, 2];
  expectReversedInPlace(reverseArrayInPlace, arr, [2, 1]);
});
test("multiple elements array in place", () => {
  const arr = [1, 2, 3, 4, 5];
  expectReversedInPlace(reverseArrayInPlace, arr, [5, 4, 3, 2, 1]);
});
