(function () {
  "use strict";

  angular
    .module('runner',[
      'ngRoute',
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'Views/home.html',
          controller: 'RunnerController'
    });
  });
})();
