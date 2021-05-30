const sharp = require('sharp');
const fs = require('fs');
const directory = './../../assets/static/images'

fs.readdirSync(directory).forEach(file => {
  sharp(`${directory}/${file}`)
    .resize(200, 100) // width, height
    .toFile(`${directory}/${file}-small.jpg`);
  });