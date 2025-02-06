interface Person {
  name: string;
  age: number;
  personDetails(): string;
}

interface DogOwner {
  dogName: string;
  dogOwnerDetails(): string;
}

const myPerson: Person = {
  name: "Masha",
  age: 6,
  personDetails() {
    return `Name:${this.name} and Age:${this.age}`;
  },
};

console.log(myPerson.personDetails());

// Extend Interface
interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  employeeId: 238745,
  name: "Dasha",
  age: 7,
  personDetails() {
    return `${this.name} is an employee of the Dell company and she is only ${this.age} years old. Best of luck for her.`;
  },
};

console.log(employee.personDetails());

// extends multiple interface
interface Manager extends Person, DogOwner {
  managePeople(): void;
}

const activeManager: Manager = {
  name: "Casper",
  age: 8,
  dogName: "Hunted Hitten",
  personDetails() {
    return `Name:${this.name}, Age:${this.age}`;
  },
  managePeople() {
    console.log(`${this.name} is a manager who manage people smartly.`);
  },
  dogOwnerDetails() {
    return `The ${this.dogName} dog owner name is ${this.name} and he is only ${this.age} years old.`;
  },
};

console.log(activeManager.personDetails());
console.log(activeManager.dogOwnerDetails());
