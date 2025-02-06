function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

const result1 = pair<string, number>("Hello", 100);
console.log(result1);

const result2 = pair<number, number>(2, 2);
console.log(result2);

const result3 = pair<string, boolean>("My Little Casper", true);
console.log(result3);
