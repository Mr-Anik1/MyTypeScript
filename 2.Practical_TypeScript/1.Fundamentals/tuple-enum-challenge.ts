enum UserRole {
  Admin,
  Manager,
  Employee,
}

type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};

function createUser(user: User): User {
  return user;
}

const myUser: User = createUser({
  id: 34689,
  name: "Casper",
  role: UserRole.Manager,
  contact: ["casper@gmail.com", "+8801734578923"],
});

console.log(myUser);
/*

{
  id: 34689,
  name: "Casper",
  role: 1,
  contact: [ "casper@gmail.com", "+8801734578923" ]
}
  
*/
