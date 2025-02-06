interface Person {
  name: string;
}

interface DogOwner extends Person {
  dogName: string;
}

interface Manager extends Person {
  managePeople(): void;
  delegateTasks(): void;
}

type Staff = Person | DogOwner | Manager;

function getEmployee(): Staff {
  const randomVal = +Math.random().toFixed(2);

  if (randomVal < 0.33) {
    return {
      name: "Casper",
    };
  } else if (randomVal < 0.66) {
    return {
      name: "Casper",
      dogName: "Hunted Hunter",
    };
  }

  return {
    name: "Casper",
    managePeople() {
      console.log(`${this.name} is a manager and he manage people smartly.`);
    },
    delegateTasks() {
      console.log(`${this.name} also manage his dog.`);
    },
  };
}

const employee: Staff = getEmployee();
console.log(employee);

// Is employee a manager? it returns only boolean.
function isManager(obj: Staff): boolean {
  return "managePeople" in obj;
}

console.log(isManager(employee));

if (isManager(employee)) {
  // Here I won't access all property of the Manager, cause isManager return only boolean.
}

/**
 * @Type_Predicate
 * Type Predicate is special type of return that not only returns boolean but also it asserts the argument.
 */
function doesManager(obj: Staff): obj is Manager {
  return "managePeople" in obj;
}

if (doesManager(employee)) {
  // Now I have access all properties of the Manager, cause doesManager return type predicate.
  employee.delegateTasks();
}
