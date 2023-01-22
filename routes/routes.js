module.exports = (app) => {
  app
    .route("/usuarios")
    .get(app.controller.users.getUsers)
    .post(app.controller.users.saveUsers)

  app
    .route("/categories")
    .get(app.controller.categories.getUsers)
    .post(app.controller.categories.saveUsers)

  app
    .route("/categories/:id")
    .get(app.controller.categories.getById)
    .put(app.controller.categories.saveUsers)
};
