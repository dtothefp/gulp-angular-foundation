app.directive('appendTemplate', function ($rootScope, $compile) {
  return {
    restrict: 'A',
    scope: {
      template: "="
    },
    link: function postlink(scope, elm, attrs) {
      // var compiled = $compile(scope.template)($rootScope);
      // // attempt to add dynamically add the gridster-item directive
      // //compiled.attr("gridster-item", "template");
      // compiled.attr("id", Math.random());
      elm.append(scope.template);
      var innerElm = elm.children()[elm.children().length - 1];
    }
  };
})
