const express = require('express');
const actorModel = require('../model/actor');

const router = express.Router();

router.get('/', async (req, res) => {
  const actors = await actorModel.getAll();
  res.status(200).send(actors);
});

router.get('/:id', async (req, res) => {
  const actor = await actorModel.getById(req.params.id);
  if (actor) {
    res.status(200).send(actor);
  } else {
    res.status(404).send();
  }
});

router.post('/', async (req, res) => {
  const { firstname, lastname } = req.body;
  const actor = await actorModel.create(firstname, lastname);
  res.status(201).send(actor);
});

module.exports = router;
