"use strict";

class SessionController {
  async create({ request, auth }) {
    const { email, password } = request.all();

    const token = await auth.withRefreshToken().attempt(email, password);

    return token;
  }

  async refresh({ request, auth }) {
    const refreshToken = request.input("refresh_token");

    const token = await auth
      .newRefreshToken()
      .generateForRefreshToken(refreshToken);

    return token;
  }
}

module.exports = SessionController;
