"use strict";
//Task 1. EASY Write code that tries to parse the string "{ pnr: TRV1 }" as JSON and prints a friendly message when it fails
try {
    const data = JSON.parse("{ pnr: TRV1 }"); //it try to convert this text into JSON, but is invalid JSON bcs proper JSON needs quoted property names and string values.
    console.log(data);
}
catch (error) {
    console.log("Could not parse booking JSON");
}
//Task 2. EASY Write a function divideFare(total: number, people: number): number that throws an error when people is 0 or negative. Call it inside try...catch.
{
    function divideFare(total, people) {
        if (people <= 0) //0 <= 0, throw Error it immediately stop the fun and control move to the catch block
         {
            throw new Error("People must be greater than 0");
        }
        return total / people; //1000/4 = 250
    }
    try {
        console.log(divideFare(1000, 4));
        console.log(divideFare(1000, 0));
    }
    catch (error) {
        if (error instanceof Error) // instanceof - is this error obj created from Error obj class
         {
            console.log("Calculation failed:", error.message);
        }
    }
}
//Task 3. MEDIUM Add a finally block to the previous task that prints "Calculation finished". Run it with valid and invalid values.
function divideFare(total, people) {
    if (people <= 0) {
        throw new Error("People must be greater than 0");
    }
    return total / people;
}
console.log("---- Valid calculation ----");
try {
    console.log(divideFare(1000, 4)); //250
}
catch (error) {
    if (error instanceof Error) {
        console.log("Calculation failed:", error.message);
    }
}
finally {
    console.log("Calculation finished");
}
console.log("---- InValid calculation ----");
try {
    console.log(divideFare(1000, 0));
}
catch (error) {
    if (error instanceof Error) {
        console.log("Calculation failed:", error.message); //Calculation failed: People must be greater than 0
    }
}
finally // Always run
 {
    console.log("Calculation finished");
}
//Task 4. MEDIUM Create custom errors SeatUnavailableError (with a seat property) and PaymentFailedError (with an amount property). Throw each one from a function, catch them, and print different messages for each.
class SeatUnavailableError extends Error //it inherits the feature of build in Error call
 {
    seat;
    constructor(seat) {
        super(`Seat ${seat} is not available`); //seat property inside the error obj
        this.seat = seat;
        this.name = "SeatUnavailableError"; // set the error name to SeatUnavailableError, Instead of default name as Error
    }
}
class PaymentFailedError extends Error {
    amount;
    constructor(amount) {
        super(`Payment failed for Rs. ${amount}`);
        this.amount = amount;
        this.name = "PaymentFailedError";
    }
}
function bookSeat(seat) {
    throw new SeatUnavailableError(seat);
}
function makePayment(amount) {
    throw new PaymentFailedError(amount);
}
//For seat
try {
    bookSeat("L4");
}
catch (error) {
    if (error instanceof SeatUnavailableError) {
        console.log(`Seat ${error.seat} is unavailable`);
    }
}
// For payment:
try {
    makePayment(650);
}
catch (error) {
    if (error instanceof PaymentFailedError) {
        console.log(`Payment failed for Rs. ${error.amount}`);
    }
}
//Custom error:
class ValidationError extends Error {
    constructor(message) {
        super(message); // this send the msg to parent Error class and store the error msg 
        this.name = "ValidationError"; // set the error name to ValidationError, Instead of default name as Error
    }
}
//Function:
function parseBookingJson(text) {
    let data;
    // Step 1: Check whether JSON is valid
    try {
        data = JSON.parse(text);
    }
    catch {
        throw new ValidationError("Invalid JSON");
    }
    // Step 2: Check that the result is an object
    if (typeof data !== "object" || data === null) {
        throw new ValidationError("Booking must be an object");
    }
    const booking = data;
    // Step 3: Check pnr
    if (typeof booking.pnr !== "string") {
        throw new ValidationError("pnr is missing or invalid");
    }
    // Step 4: Check status
    if (typeof booking.status !== "string") {
        throw new ValidationError("status is missing or invalid");
    }
    // Step 5: Check totalAmount
    if (typeof booking.totalAmount !== "number") {
        throw new ValidationError("totalAmount is missing or invalid");
    }
    // Step 6: Everything is valid
    return {
        pnr: booking.pnr,
        status: booking.status,
        totalAmount: booking.totalAmount
    };
}
// Test 1 - Valid JSON
try {
    const booking = parseBookingJson('{"pnr":"TRV1234","status":"CONFIRMED","totalAmount":650}');
    console.log(booking);
}
catch (error) {
    if (error instanceof ValidationError) {
        console.log("Validation failed:", error.message);
    }
}
// Test 2 - Invalid JSON
try {
    const booking = parseBookingJson('{"pnr":"TRV1234","status":"CONFIRMED","totalAmount":850');
    console.log("Test 2:", booking);
}
catch (error) {
    if (error instanceof ValidationError) {
        console.log(`Test 2 failed ${error.message}`);
    }
}
// Test 3 - Missing PNR
try {
    const booking = parseBookingJson('{"status":"CONFIRMED","totalAmount":850}');
    console.log("Test 3:", booking);
}
catch (error) {
    if (error instanceof ValidationError) {
        console.log(`Test 3 failed - ${error.message}`);
    }
}
// Test 4 - Wrong status type
try {
    const booking = parseBookingJson('{"pnr":"TRV1234","status":123,"totalAmount":850}');
    console.log("Test 4:", booking);
}
catch (error) {
    if (error instanceof ValidationError) {
        console.log(`Test 4 failed - ${error.message}`);
    }
}
// Test 5 - Wrong totalAmount type
try {
    const booking = parseBookingJson('{"pnr":"TRV1234","status":"CONFIRMED","totalAmount":"850"}');
    console.log("Test 5:", booking);
}
catch (error) {
    if (error instanceof ValidationError) {
        console.log(`Test 5 failed - ${error.message}`);
    }
}
