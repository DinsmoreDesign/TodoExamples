const express = require('express');
const router = express.Router();

const tasks = require('../data/tasks');

router.get('/tasks', (req, res) => res.send({ tasks }));

module.exports = router;