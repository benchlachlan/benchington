(function() {

angular
    .module('bench.run', [])
    .run(run);

    /**
    * @memberof bench.run
    * @ngdoc run
    * @name App Run
    * @description
    *   The global run component. Used to configure any code that needs to be
    *   executed between configure and controller init. Great for auth checks.
    */
    function run($rootScope, $state) {
        $rootScope.$on('$stateChangeError', function(event) {
            event.preventDefault();
            $state.go('404');
        });
    }

})();
