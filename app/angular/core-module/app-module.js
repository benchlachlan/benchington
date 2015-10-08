(function() {

angular
    .module('bench', [
        'ui.router',

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
