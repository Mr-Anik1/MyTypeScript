"use strict";
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
    first;
    last;
    age;
    constructor(firstName, lastName, age) {
        this.first = firstName;
        this.last = lastName;
        this.age = age;
    }
    // Getter
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    // Setter
    set fullName(name) {
        const [firstName, lastName] = name.split(" ");
        this.first = firstName;
        this.last = lastName;
    }
}
class Player extends Person {
    // Set the type of the constructor function property
    skills;
    level;
    gameName;
    #salary; //private
    constructor(player) {
        super(player.firstName, player.lastName, player.age);
        this.skills = player.skills;
        this.level = player.level;
        this.gameName = player.game;
        this.#salary = player.income;
    }
    getSalary() {
        return this.#salary;
    }
    playerIntroduction() {
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
    studentId; // id won't be modified.
    grade; // We can also make property private using the private keyword instead of #
    year;
    referCode; // Protected property only accessible within the own class and subclass.
    constructor(id, grade, year, referCode) {
        this.studentId = id;
        this.grade = grade;
        this.year = year;
        this.referCode = referCode;
    }
}
const student1 = new Student(145, "University", 2023, "xc23YlTd8kqVr");
class SuperStudent extends Student {
    name;
    constructor(id, grade, year, referCode, name) {
        super(id, grade, year, referCode);
        this.name = name;
    }
    // I have failed to access the id because it is private property, and private property only allows access to its own class (students). But I have accessed referCode because it is protected property, and protected property is accessible within the child class, and the SuperStudent is a child of the Student class.
    accessItem() {
        return `${this.referCode}`;
    }
}
let superStudent1 = new SuperStudent(324, "college", 2023, "xc23YlTd8kqVr", "Anik");
class Bike {
    color;
    constructor(color) {
        this.color = color;
    }
}
// Jacket class follows two interface rules.
class Jacket {
    brand;
    color;
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
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
