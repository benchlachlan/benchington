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

                //Add local data transactions length to the total count
                res.data.totalCount += localTransactions.length;

                //compute whether or not I should show some local data at the end of a list on a page.
                var apiDataLength = res.data.transactions.length;
                if (apiDataLength <= 10) {
                    var getHowManyLocal = 10 - apiDataLength;
                    var mergedData = mergeTransactions(res.data, localTransactions, getHowManyLocal);
                    deferred.resolve(mergedData);
                } else {
                    deferred.resolve(res.data);
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
            localData.splice(0,howMany);
            apiData.transactions = apiData.transactions.concat(localData);


            return apiData;
        }
    }
})();
