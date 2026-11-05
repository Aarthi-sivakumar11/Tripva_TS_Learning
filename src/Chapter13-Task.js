"use strict";
//Task 1 Create a type alias BusType that allows only "SEATER", "SLEEPER" and "SEMI_SLEEPER".
//Try assigning "LUXURY" and note the error.
const bus1 = "SEATER";
const bus2 = "SLEEPER";
console.log(bus1);
console.log(bus2);
const operator1 = {
    name: "KPN",
    rating: 4.3,
    totalBuses: 120
};
const operator2 = {
    name: "SRS",
    rating: 4.5,
    totalBuses: 90,
    website: "www.tripva.in"
};
console.log(operator1.name, operator1.rating); //KPN, 4.3
console.log(operator2.name, operator2.website); //SRS, www.tripva.in
const customer = {
    id: 1,
    name: "Aarthi",
    email: "aarash@gmail.com",
    walletBalance: 1500
};
const admin = {
    id: 2,
    name: "Kumar",
    email: "kumar@gmail.com",
    permissions: ["viewBookings", "manageUsers"]
};
console.log(customer.name, customer.walletBalance);
console.log(admin.name, admin.permissions);
const booking = {
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
const buses = {
    Chennai: 120,
    Madurai: 45,
    Bengaluru: 80,
    Jaipur: 35,
    Trichy: 60
};
const busiestCity = Object.entries(buses).reduce((best, current) => current[1] > best[1] ? current : best //if the current city has more buses than the current best, it becomes the new best.
);
console.log("City:", busiestCity[0]);
console.log("Buses:", busiestCity[1]);
const request = {
    from: "Chennai",
    to: "Bengaluru",
    date: "2026-10-28",
    filters: {
        busTypes: ["SLEEPER"],
        maxPrice: 1000,
        departureAfter: "18:00"
    }
};
const response = {
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
const highlyRated = response.buses.filter(bus => bus.rating > 4); //keeps only buses whose rating is greater than 4
for (const bus of highlyRated) {
    console.log(bus.operator, bus.rating);
}
