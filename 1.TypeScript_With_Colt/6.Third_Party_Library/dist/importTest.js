"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodashPractice_1 = require("./lodashPractice");
let arr = [1, [2, [3]], [4, [5, [6, [7]]]]];
console.log((0, lodashPractice_1.flaten)(arr));
// [ 1, 2, 3, 4, 5, 6, 7 ]
