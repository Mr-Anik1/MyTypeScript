/**
 * In this lesson I have learned how to use object as a function parameter. But if I want I can also use interface.
 */

function objParam({ name, age }: { name: string; age: number }): string {
  return `Hello ${name}, are you ${age} years old?`;
}

console.log(objParam({ age: 22, name: "Anik" }));
