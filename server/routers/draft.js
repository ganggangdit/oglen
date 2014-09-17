/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Post',
    'server/models/Draft'
], function (Post, Draft) {
    'use strict';

    return function (route) {
        route
            .get(function (req, res, next) {
                var id = req.param('id');

                Draft
                    .findById(id)
                    .exec(function (err, docs) {
                        route.cap(err, res, function () {

                            res.send(docs);
                        });
                    });
            })
            .delete(function (req, res, next) {

                var id = req.param('id');

                Draft.remove({
                    _id: id
                }, function (err, numberAffected, raw) {
                    route.cap(err, res, function () {
                        res.send({
                            _id: id
                        });
                    });
                });
            });
    };
});