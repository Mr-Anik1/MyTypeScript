/**
 * @Tuples
 * Tuples are a special type exclusive to TypeScript and they don't exist in JavaScript.
 *
 * Tuples are fixed in their length and their types.
 *
 */

// variableName:types
let rgbTuple: [number, number, number];

// OK -> It follows the order, and it has fixed lengths and types.
rgbTuple = [255, 0, 255];

// WRONG -> numbers but not fixed lengths
// rgbTuple=[255,0,355,3] // Source has 4 element(s) but target allows only 3

// WRONG -> not numbers
// rgbTuple=['string','one']

// OK -> It follows the order, and it has fixed lengths and types.
rgbTuple = [312, 155, 122];

let numStringTuple: [string, number];
// OK -> It follows the order, and it has fixed lengths and types.
numStringTuple = ["myStr", 99];

// WRONG -> didn't follow the order
// numStringTuple = [93, "myStr"];

// Tuple Type
type HTTPresponse = [number, string];

// variable:type
let goodResponse: HTTPresponse;

// WRONG -> didn't follow the order
// goodResponse=["404 Not Found",404]

// OK -> It follows the order, and it has fixed lengths and types.
goodResponse = [200, "OK"];

// || Array of tuples ||
let responseArr: HTTPresponse[] = [
  [200, "OK"],
  [404, "404 Not Found"],
  [500, "Internal Server Error"],
];

/**
 * @Enums
 * Enums allows us to define a set of named constants.
 *
 * If I want, I can also use: const enum
 *
 */

//|| Numeric Enums ||
// I didn't assign values, so in here, PENDING is 0, SHIPPED is 1, DELIVERED is 2, and RETURNED is 3.
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

function isDelivered(status: OrderStatus): boolean {
  return status === OrderStatus.DELIVERED;
}
// console.log(isDelivered(OrderStatus.DELIVERED));//true
// console.log(isDelivered(OrderStatus.SHIPPED)); // false

// Here I assigned ANIKROLL equal to 10. So the next increment is one, which means ANNAROLL will be 11. And next, I manually assigned ALEXAROLL equal to 49, so the next one, ALINAROLL, will be 50.
enum AnotherExample {
  ANIKROLL = 10,
  ANNAROLL,
  ALEXAROLL = 49,
  ALINAROLL,
}

//|| String Enums  ||
enum EnumOfStrings {
  r = "red",
  g = "green",
  b = "blue",
}

//|| Heterogenous Enums ||
enum EnumOfHetero {
  ON = 1,
  YES = "response",
  OFF = 0,
}
