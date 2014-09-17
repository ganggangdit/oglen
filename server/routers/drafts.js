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
                var postId = req.param('postId');
                var short = req.param('short');
                var query;

                if (short) {
                    query = Draft
                        .find({post: postId}, '_id saveAt');
                } else {
                    query = Draft
                        .find({post: postId});
                }

                query
                    .exec(function (err, docs) {
                        route.cap(err, res, function () {

                            res.send(docs);
                        });
                    });
            });
    };
});