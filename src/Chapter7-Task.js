"use strict";
//Task 1. EASY Write a program that prints "Adult", "Child" or "Senior citizen" based on an age variable (under 12 is a child, 60 and above is a senior citizen).
const age = 25;
if (age < 12) //25<12 - false
 {
    console.log("Child"); // if age is below, print child
}
else if (age >= 60) //25>=60 - false
 {
    console.log("Senior citizen"); // if age is 60 or above, print senior citizen
}
else {
    console.log("Adult");
}
//Task 2. EASY Given a seatsLeft number, print "Sold out" for 0, "Only a few left" for 1 to 5, and "Available" for more than 5.
const seatsLeft = 3;
if (seatsLeft === 0) {
    console.log("Sold out");
}
else if (seatsLeft <= 5 && seatsLeft >= 1) {
    console.log("Only a few left");
}
else if (seatsLeft > 5) {
    console.log("Available");
}
//Task 3. MEDIUM Write a switch that prints the meaning of HTTP status codes 200, 201, 400, 401, 403, 404 and 500, and "Unknown" for anything else.
const statusCode = 404;
switch (statusCode) {
    case 200:
        console.log("OK");
        break;
    case 201:
        console.log("Created");
        break;
    case 400:
        console.log("Bad request");
        break;
    case 401:
        console.log("Unauthorized");
        break;
    case 403:
        console.log("Forbidden");
        break;
    case 404:
        console.log("Not found"); //stop the switch after match
        break;
    case 500:
        console.log("Server side error");
        break;
    default:
        console.log("Unknown");
}
//Task 4. MEDIUM Rewrite the nested example in section 7.5 using guard clauses in a function.
function checkout(isLoggedIn, hasSeat, paymentDone) {
    if (!isLoggedIn)
        return "Please log in";
    if (!hasSeat)
        return "Select a seat";
    if (!paymentDone)
        return "Complete the payment"; //return - exits the function
    return "Ticket issued";
}
console.log(checkout(true, true, true)); // Ticket issued
console.log(checkout(true, true, false)); // Complete the payment
/*Task 5 — Medium: Cancellation refund

Ticket price = ₹1,200.
- More than 24 hours before departure: 90% refund.
- From 12 hours up to and including 24 hours: 50% refund.
- Less than 12 hours: 0% refund.
print the refund amount.
*/
{
    const ticketPrice = 1200;
    const hoursBeforeDep = 18; //passenger receives a 50% refund
    let refundPercentage;
    if (hoursBeforeDep > 24) //cancel more than 24 hours before departure for a 90% refund
     {
        refundPercentage = 90;
    }
    else if (hoursBeforeDep >= 12 && hoursBeforeDep <= 24) //cancel between 12 and 24 hours for 50% refund
     {
        refundPercentage = 50;
    }
    else {
        refundPercentage = 0;
    }
    const refundAmt = ticketPrice * refundPercentage / 100;
    console.log(`Refund percentage: ${refundPercentage}%`);
    console.log(`Refund amount: Rs. ${refundAmt}`);
}
// Task 6 Compare expected and actual bus counts, expected and actual cheapest fares, and page load time. Print every failure and a final PASS or FAIL result.
const expectedBusCount = 12;
const actualBusCount = 12;
const expectedCheapestFare = 499;
const actualCheapestFare = 599;
const pageLoadTimeMs = 3200;
const maxPageLoadTimeMs = 3000;
let hasFailed = false; //hasFailed became true, when any check fails
//Check bus count
if (actualBusCount !== expectedBusCount) // 12!==12 (false) --The exp and actual bus count are same, so that check passes
 {
    console.log(`Bus count mismatch: expected ${expectedBusCount}, got ${actualBusCount}`);
    hasFailed = true;
}
//Check cheapest fares
if (actualCheapestFare !== expectedCheapestFare) //599!==499(true) --So the fare check fails
 {
    console.log(`Fare mismatch: expected ${expectedCheapestFare}, got ${actualCheapestFare}`);
    hasFailed = true;
}
//Check page load time
if (pageLoadTimeMs > maxPageLoadTimeMs) //3200>3000(true) --So the performance check fails
 {
    console.log(`Page load time too high: maximum ${maxPageLoadTimeMs} ms, got ${pageLoadTimeMs} ms`);
    hasFailed = true;
}
//print final result
if (hasFailed) {
    console.log("Final result: FAIL");
}
else {
    console.log("Final result: PASS");
}
