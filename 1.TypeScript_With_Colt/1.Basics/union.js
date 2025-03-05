"use strict";
/**
 * @Union_Type
 */
// cordinate type should be Point or Loc
let cordinate = { x: 10, y: 4 };
cordinate = { lat: 67.43, long: 322.76 };
// price type should be number or string
function calculateTax(price, tax) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}
// console.log(calculateTax("230$", 0.5));
// This array holds string and number values at a time, and the parentheses are very important
let numStrArr = [1, 2, "one", "two"];
// And this is a different type of array; it can hold only an array of numbers or only an array of strings. At the same time, it couldn't hold string and number values.
let onlyStrOrNum = [1, 2];
onlyStrOrNum = ["one", "two"];
/**
 * @Exercise_1
 * Create a variable called highScore that can be a number OR a boolean
 *
 */
let highScore = 2;
highScore = true;
/**
 * @Exercise_2
 * create an array called stuff.
 * It can be an array of numbers OR an array of strings.
 * It cannot be an array of numbers and strings (mixed together)
 *
 */
let stuff = [1, 2, 3];
stuff = ["one", "two", "three"];
let colors = [
    { r: 23, g: 45, b: 75 },
    { h: 87, s: 33, l: 98 },
];
// console.log(colors); //[ { r: 23, g: 45, b: 75 }, { h: 87, s: 33, l: 98 } ]
/**
 * @Exercise_6
 * Write a function called greet that accepts a single string OR an array of strings.
 *
 * It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
 *
 */
let personNames = ["Anik", "Anna", "Alexa", "Alina"];
//|| Way Number One ||
const greet = (person) => {
    if (typeof person === "string") {
        console.log(`Hello, ${person}`);
    }
    else {
        for (let p of person) {
            console.log(`Hello, ${p}`);
        }
    }
};
// Final Exercise: greet Function
function greet2(person) {
    const { name, nameArr } = person;
    // Single person
    if (name) {
        console.log(`Hello, ${name}`);
    }
    // Array of persons
    if (nameArr) {
        for (let name of nameArr) {
            console.log(`Hello, ${name}`);
        }
    }
}
//|| Single Person ||
// greet2({ name: "Anik" }); // Hello, Anik
// greet2({ nameArr: personNames });
// Hello, Anik
// Hello, Anna
// Hello, Alexa
// Hello, Alina
