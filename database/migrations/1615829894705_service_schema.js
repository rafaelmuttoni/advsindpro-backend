"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ServiceSchema extends Schema {
  up() {
    this.create("services", (table) => {
      table.increments();
      table.string("name");
      table.datetime("date");
      table.float("price");
      table.float("priority");
      table.text("description");
      table
        .integer("condo_id")
        .unsigned()
        .references("id")
        .inTable("condos")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("provider_id")
        .unsigned()
        .references("id")
        .inTable("providers")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("services");
  }
}

module.exports = ServiceSchema;
