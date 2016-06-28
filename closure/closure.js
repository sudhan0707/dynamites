(function(){
  
  function counter(){
     var count = 0

     return function(){
     	console.log(count += 1) ;
     }

  }

  var increment = counter();
  
  increment(); //1
  increment();
  increment();
  increment();
  increment();
  increment();

})();