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

Route.post("/residents", "ResidentController.store").middleware("auth");
Route.patch("/residents", "ResidentController.update").middleware("auth");
Route.delete("/residents", "ResidentController.destroy").middleware("auth");

Route.post("/providers", "ProviderController.store").middleware("auth");
Route.patch("/providers", "ProviderController.update").middleware("auth");
Route.delete("/providers", "ProviderController.destroy").middleware("auth");

Route.post("/events", "EventController.store").middleware("auth");
Route.patch("/events", "EventController.update").middleware("auth");
Route.delete("/events", "EventController.destroy").middleware("auth");

Route.post("/services", "ServiceController.store").middleware("auth");
Route.patch("/services", "ServiceController.update").middleware("auth");
Route.delete("/services", "ServiceController.destroy").middleware("auth");

Route.post("/debts", "DebtController.store").middleware("auth");
Route.patch("/debts", "DebtController.update").middleware("auth");
Route.delete("/debts", "DebtController.destroy").middleware("auth");
