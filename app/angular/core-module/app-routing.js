(function() {
angular
    .module('bench.routing', [])
    .config(routing);

    function routing($stateProvider,$urlRouterProvider) {

    	$stateProvider
    		.state('home', {
    			url: '/',
    			templateUrl: 'components/home/home-template.html',
    			controller: 'HomeCtrl',
                controllerAs: 'vm'
    		});

        $urlRouterProvider.otherwise('/');
    }
})();
