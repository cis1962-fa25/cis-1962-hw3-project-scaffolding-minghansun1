const { validatePizza: validatePizzaFn } = require("../src/validation.ts");

describe("basic", () => {
  test("fail", () => {
    const result = validatePizzaFn({"heheheha": true });
    expect(result.isPizza).toBe(false);
  });

  test("pass", () => {
  const result = validatePizzaFn({ size: 2, crust: "normal" });
    expect(result.isPizza).toBe(true);
    expect(result.pizza).toBeDefined();
    if (result.pizza){
      expect(result.pizza.size).toBe(2);
      expect(result.pizza.crust).toBe("normal");
    }
  });

  test("fail_crust", () => {
    const result = validatePizzaFn({ size: 2, crust: "thin" });
    expect(result.isPizza).toBe(false);
  });

  test("fail_toppings", () => {
    const result = validatePizzaFn({ size: 2, crust:"normal", toppings: ["pepperoni", "pineapple"] });
    expect(result.isPizza).toBe(false);
  });
});