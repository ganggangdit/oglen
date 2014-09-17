/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return [
        '$rootScope',
        '$routeParams',
        '$scope',
        '$location',
        'Post',
        function ($rootScope, $routeParams, $scope, $location, Post) {
            $rootScope.$watch('settings', function (settings) {
                if ($rootScope.isSignIn && settings) {
                    var id = $routeParams.id;
                    if (id) {
                        $scope.post = Post.get({id: id});
                    }
                }
            });
        }];
});