/**
 * @Array
 */

let arr: string[] = ["anik", "tonik", "alex"];
arr.push("hello");
// console.log(arr);

let twoDimention: number[][] = [
  [1, 2],
  [4, 5],
];

let threeDimention: boolean[][][] = [
  [[true, false]],
  [[false, true]],
  [[true, false]],
];

/**
 * @Exercise_1
 * Create an empty array of numbers called "ages"
 *
 */
let ages: number[] = [];

/**
 * @Exercise_2
 * Create an array variable called gameBoard that starts as an empty array.
 * It should be typed to hold a 2 dimensional array of strings
 *
 */
let gameBoard: string[][] = [];

/**
 * @Exercise_3
 * Create a Product type that contains a name and a price.
 * An example product could be:
 * {name: "coffee mug", price: 11.50}
 *
 */
type Product = {
  name: string;
  price: number;
};

let myProduct: Product[] = [];
myProduct.push({ name: "coffee mug", price: 11.5 });
myProduct.push({ name: "banana", price: 10 });
myProduct.push({ name: "mango", price: 23 });
// console.log(myProduct); //[ { name: 'coffee mug', price: 11.5 }, { name: 'banana', price: 10 }, { name: 'mango', price: 23 } ]

/**
 * @Exercise_4
 * Write a function called getTotal that accepts an array of Product types
 * It should return the sum of all the products' prices
 *
 */
function getTotal(products: Product[]): number {
  let totalPrice = 0;
  for (let product of products) {
    totalPrice += product.price;
  }
  return totalPrice;
}

// Another Way ~ using reduce method
let getTotal2 = (products: Product[]): number => {
  return products.reduce((acc: number, cur: Product): number => {
    return (acc += cur.price);
  }, 0);
};

// console.log(getTotal(myProduct)); //44.5
