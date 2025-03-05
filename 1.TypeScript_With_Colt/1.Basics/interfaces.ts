/**
 * @INTERFACE
 *
 * The interface looks like a type alias, but here a difference exists. In the type alias, we use = sign, but in the interface, we don't use = sing.
 *
 */

interface Point {
  name: string;
  age: number;
  year: number;
}

let myPvariable: Point = {
  name: "Anik",
  age: 21,
  year: 2023,
};

// console.log(myPvariable); // { name: 'Anik', age: 21, year: 2023 }

/**
 * @READONLY_AND_OPTIONAL
 */
interface Person {
  readonly id: number;
  firstName: string;
  lastName?: string;
  phone: string;
}

// Here I didn't pass lastName because it is optional.
let myPerson: Person = {
  id: 201,
  firstName: "Anik",
  phone: "0172423894",
};

myPerson.firstName = "Alexa";
// I have changed the firstName but I can't change the id because it is read-only.

// console.log(myPerson); // { id: 201, firstName: 'Alexa', phone: '0172423894' }

/**
 * @METHOD
 */
interface Product {
  name: string;
  price: number;
  applyDiscount(discountParcent: number): number;
}

let myProduct: Product = {
  name: "Apple",
  price: 100,
  applyDiscount(discountParcent: number) {
    // If the discount is 30%, then the new price will be:
    // newPrice=100*(1-30/100)=>100*(1-0.3)=>100*0.7
    // => 70
    let newPrice = +(this.price * (1 - discountParcent / 100)).toFixed(2);
    this.price = newPrice;

    return this.price;
  },
};

myProduct.applyDiscount(20); //20% discount
// console.log(myProduct); //{ name: 'Apple', price: 80, applyDiscount: [Function: applyDiscount] }

// The previous price was 100 and now, after a 20% discount, the price is 80.

/**
 * @REOPENING_OR_ADDING_INTERFACES
 */
// first interface
interface Hen {
  name: string;
}

// Second interface with similler name
interface Hen {
  age: number;
  response(): string;
}

// Create an object with two Hen interfaces working together; this is called the reopening interface.
let myLittleHen: Hen = {
  name: "Picky",
  age: 0.4,
  response() {
    return "Cock Cock...";
  },
};

// console.log(myLittleHen);//{ name: 'Picky', age: 0.4, response: [Function: response] }

/**
 * @EXTENDING_INTERFACE
 */
// Here, GoldenHen inherits Hen ~ like OOP
interface GoldenHen extends Hen {
  job: string;
}

// Create a new object with GoldenHen
let myEggyHen: GoldenHen = {
  name: "Eggy Ponk",
  age: 1.3,
  response() {
    return `My Egg, Cock Cock..`;
  },
  job: "Producing Egg",
};

// console.log(myEggyHen); // { name: 'Eggy Ponk', age: 1.3, response: [Function: response], job: 'Producing Egg' }

//|| MULTIPLE INHERITANCE INTERFACE ||
interface Human {
  name: string;
  age: number;
}

interface Employee {
  readonly id: number;
  email: string;
}

// Here, Engineer Inheritance extends multiple interfaces(Human and Employee)
interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}

// Now I create a new object based on the Engineer interface, and the Engineer has Human and Employee interfaces and their respective properties.
let alexa: Engineer = {
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
