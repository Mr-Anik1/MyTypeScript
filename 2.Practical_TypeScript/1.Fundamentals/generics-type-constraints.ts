type Student = {
  name: string;
  age: number;
};

const myStudent: Student = {
  name: "Casper",
  age: 7,
};

type Car = {
  brand: string;
  price: number;
};

const myCar: Car = {
  brand: "Ford",
  price: 534287,
};

type Product = {
  name: string;
  price: number;
};

const cheapProduct: Product = {
  name: "Shoes",
  price: 1.9,
};

type Human = {
  isMan: boolean;
  isWoman: boolean;
  age: number;
  name: string;
};

const simpleHuman: Human = {
  isMan: false,
  isWoman: true,
  age: 23,
  name: "Anastasia",
};

// Now I could pass only those objects which have the "name" property.
function printName<T extends { name: string }>(input: T): void {
  console.log(input.name);
}

printName(cheapProduct);
printName(myStudent);
printName(simpleHuman);
// printName(myCar) // I couldn't pass the myCar object in this object, cause property "name" is missing in the myCar object.
