const express = require("express");
const bodyParser = require("body-parser");
const db = require("../database/index.js");
// const cors = require("cors");
let app = express();

// app.use(cors());
app.use(express.static(__dirname + "/../client/dist/"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/review_id/", (req, res) => {
  const restaurantId = req.params.id;

  db.getComments(restaurantId, (err, results) => {
    console.log(err, results);
    if (err) {
      console.log("err");
    } else {
      console.log(results);
      res.status(200).send(results);
      console.log("successful GETs");
    }
  });
});
let port = 3001;

app.listen(port, function() {
  console.log(`listening on ports ${port}`);
});
