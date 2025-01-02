const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/router");
require("dotenv/config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOption = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOption));
app.use("/", router);

const dbOptions = {useNewURLParser:true, useUnifiedTopology:true}
mongoose.connect(process.env.DB_URI, dbOptions)
.then(() => console.log('Database is connected.'))
.catch(err => console.log(err))


const port = process.env.PORT || 4000
// const server = app.listen(port, () => {
//   console.log("Server is running on port ${port} 4000.");
// });
app.listen(port, () => console.log(`Server running on port ${port}.`));