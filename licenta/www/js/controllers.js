angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('SettingsCtrl', function($scope) {

})
  .controller('createController', function($scope) {

  })

  .controller("profileCtrl",function($scope){

  })

  .controller("PlanningCtrl",function($scope){

  })

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


  .controller("DataCtrl",function($scope,$cordovaBluetoothLE,$ionicPlatform,$interval){
    //alert("ctrl");
    $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012','2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.series = ['Series A', 'Series B'];
    for (var a=[],i=0;i<40;++i) a[i]=i;

// http://stackoverflow.com/questions/962802#962890
    function shuffle(array) {
      var tmp, current, top = array.length;
      if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
      return array;
    }

    $interval(function(){
      a = shuffle(a);
    },500)

    $scope.data = [
      a,
      a
    ];

    $ionicPlatform.ready(function() {
     // alert("Ready")
      $cordovaBluetoothLE.initialize({request:true}).then(null,
        function(obj) {
          alert("x")
          alert(JSON.stringify(obj));
        },
        function(obj) {
          alert("y")
          alert(JSON.stringify(obj));
        }

      );
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
    })

  })
