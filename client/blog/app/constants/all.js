/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'constants/menu',
    'constants/info',
    'constants/VISITOR_EVENTS',
    'angular'
], function (config, menu, info, VISITOR_EVENTS) {
    'use strict';

    var constants = angular.module(config.name + '.constants', [])
        .constant('menu', menu)
        .constant('info', info)
        .constant('VISITOR_EVENTS', VISITOR_EVENTS);

    return constants;
});