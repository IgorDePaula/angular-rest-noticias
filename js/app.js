var NoticiasApp = angular.module('NoticiaApp', ['ngRoute', 'Controllers','Services']);

NoticiasApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
                when('/noticias', {
                    templateUrl: 'partials/home.html',
                    controller: 'Home'
                }).
                when('/noticia/:id', {
                    templateUrl: 'partials/noticia.html',
                    controller: 'Noticias'
                }).
               
                otherwise({
                    redirectTo: '/noticias'
                });
    }]);

