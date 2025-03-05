/**
 * @TYPE_SCRIPT_CLASSES
 *
 * @Public_Property : Access from everywhere
 * @Private_Property : Only accessible within the own class.
 * @Protedted_Property : Only accessible within the own class and subclass but not accessible outside of the class.
 *
 *
 */

class Person {
  // Set the type of the constructor property
  first: string;
  last: string;
  age: number;
  constructor(firstName: string, lastName: string, age: number) {
    this.first = firstName;
    this.last = lastName;
    this.age = age;
  }

  // Getter
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }
  // Setter
  set fullName(name: string) {
    const [firstName, lastName] = name.split(" ");
    this.first = firstName;
    this.last = lastName;
  }
}

//|| I follow the order ||
// let myPerson = new Person("Mr.", "Anik", 21);

// console.log(myPerson.fullName);
// myPerson.fullName = "Alexa Jason";
// console.log(myPerson.fullName);

/**
 * @Using_Interface_for_Constructor_Function
 * Here in the constructor function, I pass the PlayerType interface because I want to ensure that when I create a new player, I won't pass player information serial by serial (order).
 *
 */
interface PlayerType {
  firstName: string;
  lastName: string;
  age: number;
  skills: string[];
  level: string;
  game: string;
  income: number;
}

class Player extends Person {
  // Set the type of the constructor function property
  skills: string[];
  level: string;
  gameName: string;
  #salary: number; //private
  constructor(player: PlayerType) {
    super(player.firstName, player.lastName, player.age);
    this.skills = player.skills;
    this.level = player.level;
    this.gameName = player.game;
    this.#salary = player.income;
  }

  getSalary(): number {
    return this.#salary;
  }

  playerIntroduction(): string {
    return `Hello, my name is ${this.first} ${this.last}, and I'm ${this.age} years old. I am a ${this.level} ${this.gameName}, and I have ${this.skills} skills.`;
  }
}

//|| Pass information using the object property, and here I didn't follow the order, but it showed perfect information. ||
const player1 = new Player({
  firstName: "Alexa",
  age: 20,
  lastName: "Jason",
  game: "cricketer",
  level: "senior",
  skills: ["batting", "bowling", "filding"],
  income: 30000,
});
// console.log(player1.playerIntroduction());
// Hello, my name is Alexa Jason, and I'm 20 years old. I am a senior cricketer, and I have batting,bowling,filding skills.

//|| I don't follow the order ||
const player2 = new Player({
  game: "footballer",
  level: "junior",
  age: 21,
  firstName: "Mr.",
  skills: ["passing", "throwing", "midfilder", "defencing"],
  lastName: "Anik",
  income: 450700,
});
// console.log(player2.playerIntroduction());
// Hello, my name is Mr. Anik, and I'm 21 years old. I am a junior footballer, and I have passing,throwing,midfilder,defencing skills.

//|| I can't access the salary because it is private property. So for that, I have accessed salary with the getSalary method. ||
// console.log(player2.getSalary()); //450700

//|| I use the Person class method fullName; the Player class inherits it from the Person class. ||
// console.log(player2.fullName); // Mr. Anik

/**
 *
 * @Another_Class_Example
 *
 */
class Student {
  readonly studentId: number; // id won't be modified.
  private grade: string; // We can also make property private using the private keyword instead of #
  year: number;
  protected referCode: string; // Protected property only accessible within the own class and subclass.
  constructor(id: number, grade: string, year: number, referCode: string) {
    this.studentId = id;
    this.grade = grade;
    this.year = year;
    this.referCode = referCode;
  }
}

const student1 = new Student(145, "University", 2023, "xc23YlTd8kqVr");

class SuperStudent extends Student {
  name: string;
  constructor(
    id: number,
    grade: string,
    year: number,
    referCode: string,
    name: string
  ) {
    super(id, grade, year, referCode);
    this.name = name;
  }

  // I have failed to access the id because it is private property, and private property only allows access to its own class (students). But I have accessed referCode because it is protected property, and protected property is accessible within the child class, and the SuperStudent is a child of the Student class.
  accessItem(): string {
    return `${this.referCode}`;
  }
}

let superStudent1 = new SuperStudent(
  324,
  "college",
  2023,
  "xc23YlTd8kqVr",
  "Anik"
);

/**
 * @Create_class_using_interface
 *
 */
interface ColorFul {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements ColorFul {
  constructor(public color: string) {}
}

// Jacket class follows two interface rules.
class Jacket implements ColorFul, Printable {
  constructor(public brand: string, public color: string) {}

  print(): void {
    console.log(`My ${this.brand} jacket is ${this.color} color.`);
  }
}

const myBike = new Bike("Red");

const myJacket = new Jacket("J&J", "Green");
// myJacket.print(); // My J&J jacket is Green color.

/**
 * @Abstract_Class
 * It doesn't exist in JavaScript
 */
