import * as z from "zod";
import Pizza from "./pizza";

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

export default validatePizza;
