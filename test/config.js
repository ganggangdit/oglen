/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {

    var requireConfig = {
        paths: {
            // Libs
            'jquery': '/vendor/jquery/dist/jquery',
            'underscore': '/vendor/underscore/underscore',
            'angular': '/vendor/angular/angular',
            'angular-resource': '/vendor/angular-resource/angular-resource',
            'angular-route': '/vendor/angular-route/angular-route',
            'angular-animate': '/vendor/angular-animate/angular-animate',
            'angular-translate': '/vendor/angular-translate/angular-translate',
            // Apps
            'config': 'config',
            'app': 'app/app',
            'controllers': 'app/controllers',
            'routes': 'app/routes',
            'directives': 'app/directives',
            'filters': 'app/filters',
            'services': 'app/services'
        },
        shim: {
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
    };

    return {
        'name': 'writer.oglen.net',
        'description': 'A Blog for oglen.net',
        'keywords': 'a, b, c',
        'version': '0.1.0',
        'debug': true,
        'languages': {},
        'require': requireConfig
    }
});