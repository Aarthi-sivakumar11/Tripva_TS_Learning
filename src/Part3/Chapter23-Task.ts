/*Task 1. EASY Run npx tsc --showConfig in your practice project and write down the values of target, module and strict.
     I ran this command in terminal = npx tsc --showConfig

    Result:
    target: "esnext"
    module: "esnext"
    strict: true
*/


/*Task 2. EASY Add a typecheck script to package.json and run it with npm run typecheck.

    I added this in package.json:
    "scripts": {
      "typecheck": "tsc --noEmit"
    }

    Then i ran in terminal = npm run typecheck
    Result: No errors. The command ran "tsc --noEmit" and finished without any error, so all the TS files passed the type check
*/


//Task 3. MEDIUM Write a file with one example of each of these errors: TS2322, TS2345, TS2339, TS2554 and TS18048. Run npm run typecheck, then fix each error and write in a comment what caused it.

// TS2322 =>  wrong value type
//const pnr: string = 1234;   //number cannot be assigned to string
const pnr: number = 1234;   //fix


// TS2345 => wrong function argument
function printFare(fare: number): void {   
    console.log(fare);
}
//printFare("650");      //function expects number but receives string
printFare(650);      //fix


// TS2339 =>  wrong/missing property
interface Passenger {
    name: string;
    //age: number;  //fix
}

const passenger: Passenger = {
    name: "Aarthi"
    //age: 21   //fix
};
//console.log(passenger.age);   // Property age does not exist
//fix: add age property to the object


// TS2554 => wrong number of arguments
function add(a: number, b: number): number {      // Function expects 2 arguments but receives only 1
    return a + b;
}
// add(10);
add(10, 20);  //fix


// TS18048 => possibly undefined
// bus may be undefined
function findBus(): { operator: string } | undefined {
    return undefined;
}

const bus = findBus();
// console.log(bus.operator);     //This is dangerous. bus may be undefined

//fix:
if (bus !== undefined) {      
    console.log(bus.operator);
}


//Task 4. MEDIUM Turn on noUncheckedIndexedAccess. Write code that reads the third element of an array of seats and fix the error in two different ways (an if check and ??).

const seats: string[] = ["L1", "L2"];
const third = seats[2];    //The third value doesn't exist. So: third = undefined

// Method 1: if check
if (third !== undefined) {
    console.log(third.toUpperCase());
}


// Method 2: ?? default
const thirdSeat = seats[2] ?? "NO SEAT";
console.log(thirdSeat);


//Task 5. MEDIUM Add a paths alias @data/* for a test-data folder. Import a function from it using the alias and confirm that npm run typecheck passes.
import { getDefaultSeats } from "@data/seat-data";
console.log(getDefaultSeats());




//Task 6. HARD Temporarily set "strict": false, write three pieces of buggy code that now compile without errors, and run them to see them crash. Turn strict back on and record which strict check catches each bug.

// Bug 1: variable used before it has a value
try {
    let seatName: string;
    console.log(seatName.toUpperCase());     // seatName is undefined, so it crashes
} catch (error) {
    console.log("Bug 1 crashed:", (error as Error).message);
}

// Bug 2: null value
try {
    let passenger: { name: string } | null = null;
    console.log(passenger.name);             // passenger is null, so it crashes
} catch (error) {
    console.log("Bug 2 crashed:", (error as Error).message);
}

// Bug 3: implicit any (parameter has no type)
function printUpper(value) {
    console.log(value.toUpperCase());        // a number has no toUpperCase, so it crashes
}
try {
    printUpper(123);
} catch (error) {
    console.log("Bug 3 crashed:", (error as Error).message);
}
/*With strict checking enabled, TypeScript catches these categories of problems.
    I ran this command in terminal = npx tsx src/Part3/Chapter23-Task.ts

      Bug 1 crashed: Cannot read properties of undefined (reading 'toUpperCase')
      Bug 2 crashed: Cannot read properties of null (reading 'name')
      Bug 3 crashed: value.toUpperCase is not a function
*/



//Task 7. HARD Open the type definition of fs.readFileSync with Go to Definition. Write down its overloads, its parameters, its return types and the options it accepts, in your own words.

import { readFileSync } from "fs";
const text = readFileSync("package.json", "utf8");   // returns a string
console.log(text.length);

const asBytes = readFileSync("package.json");       // object (it is a Buffer)
console.log(typeof asBytes);   
/*
I right click on readFileSync and it opened a file called fs.d.ts. There I saw that readFileSync has 3 versions (overloads)

    Overloads (three versions of the same function):
    1. No encoding given (or null)   -> returns a Buffer (raw bytes)
    2. Encoding given, like "utf8"   -> returns a string (readable text)
    3. Encoding not known in advance -> returns string | Buffer

    Parameters: it takes a file path and an optional options value.
    Options: encoding (like "utf8") and flag (how to open the file, default is read).

    What I learned: TypeScript chooses the return type based on what I pass,so readFileSync("file.txt", "utf8") gives me a string.
*/
