//Task 8. HARD Write loadJsonFile<T>(filePath: string, guard: (v: unknown) => v is T): T[] that reads a JSON array file, validates every item with the guard, and throws a clear error with the index of the first invalid item.

import fs from "fs";

function loadJsonFile<T>(   //T is generic type
    filePath: string,
    guard: (value: unknown) => value is T): T[]   //This is a function that checks whether the given value matches type T

{

    // Read JSON file as text
    const text = fs.readFileSync("D:\Users\Dell\Desktop\Tripva Typescript Assignments\bookings.json", "utf-8");     //The text variable contains the JSON content as a string.

    // convert json text into a JavaScript value
    const data: unknown = JSON.parse(text);

    // File must contain an array
    if (!Array.isArray(data)) {     //If the data is not an array, throw an error
        throw new Error("JSON file must contain an array");
    }

    // Store only validated items
    const result: T[] = [];     //This creates an empty array that can store only validated items of type T.

    // Validate every item
    for (let i = 0; i < data.length; i++) {

        if (!guard(data[i])) {
            throw new Error(`Invalid item at index ${i}`);
        }

        // TypeScript now knows data[i] is T
        result.push(data[i]);
    }

    return result;    
}



