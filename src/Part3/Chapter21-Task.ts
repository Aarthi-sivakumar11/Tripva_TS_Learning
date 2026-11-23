//Task 1. EASY Create an interface Route with id, from, to, distanceKm and isActive. Create a type RouteUpdate using Partial, and write a function that prints the fields being updated.
{
interface Route {
  id: number;
  from: string;
  to: string;
  distanceKm: number;
  isActive: boolean;
}

type RouteUpdate = Partial<Route>;

function printUpdates(update: RouteUpdate): void {
  for (const [key, value] of Object.entries(update)) {
    console.log(`${key} = ${value}`);
  }
}

const update: RouteUpdate = {
  distanceKm: 400,
  isActive: false
};

printUpdates(update);
}

//Task 2. EASY Using Pick, create a type RouteLabel with only from and to. Using Omit, create NewRoute without id.
{
interface Route {
  id: number;
  from: string;
  to: string;
  distanceKm: number;
}

type RouteLabel = Pick<Route, "from" | "to">;   //keep from + to

type NewRoute = Omit<Route, "id">;   //remove id

const label: RouteLabel = {
  from: "Chennai",
  to: "Bengaluru"
};

const newRoute: NewRoute = {
  from: "Chennai",
  to: "Madurai",
  distanceKm: 460
};

console.log(label);
console.log(newRoute);
}


//Task 3. EASY Create a Record<"dev" | "staging" | "prod", number> of timeouts. Remove one key and read the error message.
type Environment = "dev" | "staging" | "prod";

const timeouts: Record<Environment, number> = {
  dev: 1000,
  staging: 3000,
  prod: 5000
};
console.log(timeouts);

//If i remove: prod: 5000, typeScript gives an error bcs every key is required


//Task 4. MEDIUM Given type Seat = "L1" | "L2" | "U1" | "U2" | "SL1", use Extract to get only the lower seats and Exclude to remove the sleeper seat "SL1".

type Seat = "L1" | "L2" | "U1" | "U2" | "SL1";
 
type LowerSeats = Extract<Seat, "L1" | "L2">;     // Extract keeps L1, L2

type WithoutSleeper = Exclude<Seat, "SL1">;    // remove the sleeper seat

const lower: LowerSeats = "L1";

const normal: WithoutSleeper = "U2";

console.log(lower);   
console.log(normal);



//Task 5. MEDIUM Write a function calculateFare(base: number, gstRate: number, discount: number). Use Parameters to create a type for its arguments and run it for four data sets in a loop

function calculateFare(base: number, gstRate: number, discount: number): number {   

    const gst = base * (gstRate / 100);   //calculate gst amount

    const fareWithGst = base + gst;      //add gst to the base fare

    const finalFare = fareWithGst - discount;    //subtract discount from the fare

    return finalFare;    //return the final calculated fare
}


type FareArgs = Parameters<typeof calculateFare>;    // gets the parameter types of calculateFare.
const testData: FareArgs[] = [       // each inner array represents: base, gstRate, discount
    [500, 5, 20],
    [800, 10, 50],
    [1000, 18, 100],
    [650, 5, 0]
];

for (const data of testData) {       // loop through all four data sets

    // data[0] → base
    // data[1] → gstRate
    // data[2] → discount
    const fare = calculateFare(...data);

    console.log(`Final fare: Rs. ${fare}`);
}

//Task 6. MEDIUM Make a shared testConfig object Readonly. Try to change a value, read the error, and write in a comment why this protects tests.

const testConfig: Readonly<{
  baseUrl: string;
  timeout: number;
}> = {
  baseUrl: "https://staging.tripva.in",
  timeout: 30000
};

console.log(testConfig.baseUrl);

/* Try to change the value 
 testConfig.timeout = 5000;        //compile error cannot assign to timeout bcs it is a read-only property

Imagine 50 tests use testConfig, if Test one changes timeout = 5000 then another test may unexpectedly use 5000
Readonly prevents accidental changes and the reason it protects tests is shared configuration cannot accidentally be changed by one test and affect other tests.
*/


//Task 7. HARD Write a test-data factory buildPassenger(overrides: Partial<Passenger> = {}) for Passenger (name, age, gender, seat, idProof?). Create five passengers: a default one, a senior citizen (age 65), a child (age 5), one with an id proof and one in seat "U4".

interface Passenger {
  name: string;
  age: number;
  gender: string;
  seat: string;
  idProof?: string;     //optional property
}

//Test-data factory
function buildPassenger(overrides: Partial<Passenger> = {}): Passenger {   //Partial<Passenger> means we can provide only the fields that we want to change.
  return {
    name: "Test Passenger",
    age: 30,
    gender: "Female",
    seat: "L1",
    ...overrides                //replaces only the values supplied by the test
  };
}

// 1. Create a default passenger
const p1 = buildPassenger();

// 2. Create a senior citizen
const p2 = buildPassenger({
  name: "Senior Passenger",
  age: 65
});

// 3. Create a child
const p3 = buildPassenger({
  name: "Child",
  age: 5
});

// 4. Create a passenger with ID proof
const p4 = buildPassenger({
  name: "Aarthi",
  idProof: "Aadhar123"
});

// 5. Create a passenger in seat U4
const p5 = buildPassenger({
  name: "Arjun",
  seat: "U4"
});

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(p5);


//Task 8. HARD Create the type UpdateBookingRequest where pnr is required and every other field of Booking except userId is optional. Write two valid objects and one invalid object, and explain the error.

type BookingStatus = "PENDING" | "CONFIRMED" | "CANCELLED";

interface Booking {
  pnr: string;
  userId: string;
  route: string;
  seats: string[];
  fare: number;
  status: BookingStatus;
  couponCode?: string;
}

type UpdateBookingRequest = Pick<Booking, "pnr"> & Partial<Omit<Booking, "pnr" | "userId">>;   //pnr is required and every other field of Booking except userId is optional.

const update1: UpdateBookingRequest = {
  pnr: "TRV1234",
  fare: 700
};

const update2: UpdateBookingRequest = {
  pnr: "TRV1235",
  status: "CANCELLED",
  couponCode: "SAVE100"
};

/*
const invalid: UpdateBookingRequest = { route: "Chennai-Bengaluru" };  
why invalid bcs pnr = required, but here invalid object doesn't contain pnr.
*/