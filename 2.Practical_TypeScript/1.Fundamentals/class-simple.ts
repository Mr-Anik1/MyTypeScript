/**
 * @TypeScript_Class
 *
 */
interface Person {
  name: string;
  age: number;
  income: number;
}

class simplePerson {
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
const myPerson = new simplePerson({ age: 22, name: "Anik", income: 0 });

console.log(myPerson.personDetails());
console.log(myPerson.getPersonIncome);

// Set the income within setter.
myPerson.setPersonIncome = 45000;
console.log(myPerson.getPersonIncome);

interface Student {
  name: string;
  age: number;
  income: number;
  grade: string;
  id: number;
}

class goodStudent extends simplePerson {
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

const myStu = new goodStudent({
  id: 99,
  age: 22,
  name: "Tonik",
  grade: "XII",
  income: 45234,
});

console.log(myStu.fullStudent());

// getPersonIncome is a value of the simplePerson class, but I have accessed it in the goodStudent class. Cause here I have used extends property.
console.log(myStu.getPersonIncome);
