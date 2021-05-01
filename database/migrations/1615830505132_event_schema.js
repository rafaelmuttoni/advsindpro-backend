"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class EventSchema extends Schema {
  up() {
    this.create("events", (table) => {
      table.increments();
      table.string("name");
      table.datetime("date");
      table.float("priority");
      table.string("description");
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
    this.drop("events");
  }
}

module.exports = EventSchema;
