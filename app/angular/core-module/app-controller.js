(function() {
    'use strict';

    angular
        .module('bench')
        .controller('AppCtrl', AppCtrl);

    /**
    * @memberof bench
    * @ngdoc controller
    * @name App Controller
    * @description
    *   The global controller component. Used for any global scope objects, and other global parameters.
    */
    function AppCtrl() {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'AppCtrl';

    }
})();
