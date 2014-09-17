/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/User'
], function (User) {
    'use strict';

    return function (route) {
        route
            .get(function (req, res, next) {
                var skip = req.param('skip') || 0;
                var limit = req.param('limit') || 100;
                User
                    .find()
                    .select('-password -salt')
                    .skip(skip)
                    .limit(limit)
                    .sort({_id: -1})
                    .populate({
                        path: 'role',
                        select: '_id name'
                    })
                    .exec(function (err, docs) {
                        route.cap(err, res, function () {
                            res.send(docs);
                        });
                    });
            });
    };
});