/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'services/all',
    'routes/all',
    'controllers/all',
    'directives/all',
    'filters/all',
    'resources/all',
    'constants/all',
    'angular',
    'angular-route',
    'angular-animate',
    'angular-translate'
], function (config) {
    'use strict';

    var name = config.name;
    angular
        .module(name, [
            'ngRoute',
            'ngAnimate',
                name + '.routes',
                name + '.services',
                name + '.controllers',
                name + '.directives',
                name + '.filters',
                name + '.resources',
                name + '.constants'
        ])
        .run([
            '$rootScope',
            '$log',
            'menu',
            'info',
            'Settings',
            'register',
            'VISITOR_EVENTS',
            function ($rootScope, $log, menu, info, Settings, register, VISITOR_EVENTS) {

                $rootScope.isSignIn = register.isSignIn();
                $rootScope.visitor = register.visitor();

                $rootScope.menu = menu;
                $rootScope.info = info;

                console.log($rootScope.menu)

                $rootScope.fetchSettings = function (force) {
                    if (force || !$rootScope.settings) {
                        Settings.query(function (res) {
                            var settings = {};
                            res.forEach(function (setting) {
                                settings[setting.key] = setting.value;
                            });
                            $rootScope.settings = settings;
                        });
                    }
                };

                $rootScope.$on(VISITOR_EVENTS.signInSuccess, function (event) {
                    $log.log(VISITOR_EVENTS.signInSuccess);

                    $rootScope.isSignIn = true;
                    $rootScope.visitor = register.visitor();
                    $rootScope.fetchSettings();
                });

                $rootScope.$on('$routeChangeStart', function (event, next, current) {
                    $log.log('routeChangeStart:', next.controller);

                });

                if ($rootScope.isSignIn) {
                    $rootScope.fetchSettings();
                } else {
                    register.signIn();
                }
            }
        ]);
});