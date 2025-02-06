type Employee = {
  id: number;
  name: string;
  department: string;
};

const masha: Employee = { id: 987, name: "Masha", department: "CSE" };
const bob: Employee = { id: 65, name: "Bob", department: "EEE" };
const alice: Employee = { id: 354, name: "Alice", department: "ME" };

// Array of employee
const teslaEmployees: Employee[] = [masha, bob, alice];

type Manager = {
  id: number;
  name: string;
  employees: Employee[];
};

const musk: Manager = {
  id: 876,
  name: "Musk",
  employees: teslaEmployees,
};

type Staff = Employee | Manager;

// Function
function printStaffDetails(staff: Staff): void {
  if ("employees" in staff) {
    console.log(
      `${staff.name} is a manager of ${staff.employees?.length} employees.`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department.`
    );
  }
}

printStaffDetails(bob);
printStaffDetails(musk);
