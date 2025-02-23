const { Router } = require("express");

const TagsController = require("../controllers/TagsController");
const tagsController = new TagsController();

const tagsRoutes = Router();

tagsRoutes.post("/", tagsController.create);

module.exports = tagsRoutes;
