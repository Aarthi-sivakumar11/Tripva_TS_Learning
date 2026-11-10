//Task 1. EASY Create a string enum BusType with Seater, Sleeper and SemiSleeper. Print each value.
enum BusType 
{ 
   Seater = "SEATER",      //String enum assign the text values to enum member
   Sleeper = "SLEEPER",
   SemiSleeper = "SEMI_SLEEPER"
}

console.log(BusType.Seater);
console.log(BusType.Sleeper);
console.log(BusType.SemiSleeper);


//Task 2. EASY Create a numeric enum Priority starting at 1. Print the value of each member and use reverse lookup to print the name of 2.

enum Priority 
{
    Low = 1,
    Medium,    //automatically gets 2
    High, 
}

console.log(Priority.Low);    //1
console.log(Priority.Medium);   //2
console.log(Priority.High);   //3

console.log(Priority[2]);    //Medium - Reverse lookup (it convert the number 2 back into iy enum member name)


//Task 3. MEDIUM Create an enum HttpStatus and a function describeStatus(code: HttpStatus): string using a switch.
enum HttpStatus {
 OK = 200,
 Created = 201,
 BadRequest = 400,
 Unauthorized = 401,
 NotFound = 404,
 ServerError = 500,
}

function describeStatus(code: HttpStatus): string    //the function receives status code
{
     switch(code) {    //It checks the value of code
     case HttpStatus.OK:
            return "Success";

     case HttpStatus.Created:
            return "Resource created";

     case HttpStatus.BadRequest:
            return "Bad request";

     case HttpStatus.Unauthorized:
            return "Unauthorized";

     case HttpStatus.NotFound:
            return "Resource not found";

      case HttpStatus.ServerError:
            return "Internal server error";

      default:
            return "Unknown status";
    }
}

console.log(describeStatus(HttpStatus.OK));    //"Success" => HttpStatus.OK = 200, the function receives code = 200
console.log(describeStatus(HttpStatus.NotFound));    //"Resource not found"
console.log(describeStatus(HttpStatus.ServerError));    //"Internal server error"


//Task 4. MEDIUM Loop over a string enum of five cities and print a search URL for each, like https://tripva.in/search?to=MADURAI.

enum City {
    Chennai = "CHENNAI",
    Bengaluru = "BENGALURU",
    Madurai = "MADURAI",
    Coimbatore = "COIMBATORE",
    Salem = "SALEM",
}

for (const city of Object.values(City))    //this collects all the enum value one by one
{
    console.log(`https://tripva.in/search?to=${city}`);
}


//Task 5. HARD Rewrite the BookingStatus enum as a union type and as an as const object. Write the same isFinal function for all three versions and explain which version you would choose and why.

//Version 1 – Enum
enum BookingStatusEnum 
{
    Pending = "PENDING",
    Confirmed = "CONFIRMED",
    Cancelled = "CANCELLED"
}

function isFinalEnum(status: BookingStatusEnum): boolean  //fuction return true or false
{
    return (
        status === BookingStatusEnum.Confirmed ||
        status === BookingStatusEnum.Cancelled
    );
}

console.log(isFinalEnum(BookingStatusEnum.Pending));        //false
console.log(isFinalEnum(BookingStatusEnum.Confirmed));    //true
console.log(isFinalEnum(BookingStatusEnum.Cancelled));    //true


//Version 2 – Union Type 
type BookingStatusUnion =   
    "PENDING" |
    "CONFIRMED" |
    "CANCELLED";

function isFinalUnion(status: BookingStatusUnion): boolean 
{
    return (
        status === "CONFIRMED" ||       //check whether the status is confrmed or cancelled
        status === "CANCELLED"
    );
}
console.log(isFinalUnion("PENDING"));    //false
console.log(isFinalUnion("CONFIRMED"));


//Version 3 – as const Object
const BookingStatus = 
{
    Pending: "PENDING",
    Confirmed: "CONFIRMED",
    Cancelled: "CANCELLED"
} as const;       //makes the values readonly, don't make them general strings.

type BookingStatusType = (typeof BookingStatus) [keyof typeof BookingStatus];      

// typeof BookingStatus - get the type of the BookingStatus object
//keyof typeof BookingStatus - to get its property names and use those keys to get their values.

function isFinalObject(status: BookingStatusType): boolean 
{
    return (
        status === BookingStatus.Confirmed ||
        status === BookingStatus.Cancelled
    );
}

console.log(isFinalObject(BookingStatus.Pending));    //false
console.log(isFinalObject(BookingStatus.Confirmed));    //true

/*
Which one should i choose?
I would usually choose the union type if I only need the allowed values for type checking.
union type for simple fixed values because it is easy and creates no extra JavaScript enum code.
A union type exists only for TS type checking. It doesn't create an object in the JavaScript output.

enum is useful when I specifically want a named enum structure
I would choose as const when i want an object containing named values and exact literal types.
*/