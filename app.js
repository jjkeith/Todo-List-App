angular.module('todoApp', []); // sets the todoApp module

// angular
//   .module('todoApp')
//   .value('secretOfLife', 42)

angular.module('todoApp') // gets the todoApp module
  .controller('TaskController', TaskControllerFunc);// add controller to the module

TaskControllerFunc.$inject = ['$http']

function TaskControllerFunc($http) {
  console.log('Instantiated TaskController');
  // console.log('The secret of life is ', secretOfLife);
  $http
    .get('https://www.reddit.com/r/programming.json')
    .success(function(response){console.log(response)});



  this.todoList = ['Buy cat food', 'Oil change', 'Take curtains to the cleaner', 'Buy present for party',]
  this.addTask = function(taskName) {
    this.todoList.push(taskName)
    this.newTask = ''
  }
  this.updateTask = function(task, index){
    this.todoList.splice(index, 1, task)
  }
  this.destroyTask = function(task)  {
    var index = this.todoList.indexOf(task)
    this.todoList.splice(index, 1)
  }


}
