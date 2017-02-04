var ctrl=angular.module('ctrl',['ngRoute']);
ctrl.config(['$routeProvider',function($s){
    $s.when('/',{
        templateUrl:'tpls/list-index.html' 
    }).when('/add',{
        templateUrl:'tpls/add.html',
        controller:"add"
    }).when('/show/:id',{
        templateUrl:'tpls/show.html',
    }).when('/edit',{
        templateUrl:'tpls/edit.html'
    })
}])
