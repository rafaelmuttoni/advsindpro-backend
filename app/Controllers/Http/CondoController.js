"use strict";
const Condo = use("App/Models/Condo");
const Database = use("Database");
class CondoController {
  async index({ response, auth }) {
    const user = await auth.getUser();
    if (!user) return response.status(401);

    const condos = await Database.select().from("condos");
    const providers = await Database.select().from("providers");
    const services = await Database.select().from("services");
    const events = await Database.select().from("events");
    const residents = await Database.select().from("residents");
    const debts = await Database.select().from("debts");

    return { condos, providers, services, events, residents, debts };
  }

  async store({ request, response, auth }) {
    const user = await auth.getUser();
    if (!user) return response.status(401);

    const data = request.body;
    const condo = await Condo.create(data);

    return condo;
  }

  async update({ request, response, auth }) {
    const user = await auth.getUser();
    if (!user) return response.status(401);

    const data = request.body;
    await Condo.query().where("id", data.id).update(data);

    const condo = await Condo.find(data.id);

    return condo;
  }

  async destroy({ request, response }) {
    const user = await auth.getUser();
    if (!user) return response.status(401);

    const data = request.body;
    const condo = await Database.table("condos").where("id", data.id).delete();

    return condo;
  }
}

module.exports = CondoController;
