function restPar(msg: string, ...numbers: number[]): string {
  let res = numbers.reduce((acc, cur) => acc + cur, 0);

  return `${msg} is: ${res}`;
}

const myNumber: number[] = [2, 4, 7, 5, 4];

console.log(restPar("Your total number", ...myNumber));

console.log(restPar("Total day", 1, 2, 3, 4, 5));
