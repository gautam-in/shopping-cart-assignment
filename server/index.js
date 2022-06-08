const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());

app.use(express.json());

mongoose.connect(`${process.env.MONGO_DB_CONNECTION_URL}`);

require("./routes/initRoutes")(app);

app.listen(1333, console.log(`Server running on port 1333..`));
