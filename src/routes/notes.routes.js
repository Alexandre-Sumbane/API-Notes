const { Router } = require("express");

import NotesController from "../controllers/NotesController";


const notesRoutes = Router();

notesRoutes.post("/", NotesController.store);

module.exports = notesRoutes;
