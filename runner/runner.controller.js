(function () {

  angular
    .module('runner')

    .controller('RunnerController', function ($scope, RunnerService){

      RunnerService.getRuns().success(function (runList) {
        console.log(runList);
        $scope.displayList = runList;

        var pace = 0;
        var distance = 0;
        var duration = 0;
        var paceArr = [];
        for(var i = 0; i < runList.length; i++){
          distance += parseFloat(runList[i].Distance);
          // console.log("This is the total distance of all runs", distance);
          var x = runList[i].Duration;
          x = x.replace(/:/g, '');
          duration += parseInt(x);
          // console.log("This is the total time of all runs", duration);
          pace = ((Math.round(duration / distance) * 0.01).toFixed(2));
          // console.log("Your Current Pace is:", pace);
          $scope.runningPace = pace;

          paceArr.push(pace);
          paceArr.sort(function(a,b){
            return(a - b);
          });
          console.log("This is the sorted Pace Array",paceArr);
          $scope.sortedPaceArr = paceArr;
        }
      });
        $scope.addRun = function (newRun) {
          console.log(newRun);
          RunnerService.addRun(newRun);
          document.getElementById("date").value = '';
          document.getElementById("distance").value = '';
          document.getElementById("duration").value = '';
          document.getElementById("shoe").value = '';
          document.getElementById("temperature").value = '';
        };
        $scope.getFile = function () {
          var runData=[];
          var selectedFile = document.getElementById('files').files[0];
          console.log("GetFile is firing", selectedFile);
              Papa.parse(selectedFile, {
                header: true,
                complete: function(results) {
                  console.log("These are the results of the parsed CSV file",results);
                  var limitedReturn = results.data.slice(0,50);
                  RunnerService.addRun(limitedReturn);
                }
              });
        };

        });
})();
