"use strict";
/*Task 1. EASY Store " Tripva Bus Booking " in a variable.
Print its length before and after trimming, in capital letters and in small letters.*/
const text = " Tripva Bus Booking ";
console.log("Length before trimming ", text.length);
console.log("Length after trimming ", text.trim().length);
console.log("Capital letters ", text.toUpperCase());
console.log("small letters ", text.toLowerCase());
//Task 2. EASY From the string "Hyderabad-Vijayawada", extract both city names using indexOf and slice.
{
    const location = "Hyderabad-Vijayawada";
    const dash = location.indexOf("-");
    const from = location.slice(0, dash); //slice return the char from start to end
    const to = location.slice(dash + 1);
    console.log("From", from);
    console.log("To", to);
}
//Task 3. EASY Use a template literal to print: Dear <name>, your bus from <from> to <to> leaves at <time>.
{
    const name = "Aarthi";
    const from = "Chennai";
    const to = "Bangalore";
    const time = "8:45PM";
    const message = `Dear ${name}, your bus from ${from}, to ${to}, leaves at ${time}.`;
    //Anything inside is replaced with its value
    console.log(message);
}
//Task 4. MEDIUM Write code that checks if an email address contains @, ends with .com or .in, and has no spaces. Print Valid or Invalid.
let email = "aarthi@gmail.com";
if (email.includes("@") && email.endsWith(".com") || email.endsWith(".in") && !email.includes(" ")) {
    console.log("Valid email");
}
else {
    console.log("Invalid email");
}
//Task 5. MEDIUM Convert "Rs. 12,45,000.50" into the number 1245000.5.
const fareText = "Rs. 12,45,000.50";
const cleanedFare = fareText.replace("Rs.", "").replace(/[^0-9.]/g, ""); //anything that is NOT a digit or decimal point. g replace all matching characters.
const fare = Number(cleanedFare);
console.log("Cleaned fare: ", cleanedFare); //1245000.50
console.log("Fare as number:", fare); //1245000.5   String are immutable. Once string is created we can't change the old one
console.log("fare type", typeof fare); //number
//Task 6. MEDIUM Write a regex that matches a vehicle number like TN-01-AB-1234. Test it on three valid and three invalid values.
const vehiclePattern = /^[A-Z]{2}-\d{2}-[A-Z]-\d{4}$/;
const vehicleNumbers = ["TN-01-AB-1234", "TN-34-FG-6754", "TN-67-ZZ-8754", "TN01AB1234", "TN-0-AB-1234", "TN-01-AB-123"];
for (const vehicle of vehicleNumbers) {
    if (vehiclePattern.test(vehicle)) {
        console.log(vehicle, "valid");
    }
    else {
        console.log(vehicle, "invalid");
    }
}
//Task 7. HARD You get this text from a page: "Showing 23 buses | Cheapest: Rs. 499 | Fastest: 6h 20m". 
//Extract the number of buses, the cheapest fare and the fastest duration in minutes (380). Print all three.
const pageText = "Showing 23 buses | Cheapest: Rs. 499 | Fastest: 6h 20m";
//Extract the number of buses
const busMatch = pageText.match(/Showing (\d+) buses/); //Mtch one or more digit
const busCount = Number(busMatch?.[1] ?? 0); //Exact the digit by frst parentheses, then convert "23" into the number
//Exact the Cheapest fare
const fareMatch = pageText.match(/Cheapest: Rs. (\d+)/);
const CheapestFare = Number((fareMatch?.[1] ?? "0").replaceAll(",", ""));
//Exact the fastest duration in minutes (380)
const durationMatch = pageText.match(/Fastest: (\d+)h (\d+)m/);
const hours = Number(durationMatch?.[1] ?? 0);
const minutes = Number(durationMatch?.[2] ?? 0);
//Convert the entire duration to min
const totalMin = hours * 60 + minutes;
//print the results
console.log("Buses", busCount);
console.log("Cheapest fare ", CheapestFare);
console.log("fastest duration ", totalMin, "Minutes");
