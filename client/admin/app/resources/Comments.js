/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return ['resource', function (resource) {
        var Comments = resource('/comments/:skip/:limit');
        Comments.count = resource('/comments/count');
        return Comments;
    }];
});