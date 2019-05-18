const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");
let app = express();

// app.use(cors());
app.use(express.static(__dirname + "/../client/dist/"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("get request");
  res.status(200).send();
});
let port = 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
