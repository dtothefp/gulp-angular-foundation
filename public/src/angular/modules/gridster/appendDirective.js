app.directive("appendHtml", function() {
  return {
    restrict: 'A',
    scope: {
      template: "="
    },
    link: function postlink(scope, elm, attrs) {
      elm.append(angular.element(scope.template));
      //elem.attr("gridster-item", "element");
      // var innerElm = angular.element(scope.template);
      // innerElm.attr("gridster-item", "element");
      // elm.append(innerElm);
    }
  }
});
