app.directive('dynamicDirective',function($compile){
    return {
        restrict: 'A',
        replace: false,
        terminal: true,
        priority: 1000,
        link:function(scope,element,attrs){
            var module = scope.$eval(attrs.dynamicDirective);
            element.attr(module.directive,"");//add dynamic directive
            //element.parent().attr("ng-controller", module.controller);
            //debugger;
            element.removeAttr("dynamic-directive"); //remove the attribute to avoid indefinite loop
            element.removeAttr("data-dynamic-directive");

            $compile(element)(scope);
        }
    };
});
