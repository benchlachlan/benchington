(function() {
    'use strict';

    angular
        .module('bench.home')
        .factory('homeService', homeService);

    /**
    * @memberof bench.home
    * @ngdoc factory
    * @name Home Api Service
    * @description
    *   The necessary methods to abstract away api calls for the home module.
    *   Inject this into directives and controllers to gain access to home API calls
    */
    function homeService($q, $http) {
        var service = {
            getTransations: getTransations
        };

        return service;

        /**
         * Get Transactions
         * @memberof homeService
         * @param {integer} the page of transactions you would like to get starting at 1
         */
        function getTransations(page) {
            var deferred = $q.defer();

            $http({
                // url: ENV_CONSTANTS.apiUrl.v1 + "/" + page + ".json", // I would usually use an environment var for making api calls, but this is a little small for that.
                url: "http://resttest.bench.co/transactions/" + page + ".json",
                method: "GET",
            })
            .then(getTransationsSuccess)
            .catch(getTransationsFail);

            function getTransationsSuccess(res) {
                deferred.resolve(res.data);
            }

            function getTransationsFail(error) {
                console.error("getTransations FAILED - " + error.status);
                deferred.reject(error);
            }

            return deferred.promise;
        }
    }
})();
