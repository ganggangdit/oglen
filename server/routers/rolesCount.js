/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Role'
], function (Role) {
    'use strict';

    return function (route) {
        route
            .get(function (req, res, next) {
                Role
                    .count()
                    .exec(function (err, docs) {
                        route.cap(err, res, function () {
                            res.send({
                                count: docs
                            });
                        });
                    });
            });
    };
});

