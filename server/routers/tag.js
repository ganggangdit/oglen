/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Tag'
], function (Tag) {
    'use strict';

    return function (route) {
        route
            .get(function (req, res, next) {
                var id = req.param('id');
                Tag
                    .findById(id)
                    .exec(function (err, docs) {
                        route.cap(err, res, function () {

                            res.send(docs);
                        });
                    });
            })
            .post(function (req, res, next) {
                var tag = new Tag(req.body);
                tag.save(function (err, product, numberAffected) {
                    route.cap(err, res, function () {

                        res.send(tag);
                    });
                });
            })
            .put(function (req, res, next) {
                var form = req.body;
                Tag.update({
                    _id: form._id
                }, {
                    name: form.name
                }, function (err, numberAffected, raw) {
                    route.cap(err, res, function () {

                        res.send(form);
                    });
                });
            })
            .delete(function (req, res, next) {
                var id = req.param('id');
                Tag.remove({
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

