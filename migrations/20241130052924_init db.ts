import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("products", (table) => {
    table.string("id").primary();
    table.string('type');
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.timestamp('createdat').defaultTo(knex.fn.now()).index();
    table.timestamp('updatedat').defaultTo(knex.fn.now());
  })
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('products');
}

