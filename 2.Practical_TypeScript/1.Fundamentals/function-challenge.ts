function processData(
  input: number | string,
  config: { reverse: boolean } = { reverse: false }
): number | string {
  if (typeof input === "number") {
    // If input is a number then return square of the input value.
    return Math.pow(input, 2);
  } else if (typeof input === "string" && config.reverse === true) {
    // If input is a string and the reverse property of the config object is true then return the reversed string in uppercase.
    return input.split("").reverse().join("").toUpperCase();
  }

  return input.toUpperCase();
}

console.log(processData(10)); // 100
console.log(processData("Anik")); // ANIK
console.log(processData("Anik", { reverse: true })); // KINA

// Default value
function name2(params: number = 34) {
  return params * 2;
}

console.log(name2());
