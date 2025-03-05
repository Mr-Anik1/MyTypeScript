/**
 * @TypeScript_Class
 *
 */
interface Person {
  name: string;
  age: number;
  income: number;
}

class SimplePerson {
  pName: string;
  pAge: number;
  #pIncome: number; // private property
  constructor(person: Person) {
    this.pName = person.name;
    this.pAge = person.age;
    this.#pIncome = person.income;
  }

  // Setter
  public set setPersonIncome(v: number) {
    this.#pIncome = v;
  }

  // Getter
  public get getPersonIncome(): string {
    return `His income is ${this.#pIncome} taka.`;
  }

  // Method
  personDetails(): string {
    return `His name is ${this.pName}, he is ${this.pAge} years old.`;
  }
}

// I don't follow the order but it is still working perfectly.
const myPerson = new SimplePerson({ age: 22, name: "Anik", income: 0 });

// console.log(myPerson.personDetails());
// console.log(myPerson.getPersonIncome);

// Set the income within setter.
myPerson.setPersonIncome = 45000;
// console.log(myPerson.getPersonIncome);

// interface Student {
//   name: string;
//   age: number;
//   income: number;
//   grade: string;
//   id: number;
// }

// Student interface has also Person interface's property(name,age,income) thats why I extends Person.
interface Student extends Person {
  grade: string;
  id: number;
}

class GoodStudent extends SimplePerson {
  grade: string;
  #id: number;
  constructor(student: Student) {
    super(student);
    this.grade = student.grade;
    this.#id = student.id;
  }

  // Method
  fullStudent(): string {
    return `Student name is ${this.pName} and he is ${
      this.pAge
    } years old. He reads in class ${this.grade} and his id is ${this.#id}.`;
  }
}

const myStu = new GoodStudent({
  id: 99,
  age: 22,
  name: "Tonik",
  grade: "XII",
  income: 45234,
});

// console.log(myStu.fullStudent());

// getPersonIncome is a value of the SimplePerson class, but I have accessed it in the GoodStudent class. Cause here I have used extends property.
// console.log(myStu.getPersonIncome);

/**
 * @Default_Property
 *
 */

class Country {
  cName: string;
  cAge: number;
  cType: string = "peaceful"; // default property
  #warMachine: number; // private property
  constructor(name: string, age: number, warMachine: number) {
    this.cName = name;
    this.cAge = age;
    this.#warMachine = warMachine;
  }

  countryDetails(): string {
    return `${this.cName} is a ${this.cType} country and it is established ${this.cAge} years ago.`;
  }

  // Private Method it's only access only inside the class.
  #warInfo(): string {
    return `${this.cName} has ${this.#warMachine} weapones.`;
  }

  public get suprimeLeader(): string {
    return `The suprime leader of ${this.cName} says that ${this.#warInfo()}`;
  }
}

const myCountry = new Country("Bangladesh", 54, 23456);

// console.log(myCountry.countryDetails());
// myCountry.cType="beautiful"

// console.log(myCountry.suprimeLeader); // The suprime leader of Bangladesh says that Bangladesh has 23456 weapones.

/**
 * @constructor_shortcart
 * Wow...
 */

// Here I have set Sex as the Literal Type
type Sex = "male" | "female";

class AnotherExample {
  // Here I don't need to write property name
  constructor(
    private id: number,
    public name: string,
    public grade: string,
    readonly roll: number,
    public sex: Sex // sex will be only "male" or "female"
  ) {
    // I don't need to explicitly set property name
  }

  introduceStudent(): string {
    return `This is ${this.name}, ${
      this.sex === "male" ? "he" : "she"
    } studies in the class ${this.grade} and ${
      this.sex === "male" ? "his" : "her"
    } calss roll is ${this.roll}.`;
  }

  // get student id
  public get getStudentId(): number {
    return this.id;
  }
}

const masha = new AnotherExample(3254, "Masha", "II", 1, "female");
console.log(masha.introduceStudent()); // This is Masha, she studies in the class II and her calss roll is 1.

const casper = new AnotherExample(823, "Casper", "IV", 3, "male");
console.log(casper.introduceStudent()); // This is Casper, he studies in the class IV and his calss roll is 3.

// I can't access id directly cause id is a private property, so I use getter(getStudentId) for accessing id.
console.log(casper.getStudentId); // 823
