"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Provider extends Model {
  services() {
    return this.hasMany("App/Models/Services");
  }
}

module.exports = Provider;
