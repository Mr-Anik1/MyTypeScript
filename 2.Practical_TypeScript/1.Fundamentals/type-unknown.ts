/**
 * @Type_Unknown
 * The type unknow type is a type-safe counterpart of the any type. It's like saying that a variable could be anything, but we need to perform some type-checking before we can use it.
 *
 *  "error instanceof Error" check if the error object is an instance of Error class.
 *
 */

let unknownValue: unknown;

unknownValue = "Hello";
unknownValue = [3, 3, 3];
unknownValue = 2.34534;

// We need to type check before we use it.
if (typeof unknownValue === "number") {
  unknownValue.toFixed();
}

function runSomeCode() {
  const randomVal = Math.random();

  if (randomVal < 0.5) {
    throw new Error("There was error...");
  } else {
    throw "Casper Error";
  }
}

try {
  runSomeCode();
} catch (error) {
  // Type check before use it
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
  }
}
