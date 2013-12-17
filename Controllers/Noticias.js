'use strict';
var NoticiaAppControllers = angular.module('Controllers', []);

var NoticiasController = function($scope, $routeParams, NoticiaServices) {
    $scope.noticia = NoticiaServices.getNoticia({idnoticia: $routeParams.id},function(phone) {
        $scope.noticia = phone;
    });

}

