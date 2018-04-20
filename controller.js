var app = angular.module('usersApp');

app.controller('FirstController', ['$scope', '$http', function($scope, $http){

$scope.showData= function(){
    var url='https://jsonplaceholder.typicode.com/users';
    $http.get(url)
    .then(function(users){
        
        $scope.users= users.data;
    });
};
$scope.showDo= function(){
    var url='https://jsonplaceholder.typicode.com/todos';

    $http.get(url)
    .then(function(todo){
        $scope.todo= todo.data;
    })
};

}]);
app.controller('ResultsController', ['$scope', function($scope){
$scope.blommor=['Yasmin', 'Jory', 'Equan','Lilja', 'Lilian', 'Linnea', 'Malva', 'Mimosa', 'Mynta'];
}]);