var NoticiasAppControllers = angular.module('Controllers',[]);

NoticiasAppControllers.controller('Home',['$scope','HomeServices',HomeController]);

NoticiasAppControllers.controller('Noticias',['$scope','$routeParams','NoticiaServices', NoticiasController]);
