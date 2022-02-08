const fs = require("fs");

const jsonReader = (filePath, cb) => {
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err);
        }
        try {
            const object = JSON.parse(fileData);
            return cb && cb(null, object);
        } catch (err) {
            return cb && cb(err);
        }
    });
}

jsonReader("./customer.json", (err, customer) => {
    if (err) {
      console.log("Error reading file:", err);
      return;
    }
    // increase customer order count by 1
    customer.order_count += 1;
    fs.writeFile("./customer.json", JSON.stringify(customer), err => {
      if (err) console.log("Error writing file:", err);
    });
  });

const updateJson = (data, path, cb) => {
    const jsonString = JSON.stringify(data);
    fs.writeFile(path, jsonString, err => {
        if (err) {
            return cb && cb(err);
        }
        try {
            return jsonReader(path, cb);
        } catch (err) {
            return cb && cb(err);
        }
    })
}

module.exports = jsonReader