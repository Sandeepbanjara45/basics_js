//if
// const temp = 41;
// if (temp === 41) {
//     console.log("match your temp");
// }
// else{
//     console.log("greater than 41");
// }
// console.log("Execute");

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200;
// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

//short hand notetion
//const balance = 1000;
// if (balance > 500) console.log("tes"),console.log("test 2");nhi krna h

// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750) {
//     console.log("less than 750");
// }
// else if (balance < 900) {
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }

const userLoggedIn= true;
const debitCart = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCart && 2==3) {
    console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail ) {
    console.log("User logged in");
}