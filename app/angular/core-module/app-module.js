(function() {

/**
* @memberof bench
* @ngdoc module
* @name App Module
* @description
*   The global module. Declare any dependencies for the application here.
*/
angular
    .module('bench', [
        'ui.router',
        'angular-capitalize-filter',

        'bench.templates',
        'bench.config',
        'bench.routing',
        'bench.run',
        'bench.directive',
        'bench.service',
        'bench.filter',

        'bench.home'
    ]);

})();
