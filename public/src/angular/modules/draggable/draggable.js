app.controller("DraggableController", function($scope) {
        $scope.addText = "";


      $scope.dropSuccessHandler = function($event,index,array){
          array.splice(index,1);
          console.log("drop success handler");
      };

      $scope.onDrop = function($event,$data,array){
          array.push($data);
          console.log("on drop");
      };

    $scope.modules = [];

    $scope.createModule = function(directive, controller) {
        $scope.modules.push({directive: directive, controller: controller});
    }

    $scope.sortableOptions = {
        update: function(e, ui) {
           console.log("update", e, ui);
        },
        stop: function(e, ui) {
            console.log("stop", e, ui);
        },
        disabled: false
    };
});

app.controller('DragDropCtrl', function ($scope) {

  // Drop handler.
  $scope.onDrop = function (data, event) {
    // Get custom object data.
    var customObjectData = data['json/custom-object']; // {foo: 'bar'}

    // Get other attached data.
    var uriList = data['text/uri-list']; // http://mywebsite.com/..

    // ...
    console.log("dropped");
  };

  // Drag over handler.
  $scope.onDragOver = function (event) {
    // ...
    console.log("drag over function");
  };
});

app.controller('JqueryUIController', ['$scope', function ($scope) {

}]);
