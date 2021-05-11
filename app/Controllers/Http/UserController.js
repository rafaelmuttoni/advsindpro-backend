"use strict";

const User = use("App/Models/User");

class UserController {
  async index({ auth }) {
    const user = await auth.getUser();

    return user;
  }

  async create({ request }) {
    const data = request.only(["name", "oab", "email", "password", "is_admin"]);

    const user = await User.create(data);

    return user;
  }
}

module.exports = UserController;
