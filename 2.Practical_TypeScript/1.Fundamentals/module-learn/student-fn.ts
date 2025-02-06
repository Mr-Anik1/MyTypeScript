export type Student = {
  id: number;
  name: string;
};

export function sayHello(student: Student): void {
  console.log(`Hello ${student.name} your id is ${student.id}`);
}

const seriousStudent: string = "Masha";

export default seriousStudent;
