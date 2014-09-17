/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Setting'
], function (Setting) {
    'use strict';

    return function (route) {
        route
            .get(function (req, res, next) {
                var skip = req.param('skip') || 0;
                var limit = req.param('limit') || 1000;
                var scope = req.param('scope') || 'home';
                var criteria = {scope: scope};

                if (req.user.role) {
                    // admin require
                    criteria = {};
                }
                Setting
                    .find(criteria)
                    .skip(skip)
                    .limit(limit)
                    .sort({
                        _id: -1
                    })
                    .exec(function (err, docs) {
                        route.cap(err, res, function () {
                            res.send(docs);
                        });
                    });
            });
    };
});