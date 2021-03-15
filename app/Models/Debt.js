"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Debt extends Model {
  resident() {
    return this.belongsTo("App/Models/Resident");
  }
}

module.exports = Debt;
