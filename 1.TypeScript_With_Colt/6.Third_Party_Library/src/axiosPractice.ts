import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

/**
 * @Individual_user
 * Here I use interface and generics
 */
async function getUser(id: number) {
  try {
    const response = await axios.get<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const { data } = response;

    printUserInfo(data);
  } catch (err) {
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

function printUserInfo(user: User): void {
  const userObj = {
    userId: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
  };

  console.log(userObj);
}

getUser(5);
