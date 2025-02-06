import seriousStudent, { sayHello, type Student } from "./student-fn.ts";

sayHello({ name: "Casper", id: 3582 });

const anotherStudent: Student = {
  id: 23845,
  name: seriousStudent,
};

sayHello(anotherStudent);

export const myStudent: Student = {
  id: 348,
  name: "Dasha",
};
