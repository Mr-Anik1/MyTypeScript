// enum allows us to define a set of named constants.

// here Manager is 0 and Employee is 1.
enum Staff {
  Manager,
  Employee,
}

console.log(Staff); // { "0": "Manager", "1": "Employee", Manager: 0, Employee: 1 }

enum ServerResponseStatus {
  Success = 200,
  Error = 404,
}

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ["first", "second"],
  };
}

console.log(getServerResponse());
