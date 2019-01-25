const newrelic = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const router = require('./router.js');

const PORT = 3400;
const proxy = express();

proxy.use(bodyParser.json());
proxy.use(bodyParser.urlencoded({ extended: true }));
proxy.use(cors());
proxy.use(express.static(path.join(__dirname, './public/')));
proxy.use('/api', router);

proxy.get('/loaderio-658613e75e192718d5ba50fdd7d521bd/', function(req, res) {
  res.sendFile("/home/ubuntu/sdc-photos-proxy/public/loaderio-658613e75e192718d5ba50fdd7d521bd.txt");
});

proxy.listen(PORT, (err) => {
  if (err) { console.error(err); } else {
    console.log('Listening on PORT ', PORT);
  }
});
