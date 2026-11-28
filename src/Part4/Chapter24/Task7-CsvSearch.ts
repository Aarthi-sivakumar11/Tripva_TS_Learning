//Task 7. HARD Save a CSV file of 6 search test cases (from, to, daysAhead, expectedResult). Read it, convert daysAhead to a real date string with toYmd, and print one line per case


//Reader - it reads an already existing CSV file
import fs from "fs";

function pad(n: number): string 
{    
    return String(n).padStart(2, "0");    //number always has two digits.
}

//Convert a JS Date object into a string in YYYY-MM-DD format
function toYmd(date: Date): string 
{
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function addDays(date: Date, days: number): Date 
{
    const result = new Date(date);   //It creates a copy of the original date.
    result.setDate(result.getDate() + days);     //adds the given number of days to a date
    return result;
}

const lines = fs.readFileSync("search-tests.csv", "utf-8").trim().split(/\r?\n/);   //reads a CSV file and returns its contents as a string. Splits the text into rows

const headers = lines[0].split(",");   //first line of the CSV, splits it wherever there is a comma

for (const line of lines.slice(1))       // don't want the header row, i want only the six actual test cases
{
    const values = line.split(",");         //split the row

    const row = Object.fromEntries(headers.map((header, index) => [header, values[index]]));   //matches each header with its corresponding value

    const date = addDays(new Date(), Number(row.daysAhead));      //Number("1") converts the string into the number 1 Then: addDays(new Date(), 1) calculates tomorrow's date.

    console.log(
        `${row.from} → ${row.to} | ` +
        `${toYmd(date)} | ` +
        `${row.expectedResult}`
    );    //Chennai → Bengaluru | 2026-11-29 | Available
}