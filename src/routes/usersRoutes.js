import { Router }  from "express";

import UserController from "../controllers/UsersController.js";

const router = new Router();

router.post("/register", UserController.store);
router.get("/", UserController.index);
router.get("/:id", UserController.show);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);

export default router;
