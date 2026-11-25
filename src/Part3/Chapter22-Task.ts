//Task 1. EASY Create an interface Passenger with four properties. Create type PassengerKey = keyof Passenger and write a function printField(p: Passenger, key: PassengerKey).

interface Passenger {
    name: string;
    age: number;
    seat: string;
    pnr: string;
}

type PassengerKey = keyof Passenger;      //becomes: "name" | "age" | "seat" | "pnr"

function printField(p: Passenger, key: PassengerKey): void {
    console.log(`${key} = ${p[key]}`);
}

const p: Passenger = {
    name: "Priya",
    age: 28,
    seat: "L1",
    pnr: "TRV1234"
};

printField(p, "name");
printField(p, "seat");
printField(p, "pnr");


//Task 2. EASY Create const SEAT_TYPES = ["SLEEPER", "SEATER", "SEMI_SLEEPER"] as const and derive a SeatType union from it. Loop over the array and print each value

const SEAT_TYPES = ["SLEEPER", "SEATER", "SEMI_SLEEPER"] as const;

type seatType = (typeof SEAT_TYPES)[number];     //creates: "SLEEPER" | "SEATER" | "SEMI_SLEEPER" 

for (const seat of SEAT_TYPES) {
    console.log(seat);
}

const selected: seatType = "SLEEPER";
console.log(`Selected: ${selected}`);    //Selected: SLEEPER


//Task 3. EASY Using indexed access types, create a type for the status property and a type for one element of the seats array of a Booking interface.
{
    type BookingStatus = "PENDING" | "CONFIRMED" | "CANCELLED";

    interface Booking {
        pnr: string;
        seats: string[];
        fare: number;
        status: BookingStatus;
    }

    type StatusType = Booking["status"];

    type SeatType = Booking["seats"][number];

    const status: StatusType = "CONFIRMED";
    const seat: SeatType = "L1";

    console.log(status);
    console.log(seat);
}

//Task 4. MEDIUM Write a mapped type Nullable<T> that allows null for every property. Test it with a Bus interface.

interface Bus {
    busId: number;
    operator: string;
    fare: number;
}

type Nullable<T> = {
    [K in keyof T]: T[K] | null;
};

type NullableBus = Nullable<Bus>;

const bus: NullableBus = {
    busId: 101,
    operator: null,
    fare: 650
};
console.log(bus);


//Task 5. MEDIUM Create a template literal type SeatTestId for test ids like "seat-L1" to "seat-U4" (decks L and U, numbers 1 to 4). Show that "seat-X9" is an error.
type Deck = "L" | "U";
type SeatNumber = 1 | 2 | 3 | 4;

type SeatCode = `${Deck}${SeatNumber}`;

type SeatTestId = `seat-${SeatCode}`;

const id1: SeatTestId = "seat-L1";
const id2: SeatTestId = "seat-U4";

console.log(id1);
console.log(id2);

// const bad: SeatTestId = "seat-X9";    //invalid bcs X isn't L or U, 9 isn't 1,2,3,4


//Task 6. MEDIUM Write an assertion function assertIsString(value: unknown): asserts value is string and use it on a value read from JSON.parse.

function assertIsString(value: unknown): asserts value is string {

    // If value is NOT a string, throw an error.
    if (typeof value !== "string") {
        throw new Error("Value is not a string");
    }
}

const data: unknown = JSON.parse('"Trv1234"');    //parse the JSON string into a JavaScript object, it returns any type of data.

assertIsString(data);    //check at runtime that data is a string

console.log(data.toUpperCase());   //TRV1234


//Task 7. HARD Write a conditional type ApiData<T> that extracts D from { data: D } using infer, and returns never for other types. Test it with three different response types.

type ApiData<T> = T extends { data: infer D } ? D : never;   //If yes: capture D and return it,  if no:  return never.

//Response 1
interface BusResponse {
    status: number;
    data: {
        busId: number;
        operator: string;
    };
}

//Response 2
interface BookingResponse {
    status: number;
    data: {
        pnr: string;
        fare: number;
    };
}

//Response 3
interface ErrorResponse {
    status: number;
    message: string;
}

// Extract the data type from BusResponse.
type BusData = ApiData<BusResponse>;

// Extract the data type from BookingData
type BookingData = ApiData<BookingResponse>;

// Extract the data type from ErrorData
type ErrorData = ApiData<ErrorResponse>;        //ErrorResponse does NOT have a data property. Therefore the result is never.


//Task 8. HARD Create an environment config for dev, staging and prod using satisfies Record<Env, EnvConfig> and as const. Show that the exact URL literal type is kept, and that forgetting one environment is an error.

type Env = "dev" | "staging" | "prod";

interface EnvConfig {
    baseUrl: string;
    retries: number;
}

const config = {
    dev: {
        baseUrl: "http://localhost:3000",
        retries: 0
    },

    staging: {
        baseUrl: "https://staging.tripva.in",
        retries: 1
    },

    prod: {
        baseUrl: "https://www.tripva.in",
        retries: 2
    }
} as const satisfies Record<Env, EnvConfig>;    //create an object where every key in Env must exist, and every value must be an EnvConfig.

type ProdUrl = typeof config.prod.baseUrl;

console.log(config.prod.baseUrl);    //https://www.tripva.in