(function () {
  "use strict";

  angular
    .module('runner')
    .factory('RunnerService', function ($http) {
      var url = "https://tiny-tiny.herokuapp.com/collections/RunData";
      // var url = "https://pediaserver.herokuapp.com/api/appointment";
      // var url = "api/collections/appointment";

      var getRuns = function () {
          return $http.get(url);
        };
      var addRun = function (newRun) {
        console.log(newRun);
        $http.post(url, newRun).then(function(data){
          console.log("This is the addRun SERVICE Firing", data);
        });
      };

      return {
        getRuns: getRuns,
        addRun:  addRun
      };
    });

})();
