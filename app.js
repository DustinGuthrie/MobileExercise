(function () {
  "use strict";

  angular
    .module('MobileInterview',[
      'ngRoute',
      'runner'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/404', {
          templateUrl: 'Views/404.html'
        })
        .otherwise({ redirectTo: 'Views/home.html'});

    });

})();
