type Book = {
  id: number;
  name: string;
};

const book1: Book = {
  id: 897,
  name: "The Jungle",
};

// Here the & is a intersection type, now it uses all of the properties from the Book type and {discount:number}
const discountBook: Book & { discount: number } = {
  id: 69,
  name: "The Hunted House",
  discount: 0.15,
};
