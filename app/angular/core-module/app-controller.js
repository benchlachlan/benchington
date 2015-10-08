(function() {
    'use strict';

    angular
        .module('bench')
        .controller('AppCtrl', AppCtrl);

    /* @ngInject */
    function AppCtrl() {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'AppCtrl';

    }
})();
