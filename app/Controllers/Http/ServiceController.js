"use strict";
const Service = use("App/Models/Service");
const Database = use("Database");
class ServiceController {
  async store({ request, response, auth }) {
    const user = await auth.getUser();
    if (!user) return response.status(401);

    const data = request.body;
    const service = await Service.create(data);

    return service;
  }

  async update({ request, response, auth }) {
    const user = await auth.getUser();
    if (!user) return response.status(401);

    const data = request.body;
    await Service.query().where("id", data.id).update(data);

    const service = await Service.find(data.id);

    return service;
  }

  async destroy({ request, response, auth }) {
    const user = await auth.getUser();
    if (!user) return response.status(401);

    const data = request.body;
    const service = await Database.table("services")
      .where("id", data.id)
      .delete();

    return service;
  }
}

module.exports = ServiceController;
