//Task 1 Create a type alias BusType that allows only "SEATER", "SLEEPER" and "SEMI_SLEEPER".
//Try assigning "LUXURY" and note the error.

type BusType = "SEATER" | "SLEEPER" | "SEMI_SLEEPER" ;    // Union, it list the allowed values

const bus1: BusType = "SEATER";
const bus2: BusType = "SLEEPER";
console.log(bus1);
console.log(bus2);
 
// const bus3: BusType = "LUXURY";  // TypeScript error: LUXURY is not an allowed value.


//Task 2 Create an interface Operator with name, rating, total buses and an optional website. Create two objects using it.

interface Operator {
    name: string;
    rating: number;
    totalBuses: number;
    website?: string;
}

const operator1: Operator = {
    name: "KPN",
    rating: 4.3,
    totalBuses: 120
};

const operator2: Operator = {
    name: "SRS",
    rating: 4.5,
    totalBuses: 90,
    website: "www.tripva.in"
};

console.log(operator1.name, operator1.rating);        //KPN, 4.3
console.log(operator2.name, operator2.website);    //SRS, www.tripva.in
 

//Task 3 Create a base interface User (id, name, email) and extend it into Customer(walletBalance) and Admin (permissions: string[]). Create one object of each.

interface User {
    id: number;
    name: string;
    email: string;
}

interface Customer extends User {
    walletBalance: number;
}

interface Admin extends User {
    permissions: string[];
}

const customer: Customer = {     //Customer extends User, so it needs id, name and email.
    id: 1,
    name: "Aarthi",
    email: "aarash@gmail.com",
    walletBalance: 1500
};

const admin: Admin = {
    id: 2,
    name: "Kumar",
    email: "kumar@gmail.com",
    permissions: ["viewBookings", "manageUsers"]
};

console.log(customer.name, customer.walletBalance);
console.log(admin.name, admin.permissions);


//Task 4. MEDIUM Create type Timestamps and type Audit and combine them with & into AuditedBooking.

type Timestamps = {
    createdAt: Date;
    updatedAt: Date;
};

type Audit = {
    createdBy: string;
    updatedBy: string;
};

type AuditedBooking = Timestamps & Audit & {    //AuditedBooking combines both using &.
    pnr: string;
    amount: number;
};
 
const booking: AuditedBooking = {     //The booking object contains all required properties
    createdAt: new Date("2026-10-01"),
    updatedAt: new Date("2026-10-02"),
    createdBy: "QA",
    updatedBy: "Admin",
    pnr: "TRV501",
    amount: 1200
};

console.log(booking.pnr);
console.log(booking.amount);
console.log(booking.createdBy);

//Task 5 Use Record<string, number> to store the number of buses per city for five cities. Print the city with the most buses.

const buses: Record<string, number> = {
    Chennai: 120,
    Madurai: 45,
    Bengaluru: 80,
    Jaipur: 35,
    Trichy: 60
};

const busiestCity = Object.entries(buses).reduce(
    (best, current) => current[1] > best[1] ? current : best     //if the current city has more buses than the current best, it becomes the new best.
);

console.log("City:", busiestCity[0]);
console.log("Buses:", busiestCity[1]);

//Task 6. HARD Design interfaces for the Tripva search API: SearchRequest (from, to, date, optional filters object with busTypes array, maxPrice and departureAfter), and SearchResponse (total count and an array of BusResult with id, operator, departure, arrival, fare, seatsLeft and rating). Create a
//sample response with 4 buses and print the ones with rating above 4.

interface SearchRequest {
    from: string;
    to: string;
    date: string;

    filters?: {
        busTypes?: string[];
        maxPrice?: number;
        departureAfter?: string;
    };
}

interface BusResult {
    id: number;
    operator: string;
    departure: string;
    arrival: string;
    fare: number;
    seatsLeft: number;
    rating: number;
}

interface SearchResponse {
    totalCount: number;
    buses: BusResult[];
}

const request: SearchRequest = {
    from: "Chennai",
    to: "Bengaluru",
    date: "2026-10-28",

    filters: {
        busTypes: ["SLEEPER"],
        maxPrice: 1000,
        departureAfter: "18:00"
    }
};

const response: SearchResponse = {
    totalCount: 4,

    buses: [
        {
            id: 1,
            operator: "KPN",
            departure: "20:00",
            arrival: "05:00",
            fare: 850,
            seatsLeft: 7,
            rating: 4.9
        },
        {
            id: 2,
            operator: "SRS",
            departure: "21:00",
            arrival: "06:00",
            fare: 900,
            seatsLeft: 8,
            rating: 3.8
        },
        {
            id: 3,
            operator: "Testing-tpr",
            departure: "22:00",
            arrival: "07:00",
            fare: 750,
            seatsLeft: 15,
            rating: 4.5
        },
        {
            id: 4,
            operator: "ABC",
            departure: "19:30",
            arrival: "04:30",
            fare: 950,
            seatsLeft: 5,
            rating: 4.1
        }
    ]
};

console.log("Route:", request.from, "to", request.to);
console.log("Total buses:", response.totalCount);

const highlyRated = response.buses.filter(bus => bus.rating > 4);    //keeps only buses whose rating is greater than 4
for (const bus of highlyRated) {
    console.log(bus.operator, bus.rating);
}