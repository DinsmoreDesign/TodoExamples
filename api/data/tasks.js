const getDateAsString = require('../utils/getDateAsString')

module.exports = [
    {
        id: 0,
        title: 'My first task',
        description: 'Made today!',
        created: getDateAsString(),
        done: false
    }
];