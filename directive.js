var app= angular.module('usersApp');
app.directive('aml', function(){
    return {
        template: ' <img src="https://fairtrade.se/app/uploads/2016/04/blommor-produktsidan.png">',
        restrict: 'E',
    };
});