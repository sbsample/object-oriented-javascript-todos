var newTodoList = function() {
	this.tasks = [];
};

newTodoList.prototype.add = function(item){
  this.tasks.push(new Task(item, (this.tasks.length +1)))
};

newTodoList.prototype.list = function(){
  for (i=0; i < this.tasks.length; i++){
    console.log(this.tasks[i]);
  };
};

var Task = function (description, id) {
  this.id = id
  this.description = description;
  this.completed = false;
};


Task.prototype.complete = function () {
  this.completed = true;
};

Task.prototype.remove = function () {
  this.delete
  console.log("Removed");
};
// Driver code


var groceryList = new newTodoList();
groceryList.add('apple');
groceryList.add('banana');
groceryList.add('orange');
groceryList.list();

var breadTask = groceryList.tasks[0];

console.log(breadTask.id); //-> 1 (some unique numerical ID)
console.log(breadTask.description); //-> 'bread'
console.log(breadTask.completed); //-> false
breadTask.complete();
console.log(breadTask.completed);

groceryList.list();

breadTask.remove();


