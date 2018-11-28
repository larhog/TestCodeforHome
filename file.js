const testFolder = '../KONE_repo/';
const fs = require('fs');

var walk    = require('walk');
var files   = [];

// Walker options
var walker  = walk.walk(testFolder, { followLinks: false });


walker.on('file', function(root, stat, next) {
    // Add this file to the list of files
    files.push(root + '/' + stat.name);
    next();
});

walker.on('end', function() {
    
    var matches = searchStringInArray('Asset',files)
    console.log(matches);
    //console.log(files);
});
function searchStringInArray (find, files_) {                     
    return files_.filter(s => s.includes(find))                   

} 