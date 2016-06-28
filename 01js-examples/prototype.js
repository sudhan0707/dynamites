'use strict';

var word = "globaltest12"; // Global Variable

(function(){
 // Self invoking function
var word1 = "localtest12"; // local Variable

// function constructor
   function Employee (fname, lname, age) {

   		this.fname = fname;
   		this.lname = lname;
   		this.age = age;
   }

   Employee.prototype.getFullName = function(){
      return this.fname + ' ' +this.lname;
   };

   Employee.prototype.getAge = function(){
      return this.age;
   }

//Object creation

var john = new Employee('John', 'Doe', 37);
var jane = new Employee('Jane', 'Smith', 39);

debugger;
})();