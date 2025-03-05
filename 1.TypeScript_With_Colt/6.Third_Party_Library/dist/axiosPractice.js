"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
/**
 * @Individual_user
 * Here I use interface and generics
 */
async function getUser(id) {
    try {
        const response = await axios_1.default.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const { data } = response;
        printUserInfo(data);
    }
    catch (err) {
        console.log(`[ERROR]:${err}`);
    }
}
/**
 * @Array_of_users
 */
// axios
//   .get<User[]>(`https://jsonplaceholder.typicode.com/users`)
//   .then((res) => {
//     console.log(`Data Fetch Successfully`);
//     const { data } = res;
//     data.forEach(printUserInfo);
//   })
//   .catch((e) => {
//     console.log(`[ERROR]:${e}`);
//   });
function printUserInfo(user) {
    const userObj = {
        userId: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
    };
    console.log(userObj);
}
getUser(5);
