var NoticiasAppServices = angular.module('Services', ['ngResource']);

NoticiasAppServices.factory('NoticiaServices', ['$resource',NoticiaServices]);
NoticiasAppServices.factory('HomeServices', ['$resource',HomeServices]);