//for..of loop practice
const seats = ["booked", "free", "booked"];

for (let i = 0; i < seats.length; i++) {
    if (seats[i] === "booked") continue;
    console.log(i);    //free
}

//break condition practice
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);    //1,2
}

//for...of with entries()
const fruits = ["Apple", "Mango", "Orange"];

for (const [index, fruit] of fruits.entries()) {
    console.log(index + 1, fruit);          //1 Apple, 2 Mango, 3 Orange
}



//Task 1 Question: Print numbers 1 to 20 using a for loop, then print only the even numbers using continue.

//Print numbers 1 to 20 using a for loop
console.log("Number from 1 to 20: ");
for(let i = 1; i<=20; i++)
{
console.log(i);
};


//then print only the even numbers using continue.
for(let i = 1; i<=20; i++)
{
if(i%2 !==0) continue;       //if the condition is true, then continue executed and skip the current iteration
console.log(i);            //2,4,6,8,10,12,14,16,18,20
}


//Task 2  Multiplication table of 7 from 7 x 1 = 7 to 7 x 10 = 70.

console.log("Task 2");
console.log("Multiplication table of 7");

for(let i = 1; i<=10; i++)
{
console.log(`7 * ${i} = ${7*i}`);    //7*1=7.....
}


//Task 3  Use for...of to print each city in ["Pune", "Nagpur", "Nashik"] with its position number.

const cities = ["Pune", "Nagpur", "Nashik"];

for(const [index, city] of cities.entries())      //pune of  0 pune 
{
console.log(`${index+1} ${city}`);
}




//Task 4 calculate the sum of all numbers from 1 to 100 using a while loop.
let number = 1;
let sum = 0;

while(number <= 100)
{
sum = sum + number;   //0+1=1, 1+2=3, 3+3=6...
number++;    //The loop stops when number becomes 101.
}

console.log("Sum = ", sum);



//Task 5 Print a seat map for rows A to F with four seats each. Show XX for booked seats B2, D4 and F1
const rows = ["A", "B","C", "D", "E", "F"];      //bus has 6 rows
const seatsPerRow = 4;   //each row has 4 seats.

for(const row of rows)
{
    let seatRow = "";
    for (let n = 1; n<=seatsPerRow; n++)
    {
        if((row==="B" && n===2) || (row==="D" && n===4) || (row==="F" && n===1))
        {
            seatRow += "XX  ";
        }
        else
        { 
            seatRow += `${row}${n}  `;
         }
    }
  console.log(seatRow);
}



//Task 6 Given const fares = [499, 1299, 850, 399, 999], find the cheapest and most expensive fare using one loop, without built-in sorting or Math functions.

const fares = [499, 1299, 850, 399, 999];

let cheapestFare = fares[0]!;    //499
let expensiveFare = fares[0]!;   //499

for (const fare of fares) {
    if (fare < cheapestFare) {
        cheapestFare = fare;     //If a smaller fare is found, update cheapest.
    }

    if (fare > expensiveFare) {
        expensiveFare = fare;    //If a larger fare is found, update mostExpensive.
    }
}
console.log("Cheapest fare = ", cheapestFare);
console.log("Most expensive fare = ", expensiveFare);


//Task 7 Retry the booking confirmation. Each check has a 30% chance of success. 
// Use Math.random(), try up to five times, print each attempt, and print the total number of attempts used.

const Max_ATTEMPTS = 5;

let bookingConfirmation = false;
let attemptsUsed = 0;

for (let attempt = 1; attempt <= Max_ATTEMPTS; attempt++) {
    attemptsUsed = attempt;
    
    const randomResult = Math.random();    //Math.random() generates a random decimal number from 0 to 1
    console.log(`Attempt ${attempt}: checking booking..`);

    if (randomResult < 0.3) {
        bookingConfirmation = true;
        console.log("Booking confirmed");
        break;
    }
    console.log("Booking not confirmed. pls try again..");
}

console.log(`Total attempts used: ${attemptsUsed}`);

if (!bookingConfirmation) { 
    console.log(`Booking confirmation failed after ${Max_ATTEMPTS} attempts`);
}