const { flatten } = require("./flattening.js");

describe("flatten", () => {
  it("flattens an empty array", () => {
    const input = [];
    const expected = [];
    expect(flatten(input)).toEqual(expected);
  });
  it("flattens an array with one empty array", () => {
    const input = [[]];
    const expected = [];
    expect(flatten(input)).toEqual(expected);
  });
  it("flattens an array with one non-empty array", () => {
    const input = [[1, 2, 3]];
    const expected = [1, 2, 3];
    expect(flatten(input)).toEqual(expected);
  });
  it("flattens an array with multiple non-empty arrays", () => {
    const input = [[1, 2], [3, 4], [5]];
    const expected = [1, 2, 3, 4, 5];
    expect(flatten(input)).toEqual(expected);
  });
  it("flattens an array with mixed empty and non-empty arrays", () => {
    const input = [[], [1, 2], [], [3, 4]];
    const expected = [1, 2, 3, 4];
    expect(flatten(input)).toEqual(expected);
  });
});
