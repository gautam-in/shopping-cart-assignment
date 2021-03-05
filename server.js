const express = require('express');

const app = express();

app.use(express.static('./dist/SpaceX'));

app.get('/*', (req, res) => res.sendFile('index.html', { root: 'dist/' }));

app.listen(process.env.PORT || 8090);
