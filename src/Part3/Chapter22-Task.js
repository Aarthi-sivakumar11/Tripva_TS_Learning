"use strict";
//Task 1. EASY Create an interface Passenger with four properties. Create type PassengerKey = keyof Passenger and write a function printField(p: Passenger, key: PassengerKey).
function printField(p, key) {
    console.log(`${key} = ${p[key]}`);
}
const p = {
    name: "Priya",
    age: 28,
    seat: "L1",
    pnr: "TRV1234"
};
printField(p, "name");
printField(p, "seat");
printField(p, "pnr");
//Task 2. EASY Create const SEAT_TYPES = ["SLEEPER", "SEATER", "SEMI_SLEEPER"] as const and derive a SeatType union from it. Loop over the array and print each value
const SEAT_TYPES = ["SLEEPER", "SEATER", "SEMI_SLEEPER"];
for (const seat of SEAT_TYPES) {
    console.log(seat);
}
const selected = "SLEEPER";
console.log(`Selected: ${selected}`); //Selected: SLEEPER
//Task 3. EASY Using indexed access types, create a type for the status property and a type for one element of the seats array of a Booking interface.
{
    const status = "CONFIRMED";
    const seat = "L1";
    console.log(status);
    console.log(seat);
}
const bus = {
    busId: 101,
    operator: null,
    fare: 650
};
console.log(bus);
const id1 = "seat-L1";
const id2 = "seat-U4";
console.log(id1);
console.log(id2);
// const bad: SeatTestId = "seat-X9";    //invalid bcs X isn't L or U, 9 isn't 1,2,3,4
//Task 6. MEDIUM Write an assertion function assertIsString(value: unknown): asserts value is string and use it on a value read from JSON.parse.
function assertIsString(value) {
    // If value is NOT a string, throw an error.
    if (typeof value !== "string") {
        throw new Error("Value is not a string");
    }
}
const data = JSON.parse('"Trv1234"'); //parse the JSON string into a JavaScript object, it returns any type of data.
assertIsString(data); //check at runtime that data is a string
console.log(data.toUpperCase()); //TRV1234
const config = {
    dev: {
        baseUrl: "http://localhost:3000",
        retries: 0
    },
    staging: {
        baseUrl: "https://staging.tripva.in",
        retries: 1
    },
    prod: {
        baseUrl: "https://www.tripva.in",
        retries: 2
    }
}; //create an object where every key in Env must exist, and every value must be an EnvConfig.
console.log(config.prod.baseUrl); //https://www.tripva.in
