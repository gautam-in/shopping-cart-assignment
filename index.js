const express = require('express');
const bodyParser = require("body-parser");
const app = express();

port = 5000;

app.use(bodyParser.json());
app.use(express.static(process.cwd() + "/frontend/dist/sabkabazaar/"));
app.use(express.static(process.cwd() + "/static/"));

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + "/frontend/dist/sabkabazaar/index.html")
});

require('./routes')(app);

app.listen(port, () => {
    console.log(`Server listening on the port ${port}.`);
});