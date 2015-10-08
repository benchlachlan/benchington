(function() {
    'use strict';

    angular
        .module('bench.service')
        .factory('apiService', apiService);

    function apiService($q, $http) {
        var service = {
            getResource: getResource
        };

        return service;

        function getResource() {

        }
    }
})();
