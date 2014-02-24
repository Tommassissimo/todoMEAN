function TodoListController($scope) {
  $scope.todos = [];

  $scope.doneFilter = {done: true};
  $scope.notDoneFilter = {done: false};

  $scope.setTodos = function (todos) {
    console.log(todos);
    $scope.todos = todos;
  };
}