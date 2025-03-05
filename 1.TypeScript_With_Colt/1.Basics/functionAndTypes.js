"use strict";
/**
 * @FUNCTION
 */
function go(person = "stranger") {
    return `Hey ${person}`;
}
// console.log(go());
//|| ArrowGo will return a string or number.  ||
const arrowGo = (num) => {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
};
/**
 * @Exercise_1
 */
let twoFer = (name = "you") => {
    return `One for ${name} and one for me`;
};
// console.log(twoFer());
// console.log(twoFer("anik"));
/**
 * @Exercise_2
 */
let isLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
};
// console.log(isLeapYear(2012)); //true
// console.log(isLeapYear(2013)); //false
// console.log(isLeapYear(2000)); //true
/**
 * @Exercise_3
 */
let printName = (person) => {
    console.log(`Hello ${person.first} ${person.last}`);
};
// printName({ first: "Mr.", last: "Anik"});
/**
 *
 * @TYPES
 *
 */
// variableName:type=value
let cordination = { x: 10, y: 5 };
// Here I have passed only two properties of the Person1 type; I have ignored zOptional because it is optional.
let printName1 = (person) => {
    console.log(`Hello ${person.name} ${person.age}`);
};
let meoww = {
    numLives: 8,
    breed: "German",
    age: 20,
};
// duno object based on movie type
const duno = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327830,
        grossWorldwide: 400671789,
    },
};
// cats object based on Movie type
const cats = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldwide: 73833348,
    },
};
/**
 * @Exercise
 * Write a function called getProfit that accepts a single Movie object.
 *
 * It should return the movie's worldwide gross minus its budget
 *
 *
 */
//|| Way One ||
function getProfit1(movie) {
    return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
}
//|| Another way ||
function getProfit2({ boxOffice: { grossWorldwide, budget } }) {
    return grossWorldwide - budget;
}
//|| Another way ||
function getProfit(movie) {
    const { grossWorldwide, budget } = movie.boxOffice; //Destructuring
    return grossWorldwide - budget;
}
// console.log("CATS PROFIT>>>", getProfit(cats)); //CATS PROFIT>>> -21166652
// console.log("DUNO PROFIT>>>", getProfit(duno)); //DUNO PROFIT>>> 235671789
