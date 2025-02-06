function processInput(value: number | string): void {
  if (typeof value === "number" && !isNaN(value)) {
    console.log(value * 2);
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

// processInput(7); // 14
// processInput("Hello Jane"); // HELLO JANE

// processInput(NaN);

// Another task
type ValueType = string | number | boolean;

const randomVal: number = Math.random();

const myValue: ValueType =
  randomVal < 0.33
    ? "Hello Random Value String"
    : randomVal < 0.66
    ? randomVal
    : true;

function checkValue(value: ValueType): void {
  if (typeof value === "string") {
    console.log(value.toLowerCase());
    return;
  } else if (typeof value === "number") {
    console.log(+value.toFixed(2));
    return;
  } else {
    console.log(`boolean:${value}`);
  }
}

// checkValue(myValue);

/**
 * @Equality_Narrowing
 * Another Challenge
 */

type Dog = {
  type: "dog";
  name: string;
  bark: () => void;
};

const myDog: Dog = {
  type: "dog",
  name: "Bull",
  bark() {
    console.log(`My ${this.type} ${this.name} is barking...`);
  },
};

type Cat = {
  type: "cat";
  name: string;
  meow: () => void;
};

const myCat: Cat = {
  type: "cat",
  name: "Tomas",
  meow() {
    console.log(`My ${this.type} ${this.name} is screaming meow meow...`);
  },
};

type Animal = Dog | Cat;

function makeSound(animal: Animal): void {
  if (animal.type === "dog") {
    animal.bark();
  } else {
    animal.meow();
  }
}

// makeSound(myCat);
// makeSound(myDog);

/**
 * @Truthy_and_Falsy
 * Another task
 */

function printLength(str: string | null | undefined): void {
  // typeof str === "string"
  if (str) {
    console.log(str.length);
  } else {
    console.log(`No String Provided`);
  }
}

// printLength("Hello");
// printLength(null);
// printLength(""); //  if (typeof str === "string") => result: 0 otherwise it("") treats as falsy value.

/**
 * @instanceof
 * Another Example
 */

function checkInput(val: Date | string): string {
  if (val instanceof Date) {
    return val.toTimeString();
  } else {
    return val;
  }
}

// const myDate: Date = new Date();
// console.log(checkInput(myDate)); // 09:07:03 GMT+0600 (Bangladesh Standard Time)
// console.log(checkInput("2025")); // 2025

/**
 * @Type_Predicate :=> It also explain in the interface-challenge-II.ts file
 * Another Example
 */
type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

const randomPerson = (): Person => {
  return Math.random() < 0.5
    ? { name: "John", study: () => console.log(`He is a student.`) }
    : {
        name: "Casper",
        login: () => console.log(`User logged in successfully.`),
      };
};

// Here person type is Student or User
const person: Person = randomPerson();

// Type predicate(person is Student) is not only returns boolean but also it asserts the argument.
function isStudent(person: Person): person is Student {
  // return "study" in person;
  return (person as Student).study !== undefined;
}

if (isStudent(person)) {
  // Here I have access all properties of the student.
  person.study();
} else {
  person.login();
}
