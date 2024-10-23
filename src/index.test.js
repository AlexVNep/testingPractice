import capitalize, { reverseString } from "./index.js";

// test("capitalize is defined", () => {
//   expect(capitalize).toBeDefined();
// });

// test("Accepts string returns same string", () => {
//   expect(capitalize("First")).toMatch("First");
// });

// test("Accepts string returns first letter capitalised", () => {
//   expect(capitalize("juice")).toMatch("Juice");
// });

// test("Accepts string returns first letter capitalised", () => {
//   expect(capitalize("my Kingdom")).toMatch("My Kingdom");
// });

// test("If not a string", () => {
//   expect(capitalize(123)).toBe("This is not a string");
// });

// test("If input is empty", () => {
//   expect(capitalize("")).toBe("Input empty");
// });

// reverseString function
test("reverseString defined", () => {
  expect(reverseString).toBeDefined();
});

test("Accepts a string as an input", () => {
  expect(reverseString("string")).toBe("string");
});

test("Return reverse of input", () => {
  expect(reverseString("string")).toMatch("gnirts");
});
