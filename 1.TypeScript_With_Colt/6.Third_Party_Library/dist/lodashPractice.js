"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = exports.list = exports.flaten = void 0;
const lodash_1 = __importDefault(require("lodash"));
const list = [1, [2], [4], 5, [[6, [7, 8, [9, 10]]]]];
exports.list = list;
// Flaten multidimentional array using lodash
const result = lodash_1.default.flattenDeep(list);
exports.result = result;
// console.log(result);
// [ 1, 2, 4,  5, 6, 7, 8, 9, 10 ]
/**
 * Under the hood
 */
const flaten = (arr) => arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flaten(cur) : cur), []);
exports.flaten = flaten;
