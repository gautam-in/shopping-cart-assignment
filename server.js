var canned = require('canned'),
  http = require('http'),
  opts = {logger: process.stdout, cors: false}

can = canned('./server', opts)

http.createServer(can).listen(process.env.PORT || 5000)
