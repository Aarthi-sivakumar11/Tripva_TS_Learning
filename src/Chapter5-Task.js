"use strict";
//Task1 Easy: Print the result of every arithmetic operator using 17 and 5.
const a = 17;
const b = 5;
console.log("====Task1====");
console.log("Addition - ", a + b);
console.log("Substraction  - ", a - b);
console.log("Multiplication - ", a * b);
console.log("Division - ", a / b);
console.log("Remainder - ", a % b);
console.log("power - ", a ** b);
//Task2 Easy: Predict and check:
console.log("====Task2====");
console.log("10" + 5); // 105
console.log(10 + 5 + "5"); //15 + "5"  //155    
//console.log("10" - 5);	      // i am getting an error on "10" 
console.log(Number("10") + 5); // 15
/*Task3 Easy: Find the result:
=== check the values and type no conversion
== convert the type before campare the value and type

7 === "7"                //false
7 == "7"	            // true
null === undefined    //false, bcs different types
"Bus" === "bus"	     //false, String are case sensitive
*/
//Task 4 Medium: Using % and ternary, print "Window seat" for odd seat numbers and "Aisle seat" for even numbers.
const seat1 = 3;
const seat2 = 4;
const output1 = seat1 % 2 !== 0 ? "Window seat" : "Aisle seat"; //3%2 !==0  // true
console.log("====Task4====");
console.log(output1); // Window seat
const output2 = seat2 % 2 !== 0 ? "Window seat" : "Aisle seat"; //4%2 !==0  // false
console.log(output2); // Aisle seat
//Medium: Write all six falsy values and check each one with if.
//falsy : false, 0, "", undefined, null, NaN
const value1 = false;
const value2 = 0;
const value3 = "";
const value4 = null;
const value5 = undefined;
const value6 = NaN;
console.log("====Task5====");
if (value1) {
    console.log("value1 is truthy");
}
else {
    console.log("value1 is falsy");
}
if (value2) {
    console.log("value2 is truthy");
}
else {
    console.log("value2 is falsy");
}
if (value3) {
    console.log("value3 is truthy");
}
else {
    console.log("value3 is falsy");
}
if (value4) {
    console.log("value4 is truthy");
}
else {
    console.log("value4 is falsy");
}
if (value5) {
    console.log("value5 is truthy");
}
else {
    console.log("value5 is falsy");
}
if (value6) {
    console.log("value6 is truthy");
}
else {
    console.log("value6 is falsy");
}
//Medium: Show why ?? is better than || when discount is 0.
//Suppose discount is 0.
const discount = 0;
console.log(discount || 5); //5 bcs (|| checks for a falsy values 0 is falsy then return 5) 
console.log(discount ?? 5); // 0 (?? use default when the value is null or undefined )
// ??it preserves the actul 0, so the customer has no discount.
//Hard: Build the ticket price calculator with 
//base fare, number of seats, senior-citizen discount, optional coupon, and 5% GST.
function CalculateTicketPrice(baseFare, seats, isSeniorCitizen, couponAmt) {
    const total = baseFare * seats;
    // calculate isSeniorCitizen (15% off)
    const seniorCitizenDiscount = isSeniorCitizen ? total * 15 / 100 : 0; // using ternary operator if the condition is true then calculate discount or else it return 0
    //calculate an optional coupon amount (may be null)
    const coupon = couponAmt ?? 0; //When coupon amt is zero then it default return the value as 0
    //calculate amount after discounts
    const amountAftDiscount = total - seniorCitizenDiscount - coupon;
    //5% GST on the amount after discounts
    const gst = amountAftDiscount * 5 / 100;
    // final amount
    const finalAmount = amountAftDiscount + gst;
    console.log("Base fare : ", baseFare);
    console.log("Number of seats : ", seats);
    console.log("Sub total : ", total);
    console.log("Senior citizen discount : ", seniorCitizenDiscount);
    console.log("Coupon: ", coupon);
    console.log(" amount after discount : ", amountAftDiscount);
    console.log(" gst: ", gst.toFixed(2));
    console.log(" Total Amount: ", finalAmount.toFixed(2));
}
//Test 1 
console.log("scenario 1 - senior citizen with coupon");
CalculateTicketPrice(1000, 2, true, 100);
//Test 2 
console.log("scenario 2 - not a senior citizen with no coupon");
CalculateTicketPrice(800, 3, false, null);
//Test 3 
console.log("scenario 3 - senior citizen with no coupon");
CalculateTicketPrice(1500, 1, true, 0);
