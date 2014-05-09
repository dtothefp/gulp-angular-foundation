app.controller('mainController', function($scope) {
  $scope.message = "Hello World!!!";
  $scope.men = [
      'John',
      'Jack',
      'Mark',
      'Ernie'
      ];


      $scope.women = [
      'Jane',
      'Jill',
      'Betty',
      'Mary'
      ];


      $scope.addText = "";


      $scope.dropSuccessHandler = function($event,index,array){
          array.splice(index,1);
          console.log("drop success handler");
      };

      $scope.onDrop = function($event,$data,array){
          array.push($data);
          console.log("on drop");
      };

    $scope.modules = [
//        {title: "First", directive: "share-photo", controller: "sharePhotoController"},
//        {title: "Second", directive: "share-photo", controller: "sharePhotoController"},
//        {title: "Third", directive: "share-photo", controller: "sharePhotoController"},
//        {title: "Fourth", directive: "share-photo", controller: "sharePhotoController"},
//        {title: "Fifth", directive: "share-photo", controller: "sharePhotoController"},
//        {title: "Sixth", directive: "share-photo", controller: "sharePhotoController"},
//        {title: "Seventh", directive: "share-photo", controller: "sharePhotoController"},
//        {title: "Eigth", directive: "share-photo", controller: "sharePhotoController"}
    ];

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
