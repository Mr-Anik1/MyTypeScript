/**
 * @Type_Assertion
 * Which is a way to tell the browser what type an existing variable is.
 *
 * This is especially useful when we know more about the type than the typescript does.
 *
 */

let someValue: any = "This is string";

// Here I have used type assertion. someValue is any type but I loudly say that someValue behave as a string.
let stringLength: number = (someValue as string).length;

console.log(stringLength);

/**
 * Another Example of type assertion
 */
enum Status {
  Pending = "pending",
  Declined = "declined",
}

type User = {
  name: string;
  status: Status;
};

// Save Status.pending in the DB as a string
// Retrive string from the DB
const statusValue = "pending";

// Create user
const user: User = {
  name: "Casper",

  // This throw an error: type "pending" is not assignable to type Status. Cause statusValue is a string but status property needs Status enum value (Status.pending)
  // status:statusValue

  status: statusValue as Status, // Here I have set statusValue type is Status enum, so now it doesn't throw error. This is the power of type assertion.
};
