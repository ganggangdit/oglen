/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

require([
    'config'
], function (config) {

    requirejs.config(config.require);
    require([
        'angular',
        'angular-route',
        'angular-animate',
        'angular-translate',
        'app'
    ], function () {

        angular.bootstrap(document, [config.name]);

    });
});




