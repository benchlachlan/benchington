(function() {
    'use strict';

    angular
        .module('bench.home')
        .controller('HomeCtrl', HomeCtrl);

    /* @ngInject */
    function HomeCtrl() {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'HomeCtrl';
    }
})();
