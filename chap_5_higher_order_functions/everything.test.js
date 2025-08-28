const {everyV1, everyV2} = require("./everything");

describe("everyV1", () => {
  it("should return true for arrays where all elements pass the test", () => {
    expect(everyV1([2, 4, 6], n => n % 2 === 0)).toBe(true);
    expect(everyV1([1, 3, 5], n => n % 2 === 0)).toBe(false);
  });
});

describe("everyV2", () => {
  it("should return true for arrays where all elements pass the test", () => {
    expect(everyV2([2, 4, 6], n => n % 2 === 0)).toBe(true);
    expect(everyV2([1, 3, 5], n => n % 2 === 0)).toBe(false);
  });
});