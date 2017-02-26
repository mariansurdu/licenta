angular.module('dataCtrl', [])
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
