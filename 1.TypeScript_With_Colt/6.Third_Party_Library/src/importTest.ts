import { flaten } from "./lodashPractice";

let arr = [1, [2, [3]], [4, [5, [6, [7]]]]];
console.log(flaten(arr));
// [ 1, 2, 3, 4, 5, 6, 7 ]
