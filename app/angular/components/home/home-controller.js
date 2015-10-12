(function() {
    'use strict';

    angular
        .module('bench.home')
        .controller('HomeCtrl', HomeCtrl);

    /**
    * @memberof bench.home
    * @ngdoc controller
    * @name Home Controller
    * @description
    *   A controller for the home route.
    *   Gets the list of businesses from the resolve which gets injected into this controller as "businesses".
    *
    *   NOTE TO BENCH: I would like to use directives for everything, but I also want to use the power of resolve.
    *   I found that just making a controller for a route is the best case scenario as all resolves get injected into
    *   the contoller. Making the resolve inject directly into a directive is a little messy, so I didn't do it.
    */
    function HomeCtrl(transactions, $state) {
        var home = this;
        activate();

        home.changePage = changePage;

        function activate() {
            home.transactions = transactions;
            addTotals();
        }

        /**
         * Add Total Amounts
         * @memberof homeService
         * @description adds the total amount of the transactions shown on the page
         */
        function addTotals() {
            home.total = 0;
            for (var i = 0; i < home.transactions.transactions.length; i++) {
                home.total += parseInt(home.transactions.transactions[i].Amount);
            }
        }

        /**
         * Change Page
         * @memberof homeService
         * @description changes the route in home to another page.
         */
        functi
        function changePage() {
            $state.go('home', { 'page' : home.transactions.page });
        }
    }
})();
