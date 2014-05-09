app.directive('sharePhoto', function() {
  return {
    restrict: "A",
//    scope: {
//        title: "="
//    },
    link: function(scope, elm, attrs) {
        //debugger;
    },
    replace: true,
    templateUrl: "share_photo.html"
  }
});
