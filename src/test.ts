import validatePizza from "./validation.js";

const result = validatePizza({ size: 2, crust: "normal" });
// there should be no typescript errors below
if ("pizza" in result) {
    console.log(result.pizza.crust);
} else {
    console.log("Validation errors:");
    console.log(result.errors);
}
