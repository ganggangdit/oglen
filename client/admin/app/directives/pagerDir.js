/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    /**
     * @private
     * @param {Number} skip is query offset;
     * @param {Number} limit is query limit;
     * @param {Number} count is chain max size;
     * @param {Number} size is chain max size;
     * @param {Function} fn is refresh callback if query over from count range;
     * @returns {Array} pager chain;
     */
    function createChain(skip, limit, count, size, fn) {
        var chain = [];
        var total = Math.ceil(count / limit);
        var inter = size - 2;
        var current = skip / limit;

        if (skip !== 0 && skip >= count) {
            fn && fn((total - 1) * limit, limit);
            return chain;
        }

        if (total < 2) {
            return chain;
        }

        if (total > size) {
            var start = current - Math.floor(inter / 2);

            if (start < 1) {
                start = 1;
            } else if (current + Math.ceil(inter / 2) > total - 1) {
                start = total - inter - 1;
            }

            chain.push({
                num: 1,
                skip: 0
            });
            for (var i = start; i < inter + start; ++i) {
                chain.push({
                    num: i + 1,
                    skip: i * limit
                });
            }
            chain.push({
                num: total,
                skip: ( total - 1 ) * limit
            });
        } else {
            for (var i = 0; i < total; ++i) {
                chain.push({
                    num: i + 1,
                    skip: i * limit
                });
            }
        }
        return chain;
    }

    return [
        '$rootScope',
        '$route',
        '$location',
        function ($rootScope, $route, $location) {

            return {
                restrict: 'E',
                templateUrl: 'app/templates/pager.html',
                replace: true,
                scope: {
                    skip: '=',
                    limit: '=',
                    count: '=',
                    base: '@'
                },
                link: function (scope, ele, attrs) {
                    if ($rootScope.isLogin) {
                        $rootScope.$watch('settings', function (settings) {
                            if (settings) {
                                var size = settings['pager_size'] || 5;

                                scope.$watch('count', function (count) {
                                    if (count >= 0) {
                                        scope.chain = createChain(scope.skip - 0, scope.limit - 0, count - 0, size - 0, function (skip, limit) {
                                            $location.path('/' + scope.base + '/' + skip + '/' + limit);
                                        });
                                    }
                                });
                            }
                        });
                    }
                }
            };
        }];
});