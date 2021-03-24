const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const getDateAsString = require('../utils/getDateAsString')
const tasks = require('../data/tasks');

router.route('/task')
    .post((req, res) => {

        const attrs = req.body;
        const task = {
            ...attrs,
            created: getDateAsString(),
            id: uuidv4()
        };

        tasks.push(task);

        return res.status(200).send({ task });

    })
    .put((req, res) => {

        const task = req.body;
        const id = task.id;
        const taskIndex = tasks.findIndex(item => item.id == id);

        if (taskIndex === -1) { return res.sendStatus(404) };

        tasks[taskIndex] = task;
        
        return res.status(200).send({ updated: true });

    });

router.route('/task/:id')
    .get((req, res) => {

        const id = req.params.id;
        const task = tasks.find(item => item.id == id);

        return task
            ? res.status(200).send({ task })
            : res.sendStatus(404);

    })
    .delete((req, res) => {

        const id = req.params.id;
        const taskIndex = tasks.findIndex(task => task.id == id);

        tasks.splice(taskIndex, 1);
        
        return res.status(200).send({ deleted: true });

    });

module.exports = router;