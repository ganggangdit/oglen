/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Tag'
], function (Tag) {
    'use strict';

    return function tagsCount(route) {
        route
            .get(function (req, res, next) {
                Tag
                    .count()
                    .exec(function (err, docs) {
                        route.cap(err, res, function () {

                            res.send({count: docs});
                        });
                    });
            });
    };
});

