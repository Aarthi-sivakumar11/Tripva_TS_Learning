"use strict";
//Task 1. EASY Write a wait(ms) function that returns a promise. Use it to print "Step 1", "Step 2" and "Step 3" with one second between them.
{
    function wait(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    }
    async function main() {
        console.log("Step 1");
        await wait(1000); //1000 ms = 1 sec
        console.log("Step 2");
        await wait(1000);
        console.log("Step 3");
    }
    main();
}
//Task 2. EASY Write an async function getFare(route: string): Promise<number> that resolves with 650 after 500 ms. Call it from main() and print the result.
{
    function getFare(route) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(650);
            }, 500);
        });
    }
    async function main() {
        const fare = await getFare("Chennai-Bengaluru");
        console.log("Fare:", fare);
    }
    main();
}
//Task 3. MEDIUM Make getFare reject with an error when the route is an empty string. Handle the error with try...catch.
{
    function getFare(route) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (route.trim() === "") //if route is empty, then reject() throws Error
                 {
                    reject(new Error("Route cannot be empty")); //so stop the current fun, control immediately move to catch blocks 
                }
                else {
                    resolve(650);
                }
            }, 500);
        });
    }
    async function main() {
        try {
            const fare = await getFare(""); //route is an empty string
            console.log("Fare:", fare);
        }
        catch (error) {
            if (error instanceof Error) {
                console.log("Fare failed:", error.message);
            }
        }
    }
    main();
    //Task 4. MEDIUM Call getFare for three routes one after another, then all at the same time with Promise.all. Measure both with console.time and explain the difference.
    {
        function getFare(route) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(650);
                }, 500);
            });
        }
        async function main() {
            //Sequential - one after another
            console.time("sequential");
            const fare1 = await getFare("Chennai-Bengaluru"); // Wait 500 ms => fare1 = 650
            const fare2 = await getFare("Chennai-Madurai"); // Only after fare1 finishes this starts, wait another 500 ms => fare2 = 650
            const fare3 = await getFare("Chennai-Salem");
            console.timeEnd("sequential"); //Each takes about: 500 ms. so total is 1500 ms; 500+500+500= 1500ms
            //Parallel - all at the same time, the tasks don't depend on each other (it run parallely)
            console.time("parallel");
            const fares = await Promise.all([
                getFare("Chennai-Bengaluru"),
                getFare("Chennai-Madurai"),
                getFare("Chennai-Salem")
            ]);
            console.timeEnd("parallel"); //it takes 500 ms, all finish in 500 ms it done parallel
            //Sequential = wait for each task.
            //Promise.all = start independent tasks together and wait for all of them.
        }
    }
    //Task 5. MEDIUM Write code that shows the "missing await" bug and prints Promise { <pending> }. Then fix it.
    {
        async function getFare() {
            return 650;
        }
        async function main() {
            const fare = getFare(); //getFare() is async,   missing await (not wait for the value inside it).
            console.log(fare); //may get Promise { <pending> } the Promise has not finished yet
            const correctFare = await getFare(); //wait for the Promise and get the actual value.
            console.log(correctFare);
        }
        main();
    }
    //Task 6. HARD Write withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> using Promise.race, which rejects with "Timed out after X ms" if the promise is too slow. Test it with a fast and a slow promise.
    //withTimeout<T> = whatever type of value the original Promise gives me, keep that same type.
    {
        function withTimeout(promise, ms) {
            const timeout = new Promise((_, reject) => //timeout as a Promise that waits ms and then fails
             {
                setTimeout(() => //setTimeout does not reject the Promise immediately. It schedules the reject() to happen later.
                 {
                    reject(new Error(`Timed out after ${ms} ms`)); //Reject me later, after ms timeout promise
                }, ms);
            });
            return Promise.race([promise, timeout]); // Race the original Promise against the timeout Promise whichever finishes first wins. If promise finishes first SUCCESS, if timeout finishes first ERROR, here timeout finish frst so, it throws an Error, control immediately move to catch block
        }
        //Test it
        function wait(ms) {
            return new Promise(resolve => {
                setTimeout(resolve, ms);
            });
        }
        //Fast:
        async function main() {
            try {
                await withTimeout(wait(100), 500); //Wait for the withTimeout() Promise to finish. I will give Promise = 100 ms Timeout, a maximum of = 500 ms
                console.log("Fast promise completed"); //finishes in 100 ms, it wins.
            }
            catch (error) {
                console.log(error.message);
            }
        }
        main();
        //Slow:
        async function main1() {
            try {
                await withTimeout(wait(1000), 500); //Wait for the withTimeout() Promise to finish. the Promise takes 1000 ms, so the 500 ms timeout wins. 
                console.log("Completed");
            }
            catch (error) {
                console.log(error.message);
            }
        }
        main1();
    }
    //Task 7. HARD Use Promise.allSettled to check the seat count of 5 buses where 2 of them fail. Print a report: how many succeeded, how many failed, and the error message for each failure.
    //promise.allSettled = wait for all promises and gives the status of each one whether it success or failure
    {
        function fetchSeatCount(busId) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (busId <= 0) {
                        reject(new Error(`Invalid bus id: ${busId}`));
                    }
                    else {
                        resolve(32);
                    }
                }, 300);
            });
        }
        async function main() {
            const results = await Promise.allSettled([
                fetchSeatCount(101),
                fetchSeatCount(102),
                fetchSeatCount(-1), //fail
                fetchSeatCount(103),
                fetchSeatCount(-5) //fail
            ]);
            let successCount = 0;
            let failureCount = 0;
            for (const result of results) {
                if (result.status === "fulfilled") //tells whether the promise succeeded or failed
                 {
                    successCount++;
                    console.log("Success:", result.value); //Contains the successful result
                }
                else {
                    failureCount++;
                    console.log("Failed:", result.reason.message); //contains the error when rejected
                }
            }
            console.log("Total succeeded:", successCount);
            console.log("Total failed:", failureCount);
        }
        main();
    }
}
//Promise.all() = all must succeed, one failure would cause the whole operation to reject
//So: Promise.allSettled() = wait for all promises and gives the status of each one whether it success or failure
