[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/x6X7wJcH)
TODO: Fill this out with details about how to run your app!

## Usage

To use this package, install it by providing a path to it. For example, if you're in a folder next to this package, run `npm install ../cis-1962-hw3-project-scaffolding-minghansun1`

Import the `validate-pizza` function using `import { validatePizza } from "pizza-validator";`

## Example

```
import { validatePizza } from "pizza-validator";

const data = {
  size: 12,
  crust: "stuffed",
  isDeepDish: true,
  toppings: ["pepperoni", "pineapple"],
};

const result = validatePizza(data);

if (result.isPizza && "pizza" in result) {
  console.log("✅ Valid pizza:", result.pizza);
} else if ("errors" in result) {
  console.error("❌ Invalid pizza:", result.errors);
} else {
  console.error("❌ Unknown validation result");
}
```

## CLI Usage

Run `pizza-validator <test-file>` from the command line

## Example CLI Usage

`pizza-validator test-pizza.json`
