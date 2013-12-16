var NoticiasAppServices = angular.module('Services', ['ngResource']);

var HomeServices = function($resource) {
    return $resource('http://www.irmnet.com.br/api/getnoticias', {}, {
        getNoticias: {method: 'GET', params: {}, isArray: true}
    });
}