
const { v4: uuidv4 } = require('uuid');

const getDateAsString = require('../utils/getDateAsString');

module.exports = [
    {
        id: uuidv4(),
        title: 'My first task',
        description: 'Made today!',
        created: getDateAsString(),
        done: false
    }
];