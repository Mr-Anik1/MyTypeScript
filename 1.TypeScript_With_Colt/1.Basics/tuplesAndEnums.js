"use strict";
/**
 * @Tuples
 * Tuples are a special type exclusive to TypeScript and they don't exist in JavaScript.
 *
 * Tuples are fixed in their length and their types.
 *
 */
// variableName:types
let rgbTuple;
// OK -> It follows the order, and it has fixed lengths and types.
rgbTuple = [255, 0, 255];
// WRONG -> numbers but not fixed lengths
// rgbTuple=[255,0,355,3] // Source has 4 element(s) but target allows only 3
// WRONG -> not numbers
// rgbTuple=['string','one']
// OK -> It follows the order, and it has fixed lengths and types.
rgbTuple = [312, 155, 122];
let numStringTuple;
// OK -> It follows the order, and it has fixed lengths and types.
numStringTuple = ["myStr", 99];
// variable:type
let goodResponse;
// WRONG -> didn't follow the order
// goodResponse=["404 Not Found",404]
// OK -> It follows the order, and it has fixed lengths and types.
goodResponse = [200, "OK"];
// || Array of tuples ||
let responseArr = [
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
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
// console.log(isDelivered(OrderStatus.DELIVERED));//true
// console.log(isDelivered(OrderStatus.SHIPPED)); // false
// Here I assigned ANIKROLL equal to 10. So the next increment is one, which means ANNAROLL will be 11. And next, I manually assigned ALEXAROLL equal to 49, so the next one, ALINAROLL, will be 50.
var AnotherExample;
(function (AnotherExample) {
    AnotherExample[AnotherExample["ANIKROLL"] = 10] = "ANIKROLL";
    AnotherExample[AnotherExample["ANNAROLL"] = 11] = "ANNAROLL";
    AnotherExample[AnotherExample["ALEXAROLL"] = 49] = "ALEXAROLL";
    AnotherExample[AnotherExample["ALINAROLL"] = 50] = "ALINAROLL";
})(AnotherExample || (AnotherExample = {}));
//|| String Enums  ||
var EnumOfStrings;
(function (EnumOfStrings) {
    EnumOfStrings["r"] = "red";
    EnumOfStrings["g"] = "green";
    EnumOfStrings["b"] = "blue";
})(EnumOfStrings || (EnumOfStrings = {}));
//|| Heterogenous Enums ||
var EnumOfHetero;
(function (EnumOfHetero) {
    EnumOfHetero[EnumOfHetero["ON"] = 1] = "ON";
    EnumOfHetero["YES"] = "response";
    EnumOfHetero[EnumOfHetero["OFF"] = 0] = "OFF";
})(EnumOfHetero || (EnumOfHetero = {}));
