// Arrays to keep track of each task's state
function newTask (title, description) {
  const task = {
    title,
    description,
    complete: false
  };
  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(task) {
  task.complete = true;
}

// Print the state of a task to the console in a nice readable way
function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? "" : " not"} been completed${task.complete ? "!!! ✨" : "... 🤔"}`);
}


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "come on, you know how to scoop");
const task2 = newTask("Do Laundry", "💦");
const tasks = [task1, task2];

logTaskState(task1);
completeTask(task1);
logTaskState(task1);
