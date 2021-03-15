"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProviderSchema extends Schema {
  up() {
    this.create("providers", (table) => {
      table.increments();
      table.enu("type", ["cpf", "cnpj"]);
      table.string("code");
      table.string("name");
      table.text("address");
      table.string("phone");
      table.string("email");
      table.text("description");
    });
  }

  down() {
    this.drop("providers");
  }
}

module.exports = ProviderSchema;
