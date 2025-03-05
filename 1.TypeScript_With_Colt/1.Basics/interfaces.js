"use strict";
/**
 * @INTERFACE
 *
 * The interface looks like a type alias, but here a difference exists. In the type alias, we use = sign, but in the interface, we don't use = sing.
 *
 */
let myPvariable = {
    name: "Anik",
    age: 21,
    year: 2023,
};
// Here I didn't pass lastName because it is optional.
let myPerson = {
    id: 201,
    firstName: "Anik",
    phone: "0172423894",
};
myPerson.firstName = "Alexa";
let myProduct = {
    name: "Apple",
    price: 100,
    applyDiscount(discountParcent) {
        // If the discount is 30%, then the new price will be:
        // newPrice=100*(1-30/100)=>100*(1-0.3)=>100*0.7
        // => 70
        let newPrice = +(this.price * (1 - discountParcent / 100)).toFixed(2);
        this.price = newPrice;
        return this.price;
    },
};
myProduct.applyDiscount(20); //20% discount
// Create an object with two Hen interfaces working together; this is called the reopening interface.
let myLittleHen = {
    name: "Picky",
    age: 0.4,
    response() {
        return "Cock Cock...";
    },
};
// Create a new object with GoldenHen
let myEggyHen = {
    name: "Eggy Ponk",
    age: 1.3,
    response() {
        return `My Egg, Cock Cock..`;
    },
    job: "Producing Egg",
};
// Now I create a new object based on the Engineer interface, and the Engineer has Human and Employee interfaces and their respective properties.
let alexa = {
    id: 567,
    name: "Alexa Jason",
    age: 23,
    email: "alexa@gmail.com",
    level: "Senior",
    languages: ["JavaScript", "TypeScript", "Python", "Ruby"],
};
// console.log(alexa);
/*

{
  id: 567,
  name: 'Alexa Jason',
  age: 23,
  email: 'alexa@gmail.com',
  level: 'Senior',
  languages: [ 'JavaScript', 'TypeScript', 'Python', 'Ruby' ]
}

*/
