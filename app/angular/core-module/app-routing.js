(function() {
angular
    .module('bench.routing', [])
    .config(routing);

    /**
    * @memberof bench.routing
    * @ngdoc config
    * @name App Router
    * @description
    *   The global router component. Using ui.router https://github.com/angular-ui/ui-router
    *   Add routes for the application here, also serves as a nice overhead view of all
    *   available routes.
    */
    function routing($stateProvider,$urlRouterProvider) {

    	$stateProvider
    		.state('home', {
    			url: '/',
    			template: '<home-route></home-route>',
    			controller: 'HomeCtrl',
                controllerAs: 'home'
    		});

        $urlRouterProvider.otherwise('/');
    }
})();
