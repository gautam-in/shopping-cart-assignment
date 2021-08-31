const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/static', express.static('static'));

const routes = require('./routes/routes.js')(app, fs);

//app.use("/", routes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})