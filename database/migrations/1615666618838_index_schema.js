"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class IndexSchema extends Schema {
  up() {
    this.create("indices", (table) => {
      table.increments();
      table.string("name").notNullable();
      table.string("date").notNullable();
      table.float("value").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("indices");
  }
}

module.exports = IndexSchema;
