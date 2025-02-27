import { Router }  from "express";

import UserController from "../controllers/UsersController.js";
import logginRequired from "../middlewares/logginRequired.js";

const router = new Router();

router.post("/register", UserController.store);
router.get("/",logginRequired,UserController.index);
router.get("/:id", UserController.show);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);

export default router;
