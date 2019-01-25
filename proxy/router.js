const router = require('express').Router();
const axios = require('axios');

router.route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    axios.get(`http://54.183.63.131:3001/api/photos/${id}`)
      .then(({ data }) => {
        res.send(data);
      });
  });

module.exports = router;
