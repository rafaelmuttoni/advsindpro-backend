"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Service extends Model {
  provider() {
    return this.belongsTo("App/Models/Provider");
  }
  condo() {
    return this.belongsTo("App/Models/Condo");
  }
}

module.exports = Service;