(function() {
    'use strict';

    angular
        .module('bench.add-transaction')
        .factory('addTransactionService', addTransactionService);

    /**
    * @memberof bench.add-transaction
    * @ngdoc factory
    * @name Add Invoice Service
    * @description
    *   The necessary methods to abstract away local storage calls for adding an transaction,
    *   also for retrieving those transactions
    */
    function addTransactionService($window) {
        var service = {
            addTransaction: addTransaction,
            getTransactions: getTransactions
        };

        return service;

        function addTransaction(transaction) {
            var transactionArray = $window.localStorage.getItem('transactions');

            if(!transactionArray) {
                transactionArray = [];
            } else {
                transactionArray = JSON.parse(transactionArray);
            }

            transactionArray.push(transaction);
            $window.localStorage.setItem('transactions', JSON.stringify(transactionArray));
        }

        function getTransactions() {
            var transactionArray = $window.localStorage.getItem('transactions');

            if(!transactionArray) {
                return null;
            } else {
                return JSON.parse(transactionArray);
            }
        }
    }
})();
