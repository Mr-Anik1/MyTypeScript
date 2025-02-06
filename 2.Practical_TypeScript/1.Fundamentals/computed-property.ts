/**
 * When I will change propName value, all computed property [propName] will be changed dynamically.
 */
const propName = "age";

type Animal = {
  // [propName] is a computed property, it will change dynamically.
  [propName]: number;
};

let tiger: Animal = {
  [propName]: 20,
};
