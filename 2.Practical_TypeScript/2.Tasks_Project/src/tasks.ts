// !(non null assertion)

const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");
const taskListElement = document.querySelector<HTMLUListElement>(".list");

type Task = {
  description: string;
  isCompleted: boolean;
};

// This array store tasks
const tasks: Task[] = loadTasks();

// Show all tasks
tasks.forEach((task) => renderTask(task));

// Load tasks from the localstorage
function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

taskForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskDescription = formInput?.value;

  if (taskDescription) {
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    };

    // Add task to the list
    addTask(task);

    // Render the tasks
    renderTask(task);

    // Update localstorage
    updateStorage();

    // Clear the input field
    formInput.value = "";

    return;
  }

  alert("Please provide a task description...");
});

function addTask(task: Task): void {
  tasks.push(task);
}

function renderTask(task: Task): void {
  // Create task list element
  const taskElement = document.createElement("li");

  if (task.isCompleted) {
    if (!taskElement.querySelector("del")) {
      const delElement = document.createElement("del");
      delElement.textContent = task.description;
      taskElement.textContent = "";
      taskElement.appendChild(delElement);
    }
  } else {
    taskElement.textContent = task.description;
  }

  // Create checkbox
  const taskCheckBox = document.createElement("input");
  taskCheckBox.type = "checkbox";
  taskCheckBox.checked = task.isCompleted;

  // Toggle checkbox
  taskCheckBox.addEventListener("change", () => {
    // If isCompleted is false then it turns to true and vise-versa.
    task.isCompleted = !task.isCompleted;

    // Then update the localestorage
    updateStorage();
  });

  taskElement?.appendChild(taskCheckBox);
  taskListElement?.appendChild(taskElement);
}

function updateStorage(): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
