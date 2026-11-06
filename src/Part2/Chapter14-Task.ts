//Task 1Write a function that accepts string | number for a seat and always returns a string like "Seat 12".

function formatSeat(seat: string | number): string {   //Union allows different input types

    return `Seat ${seat}`;    //Template literals convert the value into a string inside the text.
}

console.log(formatSeat(12));
console.log(formatSeat("L12"));

//Task 2 Create a literal union type Gender and a function that prints a greeting prefix ("Mr.", "Ms." or "Mx.") for each.

type Gender = "MALE" | "FEMALE" | "OTHER";  //literal union type - fixed allowed values.
function getGreeting(gender: Gender): string {

    if (gender === "MALE") {   
        return "Mr.";
    }

    if (gender === "FEMALE") {
        return "Ms.";
    }

    return "Mx.";
}

console.log(getGreeting("MALE"));
console.log(getGreeting("FEMALE"));
console.log(getGreeting("OTHER"));


//Task 3. MEDIUM Create a discriminated union for notifications: SmsNotification (mobile, text), EmailNotification (email, subject, body) and PushNotification (deviceId, title). Write a function that prints a summary for each kind.

interface SmsNotification {
    kind: "sms";     //kind is common property for 3 objects, that kind tell which type of obj we are dealing  
    mobile: string;
    text: string;
}

interface EmailNotification {
    kind: "email";
    email: string;
    subject: string;
    body: string;
}

interface PushNotification {
    kind: "push";
    deviceId: string;
    title: string;
}
type appsNotification = SmsNotification | EmailNotification | PushNotification;

function printNotification(notification: appsNotification): void 
{
    if (notification.kind === "sms")
    {
        console.log(`SMS to ${notification.mobile}: ${notification.text}`);
    } 
    else if (notification.kind === "email") 
    {
        console.log(`Email to ${notification.email}: ${notification.subject}`);
    } 
    else 
    {
        console.log(`Push to ${notification.deviceId}: ${notification.title}`);
    }
}

const sms: SmsNotification = {
    kind: "sms",
    mobile: "9876543210",
    text: "Your ticket is confirmed"
};

const email: EmailNotification = {
    kind: "email",
    email: "qa@tripva.in",
    subject: "Booking Confirmation",
    body: "Your booking is successful"
};

const push: PushNotification = {
    kind: "push",
    deviceId: "DEVICE101",
    title: "Payment Successful"
};

printNotification(sms);
printNotification(email);
printNotification(push);


//Task 4 Add an exhaustive never check to your notification function. Add a new WhatsappNotification type and observe the error. Then handle it.
{
interface SmsNotification {
    kind: "sms";
    mobile: string;
    text: string;
}

interface EmailNotification {
    kind: "email";
    email: string;
    subject: string;
    body: string;
}

interface PushNotification {
    kind: "push";
    deviceId: string;
    title: string;
}

interface WhatsappNotification {
    kind: "whatsapp";
    mobile: string;
    message: string;
}

type appNotification = SmsNotification | EmailNotification | PushNotification | WhatsappNotification;

function printNotification(notification: appNotification): void 
{
    switch (notification.kind) {   //use switch to check the notification's kind.

        case "sms":
            console.log(`SMS: ${notification.text}`);
            break;

        case "email":
            console.log(`Email: ${notification.subject}`);
            break;

        case "push":
            console.log(`Push: ${notification.title}`);
            break;

        case "whatsapp":
            console.log(`WhatsApp: ${notification.message}`);
            break; 

        default: {
            const unhandled: never = notification;    //never checks that you have handled every possible option.
            throw new Error(`Unknown notification: ${unhandled}`);  //new notification type is added without a corresponding case, TypeScript gives an error at the never
        }
    }
}

printNotification({
    kind: "whatsapp",
    mobile: "9876543210",
    message: "Your ticket is confirmed"
});
}


//Task 5. HARD Write a type guard isBookingResponse(value: unknown): value is BookingResponse for { pnr: string; status: "CONFIRMED" | "PENDING" | "FAILED"; totalAmount: number }. Test it with four JSON strings: one valid and three invalid in different ways.
interface BookingResponse 
{
    pnr: string;
    status: "CONFIRMED" | "PENDING" | "FAILED";
    totalAmount: number;
}

function isBookingResponse(value: unknown): value is BookingResponse {  //is - type predicate, tells ts if function return true, then the value can safely treated as BookingResponse

    return (
        typeof value === "object" &&
        value !== null &&
        "pnr" in value &&
        typeof value.pnr === "string" &&
        "status" in value &&
        (
            value.status === "CONFIRMED" ||
            value.status === "PENDING" ||
            value.status === "FAILED"
        ) &&
        "totalAmount" in value &&
        typeof value.totalAmount === "number"
    );
}

const testData = [

    '{"pnr":"TRV101","status":"CONFIRMED","totalAmount":1200}',

    '{"pnr":123,"status":"CONFIRMED","totalAmount":1200}',   //PNR must be string

    '{"pnr":"TRV102","status":"SUCCESS","totalAmount":1200}',   //Invalid SUCCESS is not allowed

    '{"pnr":"TRV103","status":"PENDING","totalAmount":"1200"}'   //Amount must be number
];

for (const json of testData) {   //Loop through the test data.

    const data: unknown = JSON.parse(json);  //Each json string is converted into an object

    if (isBookingResponse(data)) {  //If the type guard returns true, print VALID.

        console.log("VALID:", data.pnr, data.status);

    } else {

        console.log("INVALID: Booking response is incorrect");
    }
}