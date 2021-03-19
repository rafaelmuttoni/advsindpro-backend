"use strict";
const Provider = use("App/Models/Provider");
const Database = use("Database");
class ProviderController {
  async store({ request, response, auth }) {
    const user = await auth.getUser();
    if (!user) return response.status(401);

    const data = request.body;
    const provider = await Provider.create(data);

    return provider;
  }

  async update({ request, response, auth }) {
    const user = await auth.getUser();
    if (!user) return response.status(401);

    const data = request.body;
    await Provider.query().where("id", data.id).update(data);

    const provider = await Provider.find(data.id);

    return provider;
  }

  async destroy({ request, response, auth }) {
    const user = await auth.getUser();
    if (!user) return response.status(401);

    const data = request.body;
    const provider = await Database.table("providers")
      .where("id", data.id)
      .delete();

    return provider;
  }
}

module.exports = ProviderController;
