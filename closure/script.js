
// function expression
var validateDataForAge = function(data){
   var person = data();

   if(person.age > 1 || person.age < 99){
   	 return true;
   } else {
   	 return false;
   }
}

//function expression
var handleExceptionForAge = function(error){
   console.log('Invalid age entered');
}

// function expression
var generatorForEngineer = function(){
	var person = {
          name: 'Alex Martin',
          age : Math.floor(Math.random() * (100 -1))
	}

	return person;
}

//function declaration
function processRequest(data, validateAge, handleError){
    var valid = validateAge(data);

    if(!valid) {
    	handleError(data);
    } else {
    	console.log('Valid user');
    }
}

//processRequest(generatorForEngineer, validateDataForAge, handleExceptionForAge);

processRequest(generatorForEngineer, function(data){
 console.log(" Within new function expression" + data());
  return true;
}, handleExceptionForAge);
