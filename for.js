var count;

 console.log("Starting loop" + "<br/>");

for (count = 0; count < 10; count++) {
    console.log("Current count: " + count);
     console.log("<br/>");
}

 console.log("Loop stopped!<br/><br>");


const person = {
    fname: "ajay",
    lname: "singh",
    age: 25
};

let x;

for (x in person) {
    console.log("Person details: " + x + " : " + person[x]);
}