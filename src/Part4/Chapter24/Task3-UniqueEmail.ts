//Task 3. EASY Write a function that returns a unique email address each time it is called. Call it three times and print the results.

//generating a random email test data
function uniqueEmail(): string 
{
    return `qa.${Date.now()}.${Math.floor(Math.random() * 1000)}@test.tripva.in`;   //Date.now() returns the current time as number of miliseconds and Math.random() gives a decimal number from 0 to 1. Math.floor() removes the decimal part
}

for (let i = 0; i < 3; i++) 
{
  console.log(uniqueEmail());
}