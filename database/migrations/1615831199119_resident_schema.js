"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ResidentSchema extends Schema {
  up() {
    this.create("residents", (table) => {
      table.increments();
      table.string("name");
      table.string("document");
      table.text("address");
      table.string("apartment");
      table.string("email");
      table.string("phone");
      table.text("description");
      table
        .integer("condo_id")
        .unsigned()
        .references("id")
        .inTable("condos")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("residents");
  }
}

module.exports = ResidentSchema;
