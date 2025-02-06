interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // Method
  printAuthor(): void;
  printTitle(message: string): string;
  year(value: number): number;
}

let myBook: Book = {
  isbn: 858930,
  title: "The Power of the Mind",
  author: "Mr.Tonik",
  genre: "sgsdsfg",
  printAuthor() {
    console.log(this.author);
  },
  printTitle(msg) {
    return `${this.title} ${msg}.`;
  },
  year: (v) => {
    return v;
  },
};

myBook.printAuthor();

const titleRes = myBook.printTitle("is an awesome book");
console.log(titleRes);
