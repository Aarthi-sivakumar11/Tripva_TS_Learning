"use strict";
/*const PassengerName: String= "Aarthi";
const fromcity : String = "Chennai";
const tocity : string = "Hyderabad";
const seatnumber : String = "L12";
let fare: number = 1150;

console.log("----Tripva ticket---");
console.log("passenger: ",PassengerName);
console.log("Route: ",fromcity, "to", tocity);
console.log("Seat:", seatnumber);
console.log("Fare (Rs.):", fare);

fare = fare -100;
console.log("Fare after coupon rs:", fare);
*/
//Task 1. EASY Create variables for your name, your city, your age and whether you have a laptop. Use thecorrect types and print each one with a label.
{
    const Name = "Aarthi";
    const city = "Chennai";
    let age = 21;
    const hasLaptop = true;
    console.log("*****Task1*****");
    console.log("NAME: ", Name);
    console.log("CITY: ", city);
    console.log("AGE: ", age);
    console.log("HAS LAPTOP: ", hasLaptop);
}
//Which of these names are invalid, and why? 2ndPassenger, passenger_2, total-fare, $price, class, seatNo.
console.log("****Task2****");
console.log("2ndPassenger - invalid"); //Variable names cannot start with a number
console.log("passenger_2 - valid"); //underscore is allowed
console.log("total-fare - invalid"); //minus operator not allowed
console.log("$price - valid"); //dollar symbol is allowed
console.log("class - invalid"); //class is reserved keyword
console.log("seatNo - invalid"); //camel case is allowed
// Rename these badly named variables using good names: x = 40 (seats in a bus), a ="PNR123", flag = true (user is logged in).
console.log("****Task3****");
let seatNumber = 40;
let pnrNumber = "PNR123";
let isUserLoggedIn = true;
// Declare const maxSeats = 40 and try to change it to 45. Write down the exact error message. Then fix the code in the correct way.
console.log("****Task4****");
{
    const maxSeats = 40;
    //maxSeats = 45;  Cannot assign to 'maxSeats' because it is a constant. 
    console.log("const The value should not be reassigned = ", maxSeats);
}
let maxSeats = 40;
maxSeats = 45;
console.log("let we can assign a new values = ", maxSeats);
// Write a program that prints a bus details card: operator name, bus type, departure time, arrival time, total seats and booked seats. Then calculate and print the available seats.
console.log("****Task5****");
const operatorName = "RR";
const busType = "AC Sleeper";
const departureTime = "10:00 PM";
const arrivalTime = "06:00 AM";
const totalSeats = 40;
let bookedSeats = 28; //value can be changed, so i declared as let keyword
const availableSeats = totalSeats - bookedSeats;
console.log("BUS DETAILS");
console.log("Operator:", operatorName);
console.log("Bus Type:", busType);
console.log("Departure:", departureTime);
console.log("Arrival:", arrivalTime);
console.log("Total Seats:", totalSeats);
console.log("Booked Seats:", bookedSeats);
console.log("Available Seats:", availableSeats);
//Write a program with a variable declared inside a block { } and try to print it outside. Explain the error in your own words. Then fix it in two different ways.
console.log("****Task6****");
{
    let busName = "MM Express"; //block scope visible only inside these braces
    console.log(busName);
}
//console.log(busName);  it give the error cannot find name because it is local variable so we can't access in outside the block scope 
console.log("Fix 1 - we declare it global scope so visible everywhere below");
let busName;
{
    busName = "MM Express";
}
console.log("Fix 1 = ", busName); //busName is available outside because it was declared outside the block.
console.log("Fix -2 - use the variable only inside the block");
{
    let busName = "MM Express"; //block scope visible only inside these braces
    console.log(busName);
}
