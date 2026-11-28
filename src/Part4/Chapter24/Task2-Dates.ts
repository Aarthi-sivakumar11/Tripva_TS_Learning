//Task 2. EASY Write toDmy(date) and print today's date, tomorrow's date and the date 45 days from today in DD/MM/YYYY format.

function pad(n: number): string    //This function makes atleast 2 digit 
{
    return String(n).padStart(2, "0");
}


function toDmy(date: Date): string     //Format is date/month/year
{
    return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`;   //JS month starts from 0, Jan=0, Feb=1.....
}

function addDays(date: Date, days: number): Date 
{
    // Copy original date
    const result = new Date(date);    

    // Add required days
    result.setDate(result.getDate() + days);
    return result;
}

const today = new Date();               //Current date
const tomorrow = addDays(today, 1);     //add +1day
const fortyFiveDays =  addDays(today, 45);     //add+45days

console.log("Today:", toDmy(today));
console.log("Tomorrow:", toDmy(tomorrow));
console.log("45 days later:", toDmy(fortyFiveDays));

/*
Today: 28/11/2026
Tomorrow: 29/11/2026
45 days later: 12/01/2027
*/