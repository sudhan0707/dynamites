'use strict';


(function(){
 // Self invoking function
   function employeeFactory (fname, lname, age) {
         var temp = {};
         temp.fn = fname;
         temp.ln = lname;
         temp.age = age;
      return temp;
   }
   debugger;
    
})();