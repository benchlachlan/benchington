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
    			url: '/:page',
    			templateUrl: 'components/home/home-template.html',
    			controller: 'HomeCtrl',
                controllerAs: 'home',
                resolve: {
                    /* @ngInject */
                    transactions: function($stateParams, homeService) {
                        return homeService.getTransations($stateParams.page);
                    }
                }
    		})
            .state('404', {
    			url: '/404',
    			template: '<h3>Uh oh, that\'s a big ol\' 404. <a ui-sref="home({ page: 1 })"">Take me back to safety :(</a></h3>',
    		});

        $urlRouterProvider.otherwise('/404');
    }
})();
