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
      // var getSingleDependent = function (id) {
      //   console.log("this is getsingledependent in dependent service:", id);
      //   console.log("getsingledependent service is firing!");
      //   return $http.get(getDependent + id);
      // };
      // var updateAppointment = function (updatedAppointment) {
      //   return $http.put(url + '/' + updatedAppointment._id, updatedAppointment);
      // };
      // var removeAppointment = function (appointmentId) {
      //   return $http.delete(url + '/' + appointmentId);
      // };

      return {
        getRuns: getRuns,
        addRun:  addRun
        // addAppointment: addAppointment,
        // removeAppointment: removeAppointment,
        // updateAppointment: updateAppointment,
        // getAppointments: getAppointments,
        // getSingleDependent: getSingleDependent
      };
    });

})();
