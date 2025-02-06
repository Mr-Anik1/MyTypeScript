/**
 * @Type_Alias
 * Type aliases can represent primitive types, union types, intersection types, literal types etc. While interfaces are primarily used to represent the shape of an object.
 */

// Primitive type
type Score = number;

/**
 * Example of union type
 */
type Employee = {
  id: number;
  name: string;
  salary: number;
};

type Manager = {
  id: number;
  name: string;
  salary: number;
  extraPower: boolean;
};

// union type
type Staff = Employee | Manager;

/**
 * Example of intersection type
 */
type Person = {
  name: string;
};

type Identity = {
  id: number;
};

// Intersection Type - now it uses all of the properties from the Person type and Identity type.
type Student = Person & Identity;

const myGoodStudent: Student = {
  id: 3829,
  name: "Casper",
};

// Literal Type
type Direction = "up" | "down" | "left" | "right";

// ------------------ ||| ------------------------

// Here I have used manually type
const john: { id: number; name: string; isActive: boolean } = {
  id: 102,
  name: "John Doe",
  isActive: false,
};

// Now I can use User type as per as I need.
type User = { id: number; name: string; isActive: boolean };

// Here I have use User type in an Object.
const person1: User = {
  id: 901,
  name: "Tonik",
  isActive: true,
};

const person2: User = {
  id: 423,
  name: "Jessica",
  isActive: false,
};

// Here I have used User type as function parameter and return type.
function webUser(user: User): User {
  console.log(
    `Our client ${user.name} and his id is ${user.id}, he is ${
      user.isActive ? "active" : "inactive"
    } our site.`
  );

  return user;
}

webUser(person1);
webUser(person2);
webUser(john);

// literal type => Another example of type alias
type Theme = "light" | "dark";

let myTheme: Theme;

myTheme = "dark";
myTheme = "light";

// Here I have set function parameter is Theme type, so now I can only use dark or light as the function parameter.
function superTheme(t: Theme): string {
  return `Your desktop theme is ${t}`;
}

superTheme("light");
