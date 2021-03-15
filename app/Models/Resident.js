"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Resident extends Model {
  condo() {
    return this.belongsTo("App/Models/Condo");
  }

  debts() {
    return this.hasMany("App/Models/Debt");
  }
}

module.exports = Resident;
