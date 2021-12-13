var canned = require('canned')
,   http = require('http')
,   opts = { logger: process.stdout }

can = canned('/server/', opts)

http.createServer(can).listen(5000)
