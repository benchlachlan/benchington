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
  function routing($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home/:page',
        templateUrl: 'components/home/home-template.html',
        controller: 'HomeCtrl',
        controllerAs: 'home',
        resolve: {
            transactions: function($stateParams, homeService) {
                return homeService.getTransations($stateParams.page);
            },
            totalCount: function(homeService) {
                return homeService.getTotalCount();
            }
        }
      })
      .state('add-transaction', {
        url: '/add',
        templateUrl: 'components/add-transaction/add-transaction-template.html',
        controller: 'AddTransactionCtrl',
        controllerAs: 'transactionVM',
      })
      .state('404', {
        url: '/404',
        template: '<h3>Uh oh, that\'s likely a big ol\' 404 or something much, much worse.<br><br> <a ui-sref="home({ page: 1 })"">Take me back to safety :(</a></h3>',
      });

    $urlRouterProvider.otherwise('/home/1');
  }
})();
