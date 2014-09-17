/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return [
        '$rootScope',
        '$scope',
        '$routeParams',
        '$location',
        'Setting',
        function ($rootScope, $scope, $routeParams, $location, Setting) {

            $rootScope.$watch('settings', function (settings) {
                if ($rootScope.isLogin && settings) {

                    var id = $routeParams.id;

                    if (id) {
                        // edit
                        $scope.setting = Setting.get({id: id});
                    } else {
                        // add
                        $scope.setting = {};
                    }

                    $scope.submit = function (setting) {
                        event.preventDefault();

                        var $setting = setting;

                        if ($setting._id) {
                            // update existing setting
                            Setting.update($setting, function (setting) {
                                // update local setting
                                $rootScope.settings[setting.key] = setting.value;
                                // todo: alert success.
                            });
                        } else {
                            // create new setting
                            Setting.save($setting, function (setting) {
                                $setting._id = setting._id;
                                // update local setting
                                $rootScope.settings[setting.key] = setting.value;

                                var path = $location.path;
                                path(path() + $setting._id, true);
                            });
                        }
                    };
                }
            });
        }];
});