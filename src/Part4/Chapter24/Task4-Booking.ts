//Task 4. MEDIUM Write a program that writes an array of five bookings to bookings.json, reads the file back, and prints the total fare of all bookings.

import fs from "fs";  

interface Booking 
{
    pnr: string;
    fare: number;
}

const bookings: Booking[] = [    
    { pnr: "TRV1001", fare: 650 },
    { pnr: "TRV1002", fare: 800 },
    { pnr: "TRV1003", fare: 550 },
    { pnr: "TRV1004", fare: 700 },
    { pnr: "TRV1005", fare: 900 }
];

// Convert object into JSON text
const json = JSON.stringify(bookings, null, 2);   

// Write JSON to file
fs.writeFileSync("bookings.json", json, "utf-8");     //Write json text to the file, If the file already has content, old content is replaced

// Read file
const text = fs.readFileSync("bookings.json", "utf-8");   //Reads the file as text.

// Convert JSON text into object
const loaded = JSON.parse(text) as Booking[];    //TS does not verify that fare is actually a number. as Booking[] is only a type assertion. It does not validate the json data at runtime.

// Calculate total fare
const totalFare = loaded.reduce((total, booking) =>  total + booking.fare, 0);
console.log("Total fare:", totalFare);