/**
 * Tuple allow us to setup an array with fixed length and ordered with fixed type.
 */
const numString: [number, string] = [20, "str"];

// Fixed length of number array - it allows only three number element.
const myNumber: [number, number, number] = [1, 2, 2025];

// sometimes it useful for function return
// getPerson() function returns array of string and number, here I have used tuple.
function getPerson(name: string, age: number): [string, number] {
  return [name, age];
}

const randomPerson = getPerson("Casper", 8);
console.log(randomPerson);

// optional value - here I didn't use second value number, cause second value is optional.
const susan: [string, number?] = ["susan"];

type Person = {
  name: string;
  age?: number;
};

// tuple optional value use in function return - here second option is optional.
function optoFunction(human: Person): [string, number?] {
  return human.age ? [human.name, human.age] : [human.name];
}

console.log(optoFunction({ name: "Masha" })); // [ "Masha" ]
console.log(optoFunction({ name: "Masha", age: 5 })); // [ "Masha", 5 ]
