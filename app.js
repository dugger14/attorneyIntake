var aIntakeApp = angular.module('aIntakeApp', []);

aIntakeApp.controller('mainCtrl', function($scope) {
  
  $scope.names = ['Bank of America','Judge Henry R. Thomas','Crowder Inc.'];
  
  $scope.addName = function() {
    $scope.names.push($scope.enteredName);
    $scope.enteredName = '';
  };
  
  $scope.removeName = function(name) {
    var i = $scope.names.indexOf(name);
    $scope.names.splice(i, 1);
  };
  
}); 
