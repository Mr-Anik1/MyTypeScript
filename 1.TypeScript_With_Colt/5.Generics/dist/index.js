"use strict";
function getRandomElement(list) {
    const randInd = Math.floor(Math.random() * list.length);
    return list[randInd];
}
// console.log(getRandomElement<string>(["a", "b", "c"]));// c
// console.log(getRandomElement<number>([1, 2, 3]));// 2
function merge(object1, object2) {
    return {
        ...object1,
        ...object2,
    };
}
function printDoubleLength(thing) {
    return thing.length * 2;
}
// console.log(printDoubleLength("Hello")); // 10
function printDoubleLengt2(thing) {
    return thing.length * 2;
}
function howManyTime(media) {
    if ("episod" in media) {
        return `${media.title} TvShow: ${media.episod * media.length}`;
    }
    return `${media.title} Movie: ${media.duration}`;
}
// console.log(howManyTime({ title: "The Architecture", duration: 120 })); //The Architecture Movie: 120
// console.log(howManyTime({ title: "The Architecture", episod: 23, length: 45 })); //The Architecture TvShow: 1035
function printFullDate(date) {
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
