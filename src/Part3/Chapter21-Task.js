"use strict";
//Task 1. EASY Create an interface Route with id, from, to, distanceKm and isActive. Create a type RouteUpdate using Partial, and write a function that prints the fields being updated.
{
    function printUpdates(update) {
        for (const [key, value] of Object.entries(update)) {
            console.log(`${key} = ${value}`);
        }
    }
    const update = {
        distanceKm: 400,
        isActive: false
    };
    printUpdates(update);
}
//Task 2. EASY Using Pick, create a type RouteLabel with only from and to. Using Omit, create NewRoute without id.
{
    const label = {
        from: "Chennai",
        to: "Bengaluru"
    };
    const newRoute = {
        from: "Chennai",
        to: "Madurai",
        distanceKm: 460
    };
    console.log(label);
    console.log(newRoute);
}
const timeouts = {
    dev: 1000,
    staging: 3000,
    prod: 5000
};
console.log(timeouts);
const lower = "L1";
const normal = "U2";
console.log(lower);
console.log(normal);
//Task 5. MEDIUM Write a function calculateFare(base: number, gstRate: number, discount: number). Use Parameters to create a type for its arguments and run it for four data sets in a loop
function calculateFare(base, gstRate, discount) {
    const gst = base * (gstRate / 100); //calculate gst amount
    const fareWithGst = base + gst; //add gst to the base fare
    const finalFare = fareWithGst - discount; //subtract discount from the fare
    return finalFare; //return the final calculated fare
}
const testData = [
    [500, 5, 20],
    [800, 10, 50],
    [1000, 18, 100],
    [650, 5, 0]
];
for (const data of testData) { // loop through all four data sets
    // data[0] → base
    // data[1] → gstRate
    // data[2] → discount
    const fare = calculateFare(...data);
    console.log(`Final fare: Rs. ${fare}`);
}
//Task 6. MEDIUM Make a shared testConfig object Readonly. Try to change a value, read the error, and write in a comment why this protects tests.
const testConfig = {
    baseUrl: "https://staging.tripva.in",
    timeout: 30000
};
console.log(testConfig.baseUrl);
//Test-data factory
function buildPassenger(overrides = {}) {
    return {
        name: "Test Passenger",
        age: 30,
        gender: "Female",
        seat: "L1",
        ...overrides //replaces only the values supplied by the test
    };
}
// 1. Create a default passenger
const p1 = buildPassenger();
// 2. Create a senior citizen
const p2 = buildPassenger({
    name: "Senior Passenger",
    age: 65
});
// 3. Create a child
const p3 = buildPassenger({
    name: "Child",
    age: 5
});
// 4. Create a passenger with ID proof
const p4 = buildPassenger({
    name: "Aarthi",
    idProof: "Aadhar123"
});
// 5. Create a passenger in seat U4
const p5 = buildPassenger({
    name: "Arjun",
    seat: "U4"
});
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(p5);
const update1 = {
    pnr: "TRV1234",
    fare: 700
};
const update2 = {
    pnr: "TRV1235",
    status: "CANCELLED",
    couponCode: "SAVE100"
};
/*
const invalid: UpdateBookingRequest = { route: "Chennai-Bengaluru" };
why invalid bcs pnr = required, but here invalid object doesn't contain pnr.
*/ 
