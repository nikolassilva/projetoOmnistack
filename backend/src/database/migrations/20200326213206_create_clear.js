//era pra ser create_ongs

exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('cidade').notNullable();
      table.string('uf', 2).notNullable();
  })
}; // up: o que eu quero que seja feito

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
}; // como proceder se algo der errado
