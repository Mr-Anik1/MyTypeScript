// function createArray<T>(times: number, val: T):Array<T>{}
function createArray<T>(times: number, val: T): T[] {
  let arr: T[] = [];
  for (let i = 0; i < times; i++) {
    arr.push(val);
  }
  // arr = Array(times).fill(val);

  return arr;
}

console.log(createArray<number>(5, 400)); // [ 400, 400, 400, 400, 400 ]
console.log(createArray<string>(3, "Casper")); // [ "Casper", "Casper", "Casper" ]
