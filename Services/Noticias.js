var NoticiasAppServices = angular.module('Services', ['ngResource']);

var NoticiaServices = function($resource) {
    return $resource('http://www.irmnet.com.br/api/getnoticia?noticia=:idnoticia', {}, {
        get: {method: 'GET', params: {}}
    });
};