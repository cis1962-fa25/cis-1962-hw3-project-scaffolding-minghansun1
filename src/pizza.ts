import * as z from "zod";

const Pizza = z.object({
  size: z.number(),
  crust: z.enum(["stuffed", "normal"]),
  isDeepDish: z.boolean().optional(),
  toppings: z.array(z.enum(["pepperoni", "mushrooms", "onions", "sausage"])).optional(),
});

export default Pizza;
