"use strict";
const Debt = use("App/Models/Debt");
const Database = use("Database");
class DebtController {
  async store({ request, response, auth }) {
    const user = await auth.getUser();
    if (!user) return response.status(401);

    const data = request.body;
    const debt = await Debt.create(data);

    return debt;
  }

  async update({ request, response, auth }) {
    const user = await auth.getUser();
    if (!user) return response.status(401);

    const data = request.body;
    await Debt.query().where("id", data.id).update(data);

    const debt = await Debt.find(data.id);

    return debt;
  }

  async destroy({ request, response }) {
    const user = await auth.getUser();
    if (!user) return response.status(401);

    const data = request.body;
    const debt = await Database.table("debts").where("id", data.id).delete();

    return debt;
  }
}

module.exports = DebtController;
