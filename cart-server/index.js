const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000

const routes = require('./routes');

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.use('/api', routes)
app.use('/static', express.static('static'));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})