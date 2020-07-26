var fs = require('fs');

var readMe = fs.readFileSync('readMe.txt', 'utf8'); //goes out and reads readMe.txt 
//block code synchronous meaning it will read this before it continues to another line of code
console.log(readMe);

//fs module has gone out and read the file synchronously, used utf8 to enstore in readMe variable 

//another method

var fs = require('fs');

var readMe = fs.readFileSync('readMe.txt', 'utf8'); //stored contents of file in variable 
fs.writeFileSync('writeMe.txt', readMe); //synchoronous 

//asynchronous process

var fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err, data){ //reading the file, firing the function, once its read the file and were passing the data to the function which will be logged into the console
//this does not block the following code 
    console.log(data);
}); 

console.log('test'); //this will print first 

//

var fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('writeMe.txt', data);
});

//this is good because if there are muli requests on your website then it will be much quicker, as opposed to sync request it will delay the requests 