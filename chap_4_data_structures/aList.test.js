const { arrayToList, listToArray, prepend, nth } = require("./aList");

// Tests for arrayToList function
test("empty array", () => {
  expect(arrayToList([])).toEqual(null);
});
test("single element array", () => {
  expect(arrayToList([1])).toEqual({ value: 1, rest: null });
});
test("multiple elements array", () => {
  expect(arrayToList([1, 2, 3])).toEqual({
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null,
      },
    },
  });
});
test("nested arrays", () => {
  expect(arrayToList([1, [2, 3], 4])).toEqual({
    value: 1,
    rest: {
      value: [2, 3],
      rest: {
        value: 4,
        rest: null,
      },
    },
  });
});
test("array with mixed types", () => {
  expect(arrayToList([1, "two", true])).toEqual({
    value: 1,
    rest: {
      value: "two",
      rest: {
        value: true,
        rest: null,
      },
    },
  });
});
test("array with null", () => {
  expect(arrayToList([null, 2, 3])).toEqual({
    value: null,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null,
      },
    },
  });
});
test("array with undefined", () => {
  expect(arrayToList([undefined, 2, 3])).toEqual({
    value: undefined,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null,
      },
    },
  });
});

// Tests for listToArray function
test("empty list", () => {
  expect(listToArray(null)).toEqual([]);
});
test("single element list", () => {
  expect(listToArray({ value: 1, rest: null })).toEqual([1]);
});
test("multiple elements list", () => {
  const list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null,
      },
    },
  };
  expect(listToArray(list)).toEqual([1, 2, 3]);
});

// Tests for prepend function
test("prepend to empty list", () => {
  expect(prepend(1, null)).toEqual({ value: 1, rest: null });
});
test("prepend to non-empty list", () => {
  const list = { value: 2, rest: null };
  expect(prepend(1, list)).toEqual({ value: 1, rest: list });
});
test("prepend to list with multiple elements", () => {
  const list = {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  };
  expect(prepend(1, list)).toEqual({
    value: 1,
    rest: list,
  });
});
test("prepend to list with mixed types", () => {
  const list = {
    value: "two",
    rest: {
      value: true,
      rest: null,
    },
  };
  expect(prepend(1, list)).toEqual({
    value: 1,
    rest: list,
  });
});

// Tests for nth function
test("nth in empty list", () => {
  expect(nth(null, 0)).toBeUndefined();
});
test("nth in single element list", () => {
  expect(nth({ value: 1, rest: null }, 0)).toEqual(1);
  expect(nth({ value: 1, rest: null }, 1)).toBeUndefined();
});
test("nth in multiple elements list", () => {
  const list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null,
      },
    },
  };
  expect(nth(list, 0)).toEqual(1);
  expect(nth(list, 1)).toEqual(2);
  expect(nth(list, 2)).toEqual(3);
  expect(nth(list, 3)).toBeUndefined();
});
// Tests for nth function with mixed types
test("nth in list with mixed types", () => {
  const list = {
    value: 1,
    rest: {
      value: "two",
      rest: {
        value: true,
        rest: null,
      },
    },
  };
  expect(nth(list, 0)).toEqual(1);
  expect(nth(list, 1)).toEqual("two");
  expect(nth(list, 2)).toEqual(true);
  expect(nth(list, 3)).toBeUndefined();
});
// Tests for nth function with null and undefined values
test("nth in list with null and undefined", () => {
  const list = {
    value: null,
    rest: {
      value: undefined,
      rest: {
        value: 3,
        rest: null,
      },
    },
  };
  expect(nth(list, 0)).toEqual(null);
  expect(nth(list, 1)).toEqual(undefined);
  expect(nth(list, 2)).toEqual(3);
  expect(nth(list, 3)).toBeUndefined();
});
