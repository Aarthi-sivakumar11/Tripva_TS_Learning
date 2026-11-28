//Task 6. MEDIUM Install Faker and generate a list of 10 passengers with name, age (between 5 and 80) and a random seat from ["L1", "L2", "U1", "U2"].

//Instead of creating every random value ourselves, we can use Faker
import {fakerEN_IN} from "@faker-js/faker"; 

const seats = ["L1", "L2", "U1", "U2"];

for (let i = 1; i <= 10; i++) 
{
    const passenger = {

        name:  fakerEN_IN.person.fullName(),   //indian name

        age: fakerEN_IN.number.int({ min: 5, max: 80 }),     //between 5 and 80

        seat: seats[ Math.floor(Math.random() * seats.length)]    //(rsndom generate a digital number btw 0 to 1) * 4, then Math.floor round the decimal number
    };

    console.log(passenger);
}