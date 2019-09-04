const express = require('express');
// const db = require('../database/index.js');
const { Review } = require('../database/dbconnector.js');
// const bodyParser = require("body-parser");
const cors = require('cors')
//npm install body-parser
//npm install cors

let app = express();
app.use(cors());
app.use(express.static(__dirname + '/../public'));

app.get('/api/restaurants/:id/reviews', (req, res) => {
  const restaurantId = req.params.id;
  Review.find({ rest_id: restaurantId }, (err, results) => {
    if (err) {
      res.status(500).send('fail to get data');
    } else {
      console.log(results);
      res.status(200).send(results);
    }
  });
});
const port = 3001;

app.listen(port, () => {
  console.log(`listening on ports ${port}`);
});
