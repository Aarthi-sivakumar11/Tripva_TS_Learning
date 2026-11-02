"use strict";
//Task 1 Write a function calculateGst(amount: number): number that returns 5% of the amount.
function calculateGst(amount) {
    return amount * 5 / 100; //return send 50 back 
}
console.log(calculateGst(1000));
//Task 2 Write an arrow function isWeekend(day: string): boolean that returns true for "Saturday" and "Sunday".
const isWeekend = (day) => {
    return day == "Saturday" || day == "Sunday";
};
console.log(isWeekend("Saturday")); // True
console.log(isWeekend("sunday")); //false, bcs case sensitive
//Task 3 Write a function with a default parameter: greet(name: string, city: string = "Chennai"). Call it with and without the city.
function greet(name, city = "Chennai") {
    return `Hello ${name} from ${city}`;
}
console.log(greet("Aarthi"));
console.log(greet("Joy", "Trichy"));
//Task 4 Write a function getSeatType(seatNumber: string): string that returns "Lower berth" if the seat starts with "L", "Upper berth" if it starts with "U", and "Seater" otherwise.
function getSeatType(seatNumber) {
    if (seatNumber.startsWith("L")) { //checks whether the seat starts with L
        return "Lower berth";
    }
    if (seatNumber.startsWith("U")) { //checks whether the seat starts with U
        return "Upper berth";
    }
    return "Seater";
}
console.log(getSeatType("L12"));
console.log(getSeatType("U4"));
console.log(getSeatType("S2"));
//Task 5 Write a function average(...numbers: number[]): number using a rest parameter.Make it return 0 when no numbers are given.
function average(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    const total = numbers.reduce((sum, no) => sum + no, 0);
    return total / numbers.length;
}
console.log(average(10, 20, 30)); //60/3 = 20
console.log(average()); //0
console.log(average(5, 15)); //20/2 = 10
//Task 6 Write a function applyDiscount(amount: number, rule: (n: number) => number): number and pass three different discount rules to it as arrow functions.
function applyDiscount(amount, rule) {
    return rule(amount);
}
const tenPercent = (amount) => amount * 0.90;
const twentyPercent = (amount) => amount * 0.80;
const flat100 = (amount) => amount - 100;
console.log(applyDiscount(1000, tenPercent)); //900
console.log(applyDiscount(1000, twentyPercent)); //800
console.log(applyDiscount(1000, flat100)); //900
//Task 7 Write createIdGenerator(prefix: string) that returns a function. Each call of the returned function gives the next ID: TRV-001, TRV-002 and so on. Use a closure and padStart.
function createIdGenerator(prefix) {
    let count = 0;
    return () => {
        count++;
        return `${prefix}-${String(count).padStart(3, "0")}`;
    };
}
const nextId = createIdGenerator("TRV");
console.log(nextId()); //TRV-001   
console.log(nextId()); //TRV-002
console.log(nextId()); //TRV-003
//Task 8 Create a file of five test helpers: randomName(), randomEmail(), randomMobile(), futureDate(daysFromToday: number) and parseDuration("6h 20m") which returns minutes. Call each one and print the results.
function randomName() {
    const names = ["Aarthi", "jagdheshwari", "radhe", "uday", "himanshu", "akshay"];
    return names[Math.floor(Math.random() * names.length)]; //this is for random selection, math.random() - random dec number btw 0 & 1
}
function randomEmail() {
    return `qa.${Date.now()}@tripva-test.in`; //Date.now() it returns the current timestamp in milliseconds which help make the email unique
}
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomMobile() {
    const first = randomNumber(6, 9); // starting this number
    let rest = "";
    for (let i = 0; i < 9; i++) {
        rest += randomNumber(0, 9); //remaining 9 number
    }
    return first + rest;
}
function futureDate(daysFromToday) {
    const date = new Date(); //Date object containing the current date and time.
    date.setDate(date.getDate() + daysFromToday); //gets the day of the month & then changes the day of the month.
    return date;
}
//convert hours and minutes into total minutes
function parseDuration(text) {
    const parts = text.split(" "); //split(" ") separates the text wherever there is a space.
    const hours = Number(parts[0].replace("h", ""));
    const minutes = Number(parts[1].replace("m", ""));
    return hours * 60 + minutes;
}
console.log(randomName());
console.log(randomEmail());
console.log(randomMobile());
console.log(futureDate(7)); //adds 7 to the current day of the month.
console.log(parseDuration("6h 20m"));
