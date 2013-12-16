var NoticiasAppServices = angular.module('Services', ['ngResource']);

NoticiasAppServices.factory('NoticiaServices', ['$resource',NoticiaService]);
NoticiasAppServices.factory('HomeServices', ['$resource',HomeServices]);