let app = angular.module('todoApp', []);
app.controller('mainCtrl', function($scope){
    $scope.todo_list = [];
    
    $scope.new_todo = null;

    $scope.add_new_todo = function($event) {
        if ($event.keyCode == 13 && $scope.new_todo) {
            let todo_obj = {
                title: $scope.new_todo,
                is_done: false
            };

            $scope.todo_list.push(todo_obj);

            $scope.new_todo = null;
        }
    };

    $scope.complete_todo = function(todo){
        todo.is_done = true;
    };

    $scope.delete_todo = function(index){
        $scope.todo_list.splice(index, 1);
    };

    $scope.$watch('todo_list', function(newVal, oldVal) {
        let data = JSON.stringify(newVal);
        window.localStorage.setItem('saved_todo_lists', data);
    }, true);

    const saved_data = window.localStorage.getItem('saved_todo_lists');
    if (saved_data) {
        $scope.todo_list = JSON.parse(saved_data);
    }
});

