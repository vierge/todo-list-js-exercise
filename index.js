
function newTask (title, description) {
  const task = {
    title,
    description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? "" : " not"} been completed${this.complete ? "!!! ✨" : "... 🤔"}`);
    },

    markComplete: function () {
      this.complete = true;
    }
  };
  return task;
}


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "come on, you know how to scoop");
const task2 = newTask("Do Laundry", "💦");
const tasks = [task1, task2];

task1.logState();
task1.markComplete();
task1.logState();
