#!/usr/bin/env node
import fs from "fs";
import process from "process";
import validatePizza from "./validation.js";

const [, , filePath] = process.argv;

if (!filePath) {
  console.error("Usage: pizza-validator <path-to-json>");
  process.exit(1);
}

try {
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const json = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const result = validatePizza(json);

  if (!result.isPizza) {
    console.error("Invalid pizza:");
    if ("errors" in result) {
      result.errors?.forEach((e: any) => console.error("  •", e));
    }
    process.exit(1);
  }

  console.log("Valid pizza!");
  if ("pizza" in result) {
    console.log(JSON.stringify(result.pizza, null, 2));
  }
} catch (err) {
  console.error("Error:", (err as Error).message);
  process.exit(1);
}
