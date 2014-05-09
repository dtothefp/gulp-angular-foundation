app.directive('resizer', function($document) {
   return {
       restrict: "A",
       template: "<div class='resizer'></div>",
       link: function(scope, elm, attrs) {
           var lastX, lastY;
           function mouseMove(e) {
               e.preventDefault();
               var elmWidth = elm.parent().width();
               var elmHeight = elm.parent().height();

               var deltaX = Math.abs(lastX - e.pageX);
               var deltaY = Math.abs(lastY - e.pageY);

               // moving left - shrinking
               if (lastX > e.pageX) {
                   elm.parent().width(elmWidth - deltaX);
               }
               // moving right - growing
               else if (lastX < e.pageX) {
                   elm.parent().width(elmWidth + deltaX);
               }

               // moving up - shrinking
               if (lastY > e.pageY) {
                   elm.parent().height(elmHeight - deltaY);
               }
               // moving down - growing
               else if (lastY < e.pageY) {
                   elm.parent().height(elmHeight + deltaY);
               }

               lastX = e.pageX;
               lastY = e.pageY;
           }
           elm.on("mousedown", function(mouseDownEvent) {
               mouseDownEvent.preventDefault();
               lastX = mouseDownEvent.pageX;
               lastY = mouseDownEvent.pageY;
               scope.sortableOptions.disabled = true;
               scope.$apply();
               $document.on("mousemove", mouseMove);
           });
           $document.on("mouseup", function(e) {
               scope.sortableOptions.disabled = false;
               scope.$apply();
               $document.unbind("mousemove", mouseMove);
           });
       }
   }
});