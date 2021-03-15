"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CondoSchema extends Schema {
  up() {
    this.create("condos", (table) => {
      table.increments();
      table.string("name");
      table.string("code");
      table.text("address");
      table.date("initial_date");
      table.json("extra");
      table.timestamps();
    });
  }

  down() {
    this.drop("condos");
  }
}

module.exports = CondoSchema;