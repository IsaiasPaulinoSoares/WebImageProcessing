const knex = require('knex');
const configuration = require('../../knexfile.js');
const path = require('path');

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development

const connection = knex(config);

module.exports = connection;

/*
const connection = knex({
    client: 'sqlite3',
    connection:{
        filename:path.resolve(__dirname, 'db.sqlite'),
    },
})

*/