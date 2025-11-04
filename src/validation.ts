import * as z from "zod";
const Pizza = require("./pizza.ts");

function validatePizza(data: unknown): {
    isPizza: boolean;
    pizza?: z.infer<typeof Pizza>;
    errors?: z.ZodIssue[];
} {
    const result = Pizza.safeParse(data);

    if (!result.success) {
        return { isPizza: false, errors: result.error.issues };
    }

    return { isPizza: true, pizza: result.data };
}

module.exports = { validatePizza };
