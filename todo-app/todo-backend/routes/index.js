const express = require('express');
const router = express.Router();
const redis = require('../redis');

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {
  const added = await redis.getAsync('added_todos') || 0;
  console.log(added); // TODO: remove this debug line
  res.send({
    added_todos: Number(added)
  });
})

module.exports = router;
