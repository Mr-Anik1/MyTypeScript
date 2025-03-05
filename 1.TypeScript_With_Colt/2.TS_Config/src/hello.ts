type Obj = {
  id: number;
  name: string;
  price: number;
};

const myObj: Obj = {
  id: 345,
  name: "Mango",
  price: 30,
};

let newFunk = (obj: Obj): Obj[] => {
  let result: Obj[] = [];

  for (let i = 1; i <= 5; i++) {
    let newObj: Obj = {
      id: obj.id + i, // Every iteration will increment 1
      name: obj.name,
      price: obj.price + i * 5, // Every iteration will add 5 into the price
    };
    result.push(newObj);
  }

  return result;
};

// console.log(newFunk(myObj));
/*

 [
  { id: 346, name: 'Mango', price: 35 },
  { id: 347, name: 'Mango', price: 40 },
  { id: 348, name: 'Mango', price: 45 },
  { id: 349, name: 'Mango', price: 50 },
  { id: 350, name: 'Mango', price: 55 }
 ]

*/
