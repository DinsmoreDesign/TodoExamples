const express = require('express');
const cors = require('cors');
const task = require('./controllers/task');
const tasks = require('./controllers/tasks');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', task);
app.use('/api', tasks);

app.listen(3000, () => console.log('App listening on port 3000!'));