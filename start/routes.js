"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/users", "UserController.index");
Route.post("/users", "UserController.create");

Route.post("/sessions", "SessionController.create");
Route.post("/sessions/verify", "SessionController.refresh");

Route.get("/condos", "CondoController.index").middleware("auth");
Route.post("/condos", "CondoController.store").middleware("auth");
Route.patch("/condos", "CondoController.update").middleware("auth");
Route.delete("/condos", "CondoController.destroy").middleware("auth");

Route.post("/debts", "DebtController.store").middleware("auth");
Route.patch("/debts", "DebtController.update").middleware("auth");
Route.delete("/debts", "DebtController.destroy").middleware("auth");
