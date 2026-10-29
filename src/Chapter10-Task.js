"use strict";
//Task 1 Create a tuple type [city: string, pincode: number] and three variables using it. Print each one.
const city1 = ["Chennai", 600001];
const city2 = ["Madurai", 625001];
const city3 = ["Salem", 636001];
console.log(city1);
console.log(city2);
console.log(city3);
//Task 2 Try to assign a tuple with the wrong order and with too many elements. Write down both error messages.
const cityInfo = ["Chennai", 600001];
//Make an array of five seats
const seat = [
    ["L1", "lower", 800, true],
    ["L2", "lower", 800, false],
    ["U1", "upper", 700, true],
    ["U2", "upper", 700, false],
    ["L3", "lower", 800]
];
//print the total price.
const totalPrice = seat.reduce((sum, seat) => sum + seat[2], 0); //price is stored at index 2
console.log("Total price:", totalPrice);
const searchCases = [
    ["Chennai", "Bengaluru", 3],
    ["Chennai", "Madurai", 4],
    ["Chennai", "Coimbatore", 2],
    ["Madurai", "Salem", 1],
    ["Chennai", "Trichy", 3]
];
//Loop through it and print each case.
for (const [from, to, expectedMinimumBuses] of searchCases) //The for...of loop visits every test case i use array destructuring
 {
    console.log(`${from} to ${to}: expect at least ${expectedMinimumBuses} buses`);
}
const seats = [
    ["A1", 800],
    ["A2", 650],
    ["B1", 700],
    ["B2", 550]
];
const cheapest = seats.reduce((cheap, seat) => seat[1] < cheap[1] ? seat : cheap);
// A1 - 800 becomes cheap bcs the first element is automatically assigned as the initial best value, 
// 650 < 800 (true) ? A2 
// 700 < 650 (false) ? A2 , If false, keep the current fare as cheap 
// 550 < 650 (true) ? B2
console.log("Cheapest seat:", cheapest[0]);
console.log("Price:", cheapest[1]);
// same data as objects.
const seatObjects = [
    { seatNumber: "A1", price: 800 },
    { seatNumber: "A2", price: 650 },
    { seatNumber: "B1", price: 700 },
    { seatNumber: "B2", price: 550 }
];
// The data is the same, but instead of accessing values by position, we access them by name.
const cheapestObj = seatObjects.reduce((cheap, seat) => seat.price < cheap.price ? seat : cheap);
console.log("Cheapest seat:", cheapestObj.seatNumber);
console.log("Price:", cheapestObj.price);
/*Which is easier?
- Tuple: seat[1]  - remember that index 1, value accessed by position
- Object: seat.price - value accessed by name
Objects are often easier to read because the property names tell us what each value means.*/ 
