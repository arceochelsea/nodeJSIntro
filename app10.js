var fs = require('fs'); //fs module is how we delete files

fs.unlink('writeMe.txt'); //how to delete^

//

fs.mkdirSync('stuff'); //how to make dir (sync)

fs.mkdir('stuff', function(){// this will first create a dir
    fs.readFile('readMe.txt', 'utf8', function(err, data){// then read the file
        fs.writeFile('./stuff/writeMe.txt', data, function(err, result){// then write file
            if(err) console.log('error', err);
        });
    });
}); 
//(async) 

fs.rmdirSync('stuff'); //how to remove the dir (sync)

fs.rmdir('stuff'); //(async) cant remove dir without it being empty

 fs.unlink('./stuff/writeMe.txt', function(){ //deletes file inside dir
    fs.rmdir('stuff', function(err, result){ //removes dir in stuff
        if(err) console.log('error', err);
    });
});