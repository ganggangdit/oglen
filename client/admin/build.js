/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

requirejs.config({
    paths: {
        // Libs
        'jquery': 'lib/jquery/dist/jquery.min',
        'underscore': 'lib/underscore/underscore',
        'crypto': 'lib/crypto/crypto.min',
        'bootstrap': 'lib/bootstrap/dist/js/bootstrap.min',
        'angular': 'lib/angular/angular.min',
        'angular-resource': 'lib/angular-resource/angular-resource.min',
        'angular-route': 'lib/angular-route/angular-route.min',
        'angular-animate': 'lib/angular-animate/angular-animate.min',
        'angular-translate': 'lib/angular-translate/angular-translate.min',
        // Apps
        'config': 'writer/app/config',
        'app': 'writer/app/app',
        'services': 'writer/app/services',
        'controllers': 'writer/app/controllers',
        'routes': 'writer/app/routes',
        'directives': 'writer/app/directives',
        'filters': 'writer/app/filters',
        'resources': 'writer/app/resources',
        'constants': 'writer/app/constants'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        angular: {
            deps: ['jquery']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-translate': {
            deps: ['angular']
        }
    }
});