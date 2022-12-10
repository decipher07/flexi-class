import express, { Router } from "express";
import { getAllPendingTransactions, paymentController } from '../controllers/payment.controller'

const router : Router = express.Router();

router.post('/makepayment', paymentController);
router.get('/pendingtranscations/:id', getAllPendingTransactions);

export = router;