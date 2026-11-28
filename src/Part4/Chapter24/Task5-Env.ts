//Task 5. MEDIUM Create a .env file with BASE_URL and TEST_ENV. Load it with dotenv and print the values. Then write requireEnv and test it with a missing variable.

import "dotenv/config";    //this loads variables from .env into process.env

function requireEnv(name: string): string {

    // Read variable
    const value = process.env[name];

    // Check whether the variable is missing or empty
    if (value === undefined || value === "") 
    {
        throw new Error(`Missing environment variable: ${name}`);     // value is definitely a string
    }

    return value;   //value is a string
}

console.log("BASE_URL:", requireEnv("BASE_URL"));
console.log("TEST_ENV:", requireEnv("TEST_ENV"));

// This intentionally fails if the variable doesn't exist
try {
  requireEnv("MISSING_VARIABLE");
} catch (err) {
  console.log("Caught expected error:", (err as Error).message);
}

