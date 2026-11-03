"use strict";
//Task 1 Create an object for a bus with operator, bus type, departure time, fare and available seats.
//Print each property using dot notation.
{
    const bus = {
        operator: "Test_tpr",
        busType: "AC Sleeper",
        departure: "21:00",
        fare: 850,
        availableSeats: 12
    };
    console.log(bus.operator);
    console.log(bus.busType);
    console.log(bus.departure);
    console.log(bus.fare);
    console.log(bus.availableSeats);
}
//Task 2. EASY Update the fare, reduce available seats by 2, and print the object again.
{
    const bus = {
        operator: "Test_tpr",
        busType: "AC Sleeper",
        departure: "21:00",
        fare: 850,
        availableSeats: 12
    };
    bus.fare = 900; //update
    bus.availableSeats -= 2; //reduce by 2
    console.log(bus);
}
//Task 3 Use Object.entries to print every property of the bus as key -> value.
const bus = {
    operator: "KPN",
    busType: "AC Sleeper",
    fare: 850
};
for (const [key, value] of Object.entries(bus)) { //object.entries converts its properties into an array of key-value pairs.
    console.log(`${key} -> ${value}`);
}
//Task 4 Create a booking object with a nested route object and an array of three passenger objects. 
//Print all passenger names in capital letters and the total age of all passengers.
{
    const booking = {
        pnr: "TRV5001",
        route: {
            from: "Chennai",
            to: "Bengaluru"
        },
        passengers: [
            { name: "aarthi", age: 25 },
            { name: "Ashwini", age: 30 },
            { name: "sivakumar", age: 35 }
        ]
    };
    // Print passenger names in capital letters
    for (const passenger of booking.passengers) //This loop takes each passenger object one by one.
     {
        console.log(passenger.name.toUpperCase());
    }
    const totalAge = booking.passengers.reduce((sum, passenger) => sum + passenger.age, 0);
    console.log("Total age:", totalAge);
}
//Task 5 Write a function printBooking({ pnr, amount }: { pnr: string; amount: number }) that uses destructuring in its parameter.
function printBooking({ pnr, amount }) {
    console.log("PNR:", pnr); //Access directly using property name
    console.log("Amount:", amount);
}
const booking = {
    pnr: "TRV123",
    amount: 1500
};
printBooking(booking);
//Task 6 Show with code the difference between assigning an object, a spread copy and structuredClone when a nested property is changed.
const original = {
    pnr: "TRV123",
    route: {
        from: "Chennai",
        to: "Bangalore"
    }
};
// 1. Reference
const reference = original; //both point to the same object.
reference.route.to = "Coimbatore";
console.log("Original after reference:", original.route.to);
// 2. Spread copy
const shallow = { ...original }; //A new main object is created, nested route object is still shared.
shallow.route.to = "Madurai";
console.log("Original after shallow copy:", original.route.to);
// 3. Deep copy
const deep = structuredClone(original); //separate main object & nested route object is also created.
deep.route.to = "Salem";
console.log("Original after deep copy:", original.route.to);
console.log("Deep copy destination:", deep.route.to);
//Task 7 Given an array of 6 bus objects (operator, fare, rating, isAc), write code to: list only AC buses, find the highest rated bus, calculate the average fare, and create a new array of strings like "KPN- Rs. 650 - 4.3 stars".
const buses = [
    { operator: "KPN", fare: 650, rating: 4.3, isAc: true },
    { operator: "VRL", fare: 550, rating: 4.5, isAc: false },
    { operator: "SRS", fare: 800, rating: 4.7, isAc: true },
    { operator: "volva", fare: 700, rating: 4.1, isAc: true },
    { operator: "Espanno", fare: 600, rating: 4.0, isAc: false },
    { operator: "Scabia", fare: 750, rating: 4.6, isAc: true }
];
// 1. List only AC buses
const acBuses = buses.filter(bus => bus.isAc === true); //filter() create a new array, keep only matching ele
console.log("AC Buses:", acBuses);
// 2. Find the highest-rated bus
const highestRated = buses.reduce((highest, current) => {
    return current.rating > highest.rating ? current : highest;
});
console.log("Highest Rated Bus:", highestRated);
// 3. Calculate the average fare
const averageFare = buses.reduce((sum, bus) => sum + bus.fare, 0) / buses.length; //divide the total fare by 6 to get the avg
console.log("Average Fare:", averageFare);
// 4. Create a new array of formatted strings
const busDetails = buses.map(bus => {
    return `${bus.operator} - Rs. ${bus.fare} - ${bus.rating} stars`;
});
console.log("Bus Details:", busDetails);
//Task 8 Convert an array of booking objects to a pretty JSON string, print it, parse it back, and check that the parsed data has the same number of bookings and the same first PNR.
const bookings = [
    {
        pnr: "TRV101",
        passenger: "Ashwini",
        amount: 1500
    },
    {
        pnr: "TRV102",
        passenger: "Priya",
        amount: 1200
    },
    {
        pnr: "TRV103",
        passenger: "Arun",
        amount: 1800
    }
];
// 1. Convert booking objects into JSON string
const jsonString = JSON.stringify(bookings, null, 2); //Use 2 spaces for indentation to make the JSON readable
console.log("JSON String:", jsonString);
// 2. Convert JSON string back into an array
const parsedBookings = JSON.parse(jsonString); //JSON.parse() returns an any value by default
// 3. Check number of bookings
console.log("Same number of bookings:", parsedBookings.length === bookings.length);
// 4. Check first PNR
console.log("Same first PNR:", parsedBookings[0].pnr === bookings[0].pnr);
