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
                var id = req.param('id');

                Setting
                    .findById(id)
                    .exec(function (err, docs) {
                        route.cap(err, res, function () {

                            res.send(docs);
                        });
                    });
            })
            .post(function (req, res, next) {
                var setting = new Setting(req.body);

                setting.save(function (err, product, numberAffected) {
                    route.cap(err, res, function () {

                        res.send(setting);
                    });
                });
            })
            .put(function (req, res, next) {
                var form = req.body;

                Setting.update({
                    _id: form._id
                }, {
                    key: form.key,
                    value: form.value,
                    note: form.note
                }, function (err, numberAffected, raw) {
                    route.cap(err, res, function () {

                        res.send(form);
                    });
                });
            })
            .delete(function (req, res, next) {

                var id = req.param('id');

                Setting.remove({
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