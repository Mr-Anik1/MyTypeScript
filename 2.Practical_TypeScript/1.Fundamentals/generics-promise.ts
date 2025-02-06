/**
 * @Generic_Promise_Example
 *
 */
// The return type of an async function must be the global Promise<T> type.
async function someAsyncValue<T>(val: T): Promise<T> {
  return val;
}

const result = someAsyncValue("My String");
console.log(result); // Promise { "My String" }
console.log(await result); // My String

const resolveResult = await someAsyncValue(93982);
console.log(resolveResult); // 93982
