"use strict";
const myObj = {
    id: 345,
    name: "Mango",
    price: 30,
};
let newFunk = (obj) => {
    let result = [];
    for (let i = 1; i <= 5; i++) {
        let newObj = {
            id: obj.id + i, // Every iteration will increment 1
            name: obj.name,
            price: obj.price + i * 5, // Every iteration will add 5 into the price
        };
        result.push(newObj);
    }
    return result;
};
console.log(newFunk(myObj));
