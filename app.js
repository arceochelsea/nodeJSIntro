// //normal function statement
function sayHi(){
    console.log('hi');
}

sayHi();

// //function expression
var sayBye = function (){ //this is an anonymous function, setting it equal to a variable.
console.log('bye');
};

sayBye();

//

function callFunction (fun) {
    fun();
} 

var sayBye = function (){ //this variable is gonna be passed to ^function above
    console.log('bye');
};
    
callFunction(sayBye);

