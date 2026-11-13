console.log("**** TASK 1 ****");
import { add, subtract, percentOf } from "./utils/math-utils";

console.log("Add:", add(10, 5));
console.log("Subtract:", subtract(10, 5));
console.log("10% of 200:", percentOf(200, 10));



console.log("**** TASK 2 ****");
import type { Bus } from "./types/bus"; //Bus is only a type. It isn't an actual value at runtime.
const bus1: Bus = {
    operator: "Tripva",
    route: "Chennai-Bengaluru",
    fare: 650
};

const bus2: Bus = {
    operator: "Express",
    route: "Chennai-Madurai",
    fare: 550
};

console.log(bus1);
console.log(bus2);


console.log("**** TASK 3 ****");
import Logger from "./logger";
import MyLogger from "./logger";    //can have any name, both refer to the same default export

const logger1 = new Logger();
const logger2 = new MyLogger();

logger1.info("Test started");
logger2.error("Login failed");

/*
why this can be confusing in a big team ? 
might think MyLogger is a different class. That's why default exports can sometimes create naming confusion
A big team could use different names for the same class
*/

console.log("**** TASK 5 ****");
import {LoginPage, SearchPage,PaymentPage} from "./pages/index";    //instead of writing 3 import lines, we use barrel

const login = new LoginPage();
const search = new SearchPage();
const payment = new PaymentPage();

login.login();
search.search();
payment.pay();