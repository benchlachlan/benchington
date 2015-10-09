(function() {
    'use strict';

    angular
        .module('bench.directive')
        .directive('benchHeader', benchHeader);

    function benchHeader() {
        var directive = {
            restrict: 'E',
            templateUrl: 'common/directives/bench-header/bench-header-template.html',
            controller: BenchHeaderCtrl,
            controllerAs: 'benchHeader',
            bindToController: true
        };

        return directive;
    }


    function BenchHeaderCtrl() {
        var benchHeader = this;

        activate();

        function activate() {

        }
    }
})();
