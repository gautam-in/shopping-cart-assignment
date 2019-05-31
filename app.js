const glob = require("glob")
const jsonConcat = require('json-concat');

// options is optional 
glob("./server/**/*.json", null, function (er, files) {
    if (er)
        console.log(er);
    else {
        jsonConcat({
            src: files,
            dest: "./server/db.json"
        }, function (json) {
            console.log(json);
        });
    };
});
