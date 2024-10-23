import capitalize from "./index.js";

test("capitalize is defined", () => {
  expect(capitalize).toBeDefined();
});

test("Accepts string returns same string", () => {
  expect(capitalize("First")).toMatch("First");
});

test("Accepts string returns first letter capitalised", () => {
  expect(capitalize("juice")).toMatch("Juice");
});

test("Accepts string returns first letter capitalised", () => {
  expect(capitalize("my Kingdom")).toMatch("My Kingdom");
});
