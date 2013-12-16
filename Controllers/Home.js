'use strict';
var NoticiasAppControllers = angular.module('Controllers',[]);

var HomeController = function($scope, HomeServices){
	$scope.noticias = HomeServices.getNoticias();
	
}