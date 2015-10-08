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
    function HomeCtrl(transactions) {
        var home = this;
        activate();

        function activate() {
            home.transactions = transactions;
        }
    }
})();
