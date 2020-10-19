exports.up = function(knex) {
    return knex.schema.createTable('purple', function(table) {
        table.string('R').notNullable();
        table.string('G').notNullable();
        table.string('B').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('purple');
};