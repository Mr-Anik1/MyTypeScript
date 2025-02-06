function getRandomElement<T>(list: T[]): T {
  const randomIndex: number = Math.floor(Math.random() * list.length);

  return list[randomIndex];
}

// console.log(getRandomElement<string>(["a", "b", "c"]));
// console.log(getRandomElement([1, 2, 3, 4, 5]));
// console.log(getRandomElement([false, true, false]));

// This generic interface I will use in the string, number and boolean object.
interface GenericInterface<T> {
  value: T;
  getValue(): T;
}

// GenericInterface use as string type
const genericString: GenericInterface<string> = {
  value: "Hello World",
  getValue() {
    return this.value;
  },
};

// console.log(genericString);
// console.log(genericString.getValue());

// GenericInterface use as number type
const genericNumber: GenericInterface<number> = {
  value: 75,
  getValue() {
    return this.value;
  },
};

// console.log(genericNumber);
// console.log(genericNumber.getValue());
