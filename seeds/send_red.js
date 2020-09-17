const path = require('path');

exports.seed = async function(knex) {
    return knex('red').del()
        .then(function() {
            return knex('red').insert([

            ]);
        });
};