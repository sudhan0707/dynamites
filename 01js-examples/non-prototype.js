'use strict';

(function(){
 // Self invoking function

// function constructor
   function Employee (fname, lname, age) {

   		this.fname = fname;
   		this.lname = lname;
   		this.age = age;

   		this.getFullname = function (){
   			return this.fname + ' ' +this.lname;
   		};

   		this.getAge = function (){
   			return this.age;
   		}
   }

//Object creation

var john = new Employee('John', 'Doe', 37);
var jane = new Employee('Jane', 'Smith', 39);


})();