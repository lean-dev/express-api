const express = require('express');
const filmModel = require('../model/film');

const router = express.Router();

router.get('/', async (req, res) => {
  const actors = await filmModel.getAll();
  res.status(200).send(actors);
});

router.get('/:id', async (req, res) => {
  const film = await filmModel.getById(req.params.id);
  if (film) {
    res.status(200).send(film);
  } else {
    res.status(404).send('Not found');
  }
});

router.post('/', async (req, res) => {
  const { title } = req.body;
  const film = await filmModel.create(title);
  res.status(201).send(film);
});

module.exports = router;
