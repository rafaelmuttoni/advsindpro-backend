"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("users", (table) => {
      table.increments();
      table.string("name").notNullable();
      table.string("oab").notNullable();
      table.string("email", 254).notNullable().unique();
      table.string("password", 60).notNullable();
      table.boolean("is_admin").notNullable().defaultTo(false);
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
