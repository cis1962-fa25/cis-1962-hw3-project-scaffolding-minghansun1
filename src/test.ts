import validatePizza from "./validation";

const result = validatePizza({ size: 2, crust: "normal" });
// there should be no typescript errors below
if (result.isPizza && result.pizza) {
    console.log(result.pizza.crust);
} else {
    console.log("Validation errors:");
    console.log(result.errors);
}
