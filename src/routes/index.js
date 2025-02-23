const { Router } = require("express");

const usersRouter = require("../routes/users.routes");
const notesRouter = require("../routes/notes.routes");
const tagsRouter = require("../routes/tags.routes");
const sessionsRouter = require("../routes/sessions.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/notes", notesRouter);
routes.use("/tags", tagsRouter);


module.exports = routes;