/**
 * @Union_Type
 */

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

// cordinate type should be Point or Loc
let cordinate: Point | Loc = { x: 10, y: 4 };
cordinate = { lat: 67.43, long: 322.76 };

// price type should be number or string
function calculateTax(price: number | string, tax: number): number {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }

  return price * tax;
}
// console.log(calculateTax("230$", 0.5));

// This array holds string and number values at a time, and the parentheses are very important
let numStrArr: (number | string)[] = [1, 2, "one", "two"];

// And this is a different type of array; it can hold only an array of numbers or only an array of strings. At the same time, it couldn't hold string and number values.
let onlyStrOrNum: number[] | string[] = [1, 2];
onlyStrOrNum = ["one", "two"];

/**
 * @Exercise_1
 * Create a variable called highScore that can be a number OR a boolean
 *
 */
let highScore: number | boolean = 2;
highScore = true;

/**
 * @Exercise_2
 * create an array called stuff.
 * It can be an array of numbers OR an array of strings.
 * It cannot be an array of numbers and strings (mixed together)
 *
 */
let stuff: number[] | string[] = [1, 2, 3];
stuff = ["one", "two", "three"];

/**
 * @Exercise_3
 * Create a literal type called SkillLevel.
 * There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"
 *
 */
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

/**
 * @Exercise_4
 * Create a type called SkiSchoolStudent.
 * name must be a string, age must be a number, sport must be "ski" or "snowboard", level must be a value from the SkillLevel type (from above)
 *
 */
type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};

/**
 * @Exercise_5
 * Define a type to represent an RGB color:
 * r should be a number
 * g should be a number
 * b should be a number
 *
 * Define a type to represent an HSL color:
 * h should be a number
 * s should be a number
 * l should be a number
 *
 * @Create an array called colors that can hold a mixture of RGB and HSL color types
 *
 */
type RGB = {
  r: number;
  g: number;
  b: number;
};

type HSL = {
  h: number;
  s: number;
  l: number;
};

let colors: (RGB | HSL)[] = [
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
let personNames: string[] = ["Anik", "Anna", "Alexa", "Alina"];

//|| Way Number One ||
const greet = (person: string | string[]): void => {
  if (typeof person === "string") {
    console.log(`Hello, ${person}`);
  } else {
    for (let p of person) {
      console.log(`Hello, ${p}`);
    }
  }
};

//|| Single Person ||
// greet("Alexa"); //Hello, Alexa

//|| Array of persons ||
// greet(personNames);
// Hello, Anik
// Hello, Anna
// Hello, Alexa
// Hello, Alina

/**
 *
 * @Another_Way
 * Using the Optional Type Property ?:
 *
 */
// Here, name and nameArr are optional.
type Person = {
  name?: string;
  nameArr?: string[];
};

// Final Exercise: greet Function
function greet2(person: Person): void {
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
