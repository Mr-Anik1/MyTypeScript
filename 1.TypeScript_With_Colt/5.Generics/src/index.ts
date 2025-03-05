function getRandomElement<T>(list: T[]): T {
  const randInd = Math.floor(Math.random() * list.length);
  return list[randInd];
}

// console.log(getRandomElement<string>(["a", "b", "c"]));// c

// console.log(getRandomElement<number>([1, 2, 3]));// 2

function merge<T, U>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}

// console.log(
//   merge({ name: "Anik", year: 2023 }, { hobbies: ["programming", "fishing"] })
// );

interface Lengthy {
  length: number;
}

function printDoubleLength(thing: Lengthy): number {
  return thing.length * 2;
}
// console.log(printDoubleLength("Hello")); // 10

function printDoubleLengt2<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

// console.log(printDoubleLengt2("Hello")); // 10
// console.log(printDoubleLengt2([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 18

/**
 * @TYPE_NARROWING
 */
interface Movie {
  title: string;
  duration: number;
}

interface TvShow {
  title: string;
  episod: number;
  length: number;
}

function howManyTime(media: Movie | TvShow): string {
  if ("episod" in media) {
    return `${media.title} TvShow: ${media.episod * media.length}`;
  }
  return `${media.title} Movie: ${media.duration}`;
}

// console.log(howManyTime({ title: "The Architecture", duration: 120 })); //The Architecture Movie: 120
// console.log(howManyTime({ title: "The Architecture", episod: 23, length: 45 })); //The Architecture TvShow: 1035

function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    return date.toUTCString();
  }
  return new Date(date).toUTCString();
}

/**
 *Learn more>>!<<this topic
 *
 * @TYPE_PREDICATE
 *
 *
 */
