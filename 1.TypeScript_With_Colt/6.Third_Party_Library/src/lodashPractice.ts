import _ from "lodash";

const list = [1, [2], [4], 5, [[6, [7, 8, [9, 10]]]]];

// Flaten multidimentional array using lodash
const result: number[] = _.flattenDeep(list);
// console.log(result);
// [ 1, 2, 4,  5, 6, 7, 8, 9, 10 ]

/**
 * Under the hood
 */
const flaten = (arr: any[]): any[] =>
  arr.reduce(
    (acc, cur) => acc.concat(Array.isArray(cur) ? flaten(cur) : cur),
    []
  );

// console.log(flaten(list));// [ 1, 2, 4,  5, 6, 7, 8, 9, 10 ]

export { flaten, list, result };
