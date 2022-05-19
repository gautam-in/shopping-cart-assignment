"use strict";

var canned = require('canned');

var http = require('http');

var port = '5001';
var cannedApp = canned('./server/', {
  cors: false
});
http.createServer(cannedApp).listen(port, function () {
  console.log("Server running on port ".concat(port));
});
//# sourceMappingURL=index.dev.js.map
