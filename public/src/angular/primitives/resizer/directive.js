app.directive('resizer', function($document, $window) {
   return {
       restrict: "A",
       template: "<div class='resizer'>X</div>",
       link: function(scope, elm, attrs) {
           var lastX, lastY;
           var navH = $('nav').height();
           function mouseMove(e) {
               e.preventDefault();
               var elmWidth = elm.parent().width();
               var elmHeight = elm.parent().height();

               var elmBottom = elm.parent().offset().top + elmHeight;
               var elmRight = elm.parent().offset().left + elmWidth;

               var deltaX = Math.abs(lastX - e.pageX);
               var deltaY = Math.abs(lastY - e.pageY);

               debugger;
               if(e.pageX !== elmRight || e.pageY !== elmBottom) {
                   elm.parent().width( Math.abs( elm.parent().offset().left + (parseInt(elm.parent().css("padding-right"), 10) * 2) - e.pageX ) );
                   elm.parent().height( Math.abs( elm.parent().offset().top - e.pageY ) );
                   debugger;
               }

               // constrain element to width of the container
               if(elmWidth < elm.parent().parent().width() || e.pageX < lastX) {
                   // moving right - growing
                   if (lastX < e.pageX) {
                       elm.parent().width(elmWidth + deltaX);
                   }
               }

               // constrain element to 1/4 width of the container
               if(elmWidth > elm.parent().parent().width()/4 || e.pageX > lastX) {
                   // moving left - shrinking
                   if (lastX > e.pageX) {
                       elm.parent().width(elmWidth - deltaX);
                   }
               }

               // constrain element to height of window minus nav
               if(elmHeight < ( $window.innerHeight - ( navH * 2) ) || e.pageY < lastY) {
                   // moving down - growing
                   if (lastY < e.pageY) {
                       elm.parent().height(elmHeight + deltaY);
                   }
               }

               // constrain element height to it's width
               if(elmHeight >= elmWidth || e.pageY > lastY) {
                   // moving up - shrinking
                   if (lastY > e.pageY) {
                       elm.parent().height(elmHeight - deltaY);
                   }
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
           elm.on("mouseleave", function(e) {
               scope.sortableOptions.disabled = false;
               scope.$apply();
               $document.unbind("mousemove", mouseMove);
           });
       }
   }
});