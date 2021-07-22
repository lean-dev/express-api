const express = require('express');
const actorModel = require('../model/actor');

const router = express.Router();

router.get('/', async (req, res) => {
  const actors = await actorModel.getAll();
  res.status(200).send(actors);
});

router.get('/:id', (req, res) => {});
router.post('/', (req, res) => {});
router.put('/:id', (req, res) => {});
router.delete('/:id', (req, res) => {});

module.exports = router;
