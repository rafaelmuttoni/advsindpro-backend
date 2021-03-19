"use strict";
const Event = use("App/Models/Event");
const Database = use("Database");
class EventController {
  async store({ request, response, auth }) {
    const user = await auth.getUser();
    if (!user) return response.status(401);

    const data = request.body;
    const event = await Event.create(data);

    return event;
  }

  async update({ request, response, auth }) {
    const user = await auth.getUser();
    if (!user) return response.status(401);

    const data = request.body;
    await Event.query().where("id", data.id).update(data);

    const event = await Event.find(data.id);

    return event;
  }

  async destroy({ request, response, auth }) {
    const user = await auth.getUser();
    if (!user) return response.status(401);

    const data = request.body;
    const event = await Database.table("events").where("id", data.id).delete();

    return event;
  }
}

module.exports = EventController;
