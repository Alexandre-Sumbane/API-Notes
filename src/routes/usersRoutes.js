import { Router }  from "express";

import UserController from "../controllers/UsersController.js";

const router = new Router();

router.post("/", UserController.store);

export default router;
