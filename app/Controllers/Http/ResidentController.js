"use strict";
const Resident = use("App/Models/Resident");
const Database = use("Database");
class ResidentController {
  async store({ request, response, auth }) {
    const user = await auth.getUser();
    if (!user) return response.status(401);

    const data = request.body;
    const resident = await Resident.create(data);

    return resident;
  }

  async update({ request, response }) {
    const user = await auth.getUser();
    if (!user) return response.status(401);

    const data = request.body;
    await Resident.query().where("id", data.id).update(data);

    const resident = await Resident.find(data.id);

    return resident;
  }

  async destroy({ request, response }) {
    const user = await auth.getUser();
    if (!user) return response.status(401);

    const data = request.body;
    const resident = await Database.table("residents")
      .where("id", data.id)
      .delete();

    return resident;
  }
}

module.exports = ResidentController;
