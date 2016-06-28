'use strict';

(function(){
   
   var Shape = function(){}

   Shape.prototype.getArea = function(){
   	 return this.length * this.width;
   }

   var Rectangle = function(length, width){
      this.length = length;
      this.width = width;
    }

    Rectangle.prototype = Shape.prototype;

    var rect = new Rectangle(10, 20);
    
    console.log(rect);
    console.log(rect.getArea());
    debugger;

})();