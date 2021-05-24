"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CondoSchema extends Schema {
  up() {
    this.create("condos", (table) => {
      table.increments();
      table.string("name").unique();
      table.string("code");
      table.string("zipcode");
      table.string("street");
      table.string("building");
      table.string("core");
      table.string("block");
      table.string("neighborhood");
      table.string("city");
      table.string("state");
      table.string("manager");
      table.date("initial_date");
      table.string("energy");
      table.string("water");
      table.string("gas");
      table.string("gas_name");
      table.string("gas_phone");
      table.timestamps();
    });
  }

  down() {
    this.drop("condos");
  }
}

module.exports = CondoSchema;
