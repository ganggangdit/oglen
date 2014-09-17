/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Comment'
], function (Comment) {
    'use strict';

    return function (route) {
        route
            .get(function (req, res, next) {
                var id = req.param('id');

                Comment
                    .findById(id)
                    .exec(function (err, docs) {
                        route.cap(err, res, function () {

                            res.send(docs);
                        });
                    });
            })
            .post(function (req, res, next) {
                var comment = new Comment(req.body);
                comment.save(function (err, product, numberAffected) {
                    route.cap(err, res, function () {

                        res.send(comment);
                    });
                });
            })
            .put(function (req, res, next) {
                var form = req.body;

                Comment.update({
                    _id: form._id
                }, {
                    name: form.name,
                    privilege: form.privilege,
                    note: form.note
                }, function (err, numberAffected, raw) {
                    route.cap(err, res, function () {

                        res.send(form);
                    });
                });
            })
            .delete(function (req, res, next) {

                var id = req.param('id');

                Comment.remove({
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
