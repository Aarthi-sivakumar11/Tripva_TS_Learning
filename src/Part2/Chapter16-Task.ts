//Task 1. EASY Create a class Route with from, to and distanceKm, and a method describe() that returns "Chennai to Madurai (460 km)".
export{}
{
class Route 
{
     from: string;
     to : string;
     distanceKm : number;

     constructor(from: string, to: string, distanceKm: number)
     {
          this.from = from;
          this.to = to;
          this.distanceKm = distanceKm;
     }

     describe() : string
     {
            return `${this.from} to ${this.to} (${this.distanceKm} km)`;
     }
}

const route1 = new Route("Chennai", "Madurai", 460);
console.log(route1.describe());    //call the method
}

//Task 2. EASY Rewrite your Route class using parameter properties.
{
class Route 
{
     constructor(          //TS automatically creates the properties & automatically assigns the values.
     public from: string,
     public to : string,
     public distanceKm : number
     ) {}

     describe(): string 
     {
        return `${this.from} to ${this.to} (${this.distanceKm} km)`;
     }
}

const route1 = new Route("Chennai", "Madurai", 460);       //constuctor rum automatically when obj is created
console.log(route1.describe());
}



//Task 3. MEDIUM Create a class SeatMap with a private array of booked seats, a method book(seat: string) that throws an error if the seat is already booked, and a method isBooked(seat: string): boolean.
class SeatMap
{
     private bookedSeats : string[] = [];    //empty array to store the booked seat number, we cannot directly modify it outside the class

     book(seat: string) : void 
     {  
         if (this.isBooked(seat))    //check whether the seat is already booked.
        {
            throw new Error(`Seat ${seat} is already booked`);      //If A1 is already booked and we try to book A1 again, it throws an error.
        }

         this.bookedSeats.push(seat);     //if the seat is not already booked, we add it to the array.
         console.log(`Seat ${seat} booked successfully`);
     }
      
     isBooked(seat: string): boolean 
     {
            return this.bookedSeats.includes(seat);     // if seat exist return true
     }
}

const seatMap = new SeatMap();
seatMap.book("A1");        //Seat A1 booked successfully
seatMap.book("A2");       //Seat A2 booked successfully
console.log(seatMap.isBooked("A1"));      //true
console.log(seatMap.isBooked("B1"));      //false


//Task 4. MEDIUM Create a class Coupon with a setter for discountPercent that only allows values from 0 to 50, and a getter label that returns text like "20% OFF".

class Coupon {
    private discountPercent = 0;    //it store the discount percentage

    set discount(value: number)   //it receives the discount value
    {
        if (value < 0 || value > 50) 
       {
            throw new Error("Discount must be between 0 and 50");
        }
        this.discountPercent = value;     //if the value is between 0 and 50, it stores it.
    }

    get label(): string 
    {
        return `${this.discountPercent}% OFF`;
    }
}

const coupon = new Coupon();
coupon.discount = 20;       //call the setter 
console.log(coupon.label);   // call the getter  //20% OFF
 

//Task 5. MEDIUM Create a BasePage with a url and an open() method. Create HomePage and MyBookingsPage that extend it and add one method each.

class BasePage 
{
    constructor(public url: string) {}

    open(): void 
    {
        console.log(`Opening ${this.url}`);
    }
}

class HomePage extends BasePage 
{
    constructor() 
    {
        super("https://tripva.in");       //sends the HomePage url to the parent constructor.
    }

    searchBuses(): void 
    {
        console.log("Searching buses");
    }
}

class MyBookingsPage extends BasePage 
{
    constructor() 
    {
        super("https://tripva.in/my-bookings");    //sends the MyBookingsPage url to the parent constructor.
    }
    

    viewBookings(): void 
    {
        console.log("Viewing my bookings");
    }
}

const home = new HomePage();
home.open();                 //Opening https://tripva.in
home.searchBuses();    //Searching buses

const bookings = new MyBookingsPage();
bookings.open();                    //Opening https://tripva.in/my-bookings
bookings.viewBookings();     //Viewing my bookings


//Task 6. HARD Create an abstract class Notification with an abstract method send(message: string): string. Create SmsNotification, EmailNotification and WhatsappNotification. Store one of each in an array of type Notification[] and send a message using a loop. Explain which OOP pillar this shows.

abstract class Notification 
{
    abstract send(message: string): string;     //every child class that it must have a send method
}

class SmsNotification extends Notification 
{
    send(message: string): string 
    { 
         return `SMS sent: ${message}`;
    }
}

class EmailNotification extends Notification 
{
    send(message: string): string 
    {
        return `Email sent: ${message}`;
    }
}

class WhatsappNotification extends Notification {

    send(message: string): string 
    {
        return `WhatsApp sent: ${message}`;
    }
}

// composition over inheritance, class contain obj of other classes
const notifications: Notification[] = [       //This array stores objects of the three child classes.
    new SmsNotification(),   
    new EmailNotification(),
    new WhatsappNotification()
];

for (const notification of notifications)     //The loop takes one notification object at a time.
{
    console.log(notification.send("Your ticket is confirmed"));   //all three objects have the same method name, but each performs a different action.
}

/*Which OOP pillar does this show?
Polymorphism because the same method name send() behaves differently in different classes.
SMS sends an SMS, Email sends an email, WhatsApp sends a WhatsApp message.
So this is Polymorphism. 
*/


//Task 7. HARD Build a TestRunSummary class that stores TestResult objects and has methods add(), passedCount(), failedCount(), passRate() (as a percentage) and slowestTest(). Test it with six results.

interface TestResult 
{
    name: string;
    passed: boolean;
    durationMs: number;
}

class TestRunSummary     // this class manages all test results.
{
    private results: TestResult[] = [];    //it create a empty array to store all test results   //Then when you do: summary.add(...) the test gets stored inside this array.

//means the array is intended to be used inside the class.You don't directly do: summary.results   
 
    add(result: TestResult): void         //Take one test result and put it into the results array.
    {
        this.results.push(result);          //Put this result into my results array.
    }

    passedCount(): number 
   {
        return this.results.filter(result => result.passed).length;
    }

    failedCount(): number 
   {
        return this.results.filter(result => !result.passed).length;
    }

    passRate(): number 
   {
        if (this.results.length === 0) 
        {
            return 0;
        }
        return (this.passedCount() / this.results.length) * 100;
    }

    slowestTest(): TestResult | undefined   
   { 
        if (this.results.length === 0)
        {
            return undefined;
        }

        let slowest = this.results[0];

        for (const current of this.results)
        {
            if (current.durationMs > slowest!.durationMs) 
            {
                slowest = current;
            } 
        }

        return slowest;
    }
}

const summary = new TestRunSummary();
summary.add({
    name: "Login Test",
    passed: true,
    durationMs: 1200
});

summary.add({
    name: "Search Bus Test",
    passed: true,
    durationMs: 2500
});

summary.add({
    name: "Seat Booking Test",
    passed: false,
    durationMs: 3200
});

summary.add({
    name: "Payment Test",
    passed: true,
    durationMs: 1800
});

summary.add({
    name: "Cancellation Test",
    passed: false,
    durationMs: 4000
});

summary.add({
    name: "Refund Test",
    passed: true,
    durationMs: 2200
});

console.log("Passed:", summary.passedCount());   
console.log("Failed:", summary.failedCount());
console.log("Pass Rate:", summary.passRate().toFixed(2) + "%");
console.log("Slowest Test:", summary.slowestTest());