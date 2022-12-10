import express, { Router } from "express";
import { createUserController } from '../controllers/user.detail.controller'

const router : Router = express.Router();

router.post('/createuser', createUserController);

export = router;
