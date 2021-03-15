"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Condo extends Model {
  services() {
    return this.hasMany("App/Models/Service");
  }
  events() {
    return this.hasMany("App/Models/Event");
  }
  resident() {
    return this.hasMany("App/Models/Resident");
  }
}

module.exports = Condo;
