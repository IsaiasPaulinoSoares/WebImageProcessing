exports.up = function(knex) {
    knex.schema.createTable('colors', function(table) {
        table.string('R').notNullable();
        table.string('G').notNullable();
        table.string('B').notNullable();
        table.string('cor').notNullable();
    })
};

exports.down = function(knex) {
    knex.schema.dropTable('colors');
};