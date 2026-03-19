// console.log(`Hello World!`);
// console.log(`I love burgirs`);

// window.alert(`Allerttt nigga`);
// window.alert(`Allerttt shala`);

// document.getElementById("myH1").textContent = `Hello`;
// document.getElementById("myP1").textContent = `I love pizza`;

// Variable Declaration let.
// let x = 12;
// console.log(x);

// let age = 23;
// console.log(`Your age is ${age}`);

// let fullName = "Sopan Nigga";
// let age = 69;
// let isStudent = true;

// document.getElementById("p1").textContent = `Fullname is: ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old.`;
// document.getElementById("p3").textContent = `You'r student status is ${isStudent}`;

// let students = 30;
// // students = students + 1;
// // students = students ** 2; // square
// students += 1;
// console.log(students);

// Getting user input
// let username;
// username = window.prompt(`Whats your username?`);
// console.log(username);

// let username;
// document.getElementById("mySubmit").onclick = function () {
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hey ${username}`;
//     console.log(`Username ${username} shown!`);
// }

// let age = window.prompt(`How old are you?`); //all window prompt are string values.
// age = Number(age);
// age += 1;
// console.log(age, typeof(age));

// let x = `Pizza`;
// let y = `Pizza`;
// let z = `Pizza`;

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

//CONST
const pi = 3.1416;
let radius;
let circum;

// radius = window.prompt(`Enter the radius of a circle`);
// radius = Number(radius);
// circum = 2*pi*radius;
// console.log(circum);

document.getElementById("calcButton").onclick = function() {
    radius = document.getElementById("radiusInput").value;
    radius = Number(radius);
    circum = 2*pi*radius;
    document.getElementById("ansCircum").textContent = `Radius is ${circum}`;
    console.log(`Output is ${circum}`);
}