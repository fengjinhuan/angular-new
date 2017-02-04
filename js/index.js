window.addEventListener('DOMContentLoaded',function(){
    var sH=document.documentElement.clientHeight;
    var headH=document.querySelector('header').offsetHeight;
    var sectionH=document.querySelector('section');
    sectionH.style.height=sH-headH+"px";
})
var arr=[
    {
        title:'我是标题一',
        content:'我是内容一',
        id:'1',
        time:'2012-2-3-15'
    },
    {
        title:'我是标题二',
        content:'我是内容二',
        id:'2',
        time:'2014-2-3-15'
    },
    {
        title:'我是标题三',
        content:'我是内容三',
        id:'3',
        time:'2012-12-3-15'
    }
]
var app=angular.module('app',['ctrl']);
app.controller('pdd',function($scope,$location){
    $scope.name='新闻列表',
    $scope.arr=arr;
    $scope.edit=function(){
        $location.url('/edit')
    }
    $scope.send=function(){
        $location.url('/')
    }
      
    $scope.gei=function(e){
      $scope.nowid=e;
    } 
})
app.controller('add',function($scope,$location){
    $scope.t="";
	$scope.c="";
    $scope.adds=function(e){
        $scope.one={
		 id:e,
		 title:$scope.t,
		 content:$scope.c,
		 time:new Date().getTime(),
	    }
        console.log($scope.t,$scope.c)
       $scope.arr.push($scope.one)
        $location.url('/')
    } 
})