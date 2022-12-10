import express, { Router } from "express";
import { paymentController } from '../controllers/payment.controller'

const router : Router = express.Router();

router.post('/makepayment', paymentController);

export = router;