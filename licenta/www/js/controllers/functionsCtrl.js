angular.module('functionsCtrl', [])
  .controller('functionsCtrl', function($scope,$cordovaBluetoothLE) {

  $scope.enable=function () {
    document.addEventListener("deviceready", function () {
      alert('x');
      $cordovaBluetoothLE.initialize({request:true}).then(null,
        function(obj) {
          alert("x")
          alert(JSON.stringify(obj));
        },
        function(obj) {
          alert("y")
          alert(JSON.stringify(obj));
        }

      )
    }, false);
  }

  $scope.startScan=function(){
    document.addEventListener("deviceready", function () {

      $cordovaBluetoothLE.startScan({services:[]}).then(null,
        function(obj) {
          //Handle errors
          alert(JSON.stringify(obj));
        },
        function(obj) {
          if (obj.status == "scanResult")
          {
            alert(JSON.stringify(obj));
          }
          else if (obj.status == "scanStarted")
          {
            alert("scan started")
            alert(JSON.stringify(obj));
          }
        }

      );
    }, false);
  }

})
