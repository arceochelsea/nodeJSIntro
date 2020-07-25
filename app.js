setTimeout(function(){
    console.log('3 seconds have passed');
}, 3000);

//when this file is run in node set time out is gonna fire this function after 300 milliseconds which is 3 seconds and will log that message in the terminal there.

var time = 0;

setInterval(function(){ 
    time += 2; //time = time + 2;
    console.log(time + ' seconds have passed');
}, 2000);

//every time this is called after 2000 miliseconds it will add 2

var time = 0;

var timer = setInterval(function(){ 
    time += 2; //time = time + 2;
    console.log(time + ' seconds have passed');
    if (time > 5) {
        clearInterval(timer);
    }
}, 2000);

//once its over the 5 seconds mark it will clear the Interval

console.log(__dirname);

//will print the directory youre in in the terminal

console.log(__filename);

//will print the dir and file youre in

