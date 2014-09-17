/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'constants/menu',
    'constants/info',
    'constants/AUTH_EVENTS',
    'angular'
], function (config, menu, info, AUTH_EVENTS) {
    'use strict';

    var constants = angular.module(config.name + '.constants', [])
        .constant('menu', menu)
        .constant('info', info)
        .constant('SALT', 'd8437cf0a5416a9742fc8742dd22b6fb')
        .constant('AUTH_EVENTS', AUTH_EVENTS);

    return constants;
});