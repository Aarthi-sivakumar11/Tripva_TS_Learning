//Task 1. EASY Create one variable of each type: string, number, boolean, null and undefined. Print each value and its typeof.
{
let name: String =  "Aarthi S";
let age : number = 21;
let isTester : boolean = true;
let anyBlockerFaced : null = null;
let minorDefect : undefined = undefined;

console.log(name, typeof name);
console.log(age, typeof age);
console.log(isTester, typeof isTester);
console.log(anyBlockerFaced, typeof anyBlockerFaced);
console.log(minorDefect, typeof minorDefect);
}

//Task 2. EASY Write the output of typeof for: "42", 42, false, null, [ ], undefined. Check your answers by running the code.

console.log(typeof "42");     // String
console.log(typeof 42);       // number
console.log(typeof false);    // boolean
console.log(typeof null);     //object     // old JavaScript bug that can never be fixed.
console.log(typeof []);       // object  ()
console.log(typeof undefined);  //undefined



//Task 3. EASY Convert the string "45" into a number in three different ways.
//1 Way -- parseInt()
let value1 = parseInt("45");
console.log(value1);            //45
console.log(typeof value1);    //number

//2 Way -- Number()
let value2 = Number("45");
console.log(value2);            //45
console.log(typeof value2);    //number

//3 Way -- unary 
let value3 = +"45";
console.log(value3);            //45
console.log(typeof value3);    //number


//Task 4. MEDIUM A page shows the text "Total: Rs. 2,450.50". Write code that converts it into the number 2450.5 and prints double the value.

const text : String = "Total: Rs. 2,450.50";
console.log("Actual text: ", text);

const onlyNumber : string = text.replace("Total: Rs.", "").replace(",", "");   // 2450.50
const amount = Number(onlyNumber);   //2450.50
console.log("amount ", amount);
console.log("double the value ",amount*2);


//Task 5. MEDIUM Explain with code why any is dangerous and how unknown solves the problem.

let seatNumber : any = 10;
seatNumber = "A12";
seatNumber = false;   
seatNumber = 87654323456776543n;
console.log(seatNumber);   // Everything is allowed because, i declare as any type.
//console.log(seatNumber.toUppercase());   it is an runtime error bcs a bigint doesn't have toUppercase()  

//unknown also accept any value but it a safe, why means unknown - first check the type before using the value
// We can check the type by using typeof, here typeof means find the type of value

let value : unknown = "hello";
if(typeof value == "string")   
{
    console.log(value.toUpperCase());    //HELLO
}


//Task 6. MEDIUM Write code that shows the 0.1 + 0.2 problem, and then fix the comparison so that it prints true.
let result = 0.1 + 0.2;
console.log(result);        //0.300000000000004
console.log(result==0.3);   //false it cannot represent some decimal points exactly 

console.log(result.toFixed(1)=="0.3");  //frst round the result then compare 



//Task 7. HARD You receive seat counts from three pages as "12", "twelve" and "". 
// Write code that converts each one, prints whether it is a valid number using Number.isNaN, and explains in a comment why the empty string needs extra care.

let seat1 = "12";
let seat2 = "twelve";
let seat3 = "";

let number1 = Number(seat1);    //12
let number2 = Number(seat2);    //NaN
let number3 = Number(seat3);    //0 empty string became 0

console.log(number1, !Number.isNaN(number1));    //12 true
console.log(number2, !Number.isNaN(number2));    //NAN false
console.log(number3, !Number.isNaN(number3));    //0 true

