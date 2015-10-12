(function() {
    'use strict';

    /**
    * @memberof bench.add-transaction
    * @ngdoc controller
    * @name Add Invoice Controller
    * @description
    *   A controller for the add transaction route.
    *   controls the ability to add an transaction to loca storage leveraging addInvoiceService
    *
    *   NOTE TO BENCH: I would like to use directives for everything, but I also want to use the power of resolve.
    *   I found that just making a controller for a route is the best case scenario as all resolves get injected into
    *   the contoller. Making the resolve inject directly into a directive is a little messy, so I didn't do it.
    */
    angular
        .module('bench.add-transaction')
        .controller('AddTransactionCtrl', AddTransactionCtrl);

    function AddTransactionCtrl(addTransactionService, $state) {
        var transactionVM = this;

        transactionVM.addToLocalStorage = addToLocalStorage;

        function addToLocalStorage() {
            addTransactionService.addTransaction(transactionVM.transaction);
            $state.go('home', {page : 1});
        }
    }
})();
