import validatePizza from "../src/validation.ts";

describe("basic", () => {
  test("fail", () => {
    const result = validatePizza({ size: 2, crust: "normal" });
    expect(result).toBe(5);
  });
});