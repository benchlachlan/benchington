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
    function homeService($q, $http, addTransactionService) {
        var service = {
            getTransations: getTransations,
            getTotalCount: getTotalCount
        };

        return service;

        /**
         * Get Transactions
         * @memberof homeService
         * @param {integer} the page of transactions you would like to get starting at 1
         */
        function getTransations(page) {
            var deferred = $q.defer();

            //get the local transactions
            var localTransactions = addTransactionService.getTransactions();

            $http({
                // url: ENV_CONSTANTS.apiUrl.v1 + "/" + page + ".json", // I would usually use an environment var for making api calls, but this is a little small for that.
                url: "http://resttest.bench.co/transactions/" + page + ".json",
                method: "GET"
            })
            .then(getTransationsSuccess)
            .catch(getTransationsFail);

            function getTransationsSuccess(res) {

                //compute whether or not I should show some local data at the end of a list on a page.
                var apiDataLength = res.data.transactions.length;
                if (apiDataLength < 10 && !!localTransactions) {
                    var getHowManyLocal = 10 - apiDataLength;
                    var mergedData = mergeTransactions(res.data.transactions, localTransactions, getHowManyLocal);
                    deferred.resolve(mergedData);
                } else {
                    deferred.resolve(res.data.transactions);
                }
            }

            function getTransationsFail(error) {
                //Would usually check for the 404 but api seems to only respond with -1
                deferred.resolve(localTransactions);
            }

            return deferred.promise;
        }

        function mergeTransactions(apiData,localData) {
            var howMany = arguments[2] || 0;

            if(localData.length > howMany) {
                localData.splice(0,howMany);
            }
            apiData = apiData.concat(localData);

            return apiData;
        }

        function getTotalCount() {
            var deferred = $q.defer();

            //get the local transactions
            var localTransactions = addTransactionService.getTransactions();

            $http({
                // url: ENV_CONSTANTS.apiUrl.v1 + "/" + page + ".json", // I would usually use an environment var for making api calls, but this is a little small for that.
                url: "http://resttest.bench.co/transactions/1.json",
                method: "GET"
            })
            .then(getTransationsSuccess)
            .catch(getTransationsFail);

            function getTransationsSuccess(res) {
                if(!!localTransactions) {
                    deferred.resolve(res.data.totalCount + localTransactions.length);
                } else {
                    deferred.resolve(res.data.totalCount);
                }
            }

            function getTransationsFail(error) {
                deferred.reject(error);
            }

            return deferred.promise;
        }
    }
})();
