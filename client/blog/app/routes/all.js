/**
 * Created by Justin on 14-6-5.
 */

define([
    'config',
    'angular'
], function (config) {
    'use strict';

    var routes = angular.module(config.name + '.routes', [])
        .config([
            '$routeProvider',
            '$locationProvider',
            function ($routeProvider, $locationProvider) {
                $locationProvider.html5Mode(true);
                $routeProvider
                    .when('/', {
                        templateUrl: 'app/views/posts.html',
                        controller: 'PostsCtrl'
                    })
                    .when('/catalog', {
                        templateUrl: 'app/views/catalog.html',
                        controller: 'CatalogCtrl'
                    })
                    .when('/post/:id?', {
                        templateUrl: 'app/views/post.html',
                        controller: 'PostCtrl'
                    })
                    .when('/about', {
                        templateUrl: 'app/views/about.html',
                        controller: 'AboutCtrl'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
            }]);
    return routes;
});
