"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class DebtSchema extends Schema {
  up() {
    this.create("debts", (table) => {
      table.increments();
      table.string("title");
      table
        .integer("resident_id")
        .unsigned()
        .references("id")
        .inTable("residents")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.date("due_date");
      table.float("price");
      table.boolean("payment_status").defaultTo(false);
      table.text("description");
      table.timestamps();
    });
  }

  down() {
    this.drop("debts");
  }
}

module.exports = DebtSchema;
