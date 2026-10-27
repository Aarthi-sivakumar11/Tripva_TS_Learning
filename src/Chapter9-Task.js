"use strict";
//Task 1. EASY Create an array of five Tamil Nadu cities. Print the first, the last and the total count.
const cities = ["Chennai", "Madurai", "Trichy", "Tirunelveli", "Erode"];
console.log(cities[0]); // first
console.log(cities[cities.length - 1]); //Number of cities 5-1 = 4, cities[4] --> Erode
console.log(cities.length); //5
//Task 2 Add a city at the end and at the start, then remove the last one. Print the array after each step.
{
    const cities = ["Chennai", "Madurai", "Trichy", "Tirunelveli", "Erode"];
    cities.unshift("Coimbatore"); // add a element at beginning
    console.log(cities);
    cities.push("Trichy"); //add a element at last
    console.log(cities);
    cities.pop(); //remove from the end
    console.log(cities);
}
//Task 3. EASY Given [450, 1200, 650, 999], use map to add Rs. 25 convenience fee to each fare.
const fares = [450, 1200, 650, 999];
const updatedFares = fares.map(fare => fare + 25); //map creates a new array and visits every fare, applies the calculation
console.log(updatedFares);
//Task 4 Given an array of seat numbers ["A1", "A2", "B1", "B2", "C1"], use filter to keep only seats in row B, and some to check if seat "C1" exists.
const seatNumbers = ["A1", "A2", "B1", "B2", "C1"];
const ApplyFilter = seatNumbers.filter(seat => seat.startsWith("B")); //filter is create an array, keep only ele that match a condition
const hasC1 = seatNumbers.some(seat => seat === "C1"); //some checks whether at least one item matches.
console.log(ApplyFilter);
console.log(hasC1);
//Task 5. Use reduce to find the total of [650, 650, 720, 720], and then the average.
{
    const fares = [650, 650, 720, 720];
    //reduce combines all the values into one final value
    const total = fares.reduce((sum, fare) => sum = sum + fare, 0); // 0 is the starting value of sum.
    const average = total / fares.length;
    console.log(total);
    console.log(average);
}
//Task 6 Write code that checks if [399, 499, 499, 850] is sorted from low to high, without changing the original array.
{
    const fares = [399, 499, 499, 850];
    const expected = [...fares].sort((a, b) => a - b); //without changing the original array, sorted from low to high
    const isSorted = fares.every((fare, index) => fare === expected[index]); //it checks each original value matches the value at the same index in the sorted copy.
}
//Task 7 You have const durations = ["6h 20m", "5h 45m", "7h 5m"]. 
//Convert each to total minutes using map and string methods, find the fastest bus, and print the list sorted from fastest to slowest.
const durations = ["6h 20m", "5h 45m", "7h 5m"];
const buses = durations.map(duration => {
    const parts = duration.split(" "); //separates the text into ["6h", "20m"]
    const hours = Number(parts[0].replace("h", "")); // remove h
    const min = Number(parts[1].replace("m", "")); // remove m
    return {
        duration,
        totalMinutes: hours * 60 + min
    };
});
//find the fastest bus
const fastest = buses.reduce((fast, bus) => bus.totalMinutes < fast.totalMinutes ? bus : fast);
//print the list sorted from fastest to slowest.
const sortedBuses = buses.toSorted((a, b) => a.totalMinutes - b.totalMinutes); //toSorted() returns a sorted copy, leaving the original array unchanged.
console.log(sortedBuses.map(bus => bus.duration));
console.log("Fastest:", fastest.duration);
//Task 8. HARD Create a 2D seat layout for 5 rows with 4 seats each. Mark 6 random seats as booked ("X").
//Print the layout row by row and count how many seats are free.
const seatLayout = [
    ["X", "A2", "A3", "A4"],
    ["X", "X", "B3", "B4"],
    ["C1", "C2", "X", "C4"],
    ["D1", "D2", "D3", "X"],
    ["E1", "E2", "E3", "E4"]
];
let freeSeats = 0;
for (const row of seatLayout) //visit every row
 {
    console.log(row.join(" ")); //prints the seats in one row with spaces
    for (const seat of row) // checks every seat in that row
     {
        if (seat !== "X") //checks whether the seat is not booked
         {
            freeSeats++;
        }
    }
}
console.log("Free seats:", freeSeats);
