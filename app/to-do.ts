class Task {
  done: boolean = false;
  constructor(public description: string, public priority: string) {}
  markDone() {
    this.done = true;
  }
}
class HomeTask extends Task {}

class WorkTask extends Task {
  constructor(public dueDate: Date, public description: string, public priority: string) {
    super(description, priority);
  }
}

class HobbyTask extends Task {
  constructor(public description: string){
    super(description, "low");
  }
}

var tasks = [];

tasks.push(new HomeTask("Do Dishes", "High"));
tasks.push(new HomeTask("Eat Dinner", "medium"));
tasks.push(new HomeTask("watch tv show", "low"));

tasks.push(new HobbyTask("play the piano"));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new WorkTask(today, "learn angular", "high"));
tasks.push(new WorkTask(tomorrow, "learn android", "medium"));

console.log(tasks);
