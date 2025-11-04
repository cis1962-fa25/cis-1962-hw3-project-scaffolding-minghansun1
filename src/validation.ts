import * as z from "zod";
import Pizza from "./pizza.js";

interface ValidResult {
    isPizza: boolean;
    pizza: z.infer<typeof Pizza>;
}

interface InvalidResult {
    isPizza: boolean;
    errors: any;
}

type Response = ValidResult | InvalidResult;



function validatePizza(data: unknown): Response {
    const result = Pizza.safeParse(data);

    if (!result.success) {
        return { isPizza: false, errors: result.error.issues };
    }

    return { isPizza: true, pizza: result.data };
}

export default validatePizza;
