//Task 1. EASY Write a generic function lastItem<T>(items: T[]): T | undefined. Test it with an array of seat numbers and an array of fares, and hover over the results in VS Code to see the inferred types
{
    function lastItem<T>(items: T[]): T | undefined {      //Generic function.
        return items[items.length - 1];
    }

    const seats = lastItem(["L1", "L2", "U3"]);    //T becomes: string
    const fares = lastItem([650, 720, 899]);       //T becomes: number

    console.log(seats);   //U3
    console.log(fares);    //899
}

//Task 2. EASY Write a generic function repeat<T>(value: T, times: number): T[] that returns an array with the value repeated. Example: repeat("L1", 3) returns ["L1", "L1", "L1"].

function repeat<T>(value: T, times: number): T[] {     //T - type of value
    const result: T[] = [];

    for (let i = 0; i < times; i++) {  //times - how many times
        result.push(value);
    }

    return result;
}

const seats = repeat("L1", 3);     //T string, repeat function return string[]
const numbers = repeat(5, 4);    //T number, repeat function return number[]

console.log(seats);        //[ 'L1', 'L1', 'L1' ]
console.log(numbers);    //[ 5, 5, 5, 5 ]



//Task 3. EASY Use a Set<string> to remove duplicate city names from ["Chennai", "Madurai", "Chennai", "Coimbatore", "Madurai"] and print the unique list.

const cities = [
    "Chennai",
    "Madurai",
    "Chennai",
    "Coimbatore",
    "Madurai"
];

const uniqueCities = new Set<string>(cities);     //Set removes duplicate values.
console.log([...uniqueCities]);     //...uniqueCities converts the set back into an array.


//Task 4. MEDIUM Create a generic interface ApiResponse<T> and use it to type a response containing a list of three Route objects (from, to, distanceKm). Print the longest route.

interface ApiResponse<T> {
    success: boolean;
    statusCode: number;
    data: T;
}

interface Route {
    from: string;
    to: string;
    distanceKm: number;
}

const response: ApiResponse<Route[]> = {
    success: true,
    statusCode: 200,
    data: [
        {
            from: "Chennai",
            to: "Bengaluru",
            distanceKm: 350
        },
        {
            from: "Chennai",
            to: "Madurai",
            distanceKm: 460
        },
        {
            from: "Chennai",
            to: "Coimbatore",
            distanceKm: 500
        }
    ]
};

const longestRoute = response.data.reduce((longest, current) =>
    current.distanceKm > longest.distanceKm ? current : longest);     // 460> 350 = true, so so current is returned. that returned object becomes the new longest for the next round.
console.log(longestRoute);


//Task 5. MEDIUM Write findById<T extends { id: number }>(items: T[], id: number): T | undefined and test it with buses and with users. Show that passing an array of strings gives a compile error

function findById<T extends { id: number }>(items: T[], id: number): T | undefined    //T must have an id property whose type is number.
{
    return items.find(item => item.id === id);
}

const buses = [
    {
        id: 101,
        operator: "Tripva Express"
    },
    {
        id: 102,
        operator: "Volvo suspension"
    }
];

const users = [
    {
        id: 1,
        name: "Priya"
    },
    {
        id: 2,
        name: "Arjun"
    }
];

const bus = findById(buses, 102);
const user = findById(users, 2);
console.log(bus);       //{ id: 102, operator: 'Volvo suspension' }
console.log(user);     //{ id: 2, name: 'Arjun' }

// const bad = findById(["A", "B"], 1);


//Task 6. MEDIUM Create a Map<string, number> of PNR to total fare for five bookings. Loop over it and print the total of all fares

const fares = new Map<string, number>();

fares.set("TRV1001", 650);   //in map has special in built methods, set() - add the value
fares.set("TRV1002", 750);
fares.set("TRV1003", 850);
fares.set("TRV1004", 899);
fares.set("TRV1005", 999);

let total = 0;

for (const [pnr, fare] of fares) {
    console.log(`${pnr} = Rs. ${fare}`);
    total += fare;
}

console.log(`Total fare = Rs. ${total}`);



//Task 7. HARD Write a generic class Queue<T> with methods enqueue(item), dequeue(): T | undefined, peek(), size() and isEmpty(). Use it to process a queue of TestCase objects (id, title) in order.

interface TestCase {
    id: string;
    title: string;
}

class Queue<T> {     //queue can work with any type. T means TestCase
    private items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item);       //add item
    }

    dequeue(): T | undefined {
        return this.items.shift();         //remove first item
    }

    peek(): T | undefined {
        return this.items[0];          //look at first item without removing
    }

    size(): number {
        return this.items.length;     //number of items
    }

    isEmpty(): boolean {
        return this.items.length === 0;     //true/false
    }
}

const queue = new Queue<TestCase>();

queue.enqueue({
    id: "TC001",
    title: "Login with valid credentials"
});

queue.enqueue({
    id: "TC002",
    title: "Login with invalid password"
});

queue.enqueue({
    id: "TC003",
    title: "Logout"
});

console.log(queue.size());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());


//Task 8. HARD Write groupBy<T, K extends keyof T>(items: T[], key: K): Map<T[K], T[]>. Use it to group a list of buses by operator and print how many buses each operator has.
{
    interface Bus {
        id: number;
        operator: string;
        fare: number;
    }


    function groupBy<T, K extends keyof T>(items: T[], key: K): Map<T[K], T[]>      //K must be one of the actual property names of T;  Return type of this function Map<T[K], T[], map stores the key value pair, Map<string, Bus[]> 
    {
        const result = new Map<T[K], T[]>();

        for (const item of items) {
            const value = item[key];   // Take the value from this object using this key; called: groupBy(buses, "operator")  becomes: item["operator"]

            const group = result.get(value) ?? [];   //result.get("Tripva Express") get() - Read, Does that group already exist? NO, so it return undefined, then undefined ?? [] gives []

            group.push(item);   //push() -we add the current bus to the group. group = [Bus 101]

            result.set(value, group); //We save the group into the Map. Tripva Express, [Bus 101]
        }

        return result;  //Tripva Express [Bus 101]
    }

    const buses: Bus[] = [
        {
            id: 101,
            operator: "Tripva Express",
            fare: 650
        },
        {
            id: 102,
            operator: "Volvo suspension",
            fare: 720
        },
        {
            id: 103,
            operator: "Tripva Express",
            fare: 700
        }
    ];

    const grouped = groupBy(buses, "operator");    //TypeScript understands: T = Bus

    for (const [operator, buses] of grouped) {
        console.log(`${operator}: ${buses.length} buses`);
    }
}
