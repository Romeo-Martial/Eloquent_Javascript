const range = require('./range');

// Test cases for the range function
test('start is less than end', () => {
  expect(range.range(1, 5)).toEqual([1, 2, 3, 4, 5]);
});
test('start is equal to end', () => {
  expect(range.range(3, 3)).toEqual([3]);
});
test('start is greater than end', () => {
  expect(range.range(5, 1)).toEqual([5, 4, 3, 2, 1]);
});
test('negative range', () => {  
  expect(range.range(-3, 2)).toEqual([-3, -2, -1, 0, 1, 2]);
});
test('large range', () => {
  expect(range.range(1000, 1005)).toEqual([1000, 1001, 1002, 1003, 1004, 1005]);
});
test('reverse large range', () => {
  expect(range.range(1005, 1000)).toEqual([1005, 1004, 1003, 1002, 1001, 1000]);
});

// Test cases for the sum function
test('sum of empty array', () => {
  expect(range.sum([])).toBe(0);
});
test('sum of single element array', () => { 
  expect(range.sum([5])).toBe(5);
});
test('sum of multiple elements', () => {
  expect(range.sum([1, 2, 3, 4, 5])).toBe(15);
});
test('sum of negative numbers', () => {
  expect(range.sum([-1, -2, -3])).toBe(-6);
});
test('sum of mixed numbers', () => {
  expect(range.sum([-1, 0, 1, 2])).toBe(2);
});
// Test case for sum with large numbers 
test('sum of large numbers', () => {
  expect(range.sum([1000, 2000, 3000])).toBe(6000);
});
// Test case for sum with large negative numbers
test('sum of large negative numbers', () => {
  expect(range.sum([-1000, -2000, -3000])).toBe(-6000);
});
// Test case for sum with large mixed numbers   
test('sum of large mixed numbers', () => {
  expect(range.sum([-1000, 2000, -3000, 4000])).toBe(2000);
});
