"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/users", "UserController.index");
Route.post("/users", "UserController.create");

Route.post("/sessions", "SessionController.create");
Route.post("/sessions/verify", "SessionController.refresh");
