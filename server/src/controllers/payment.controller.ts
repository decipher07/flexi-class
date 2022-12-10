import { Request, Response, NextFunction } from "express";
import Logging from "../logger/logging";
import { PrismaClient, User } from '@prisma/client'
const prisma = new PrismaClient()

/** Make a payment */
const paymentController = async ( req: Request, res: Response, next: NextFunction ) => {
    
    /** Getting the Details from the User */
    const { userId, month } = req.body;

    try {
        
        let checkIfTheUserAlreadyMadeThePayment = await prisma.payments.findFirst({
            "where": {
                userId,
                month,
                status: true
            }
        })

        if (checkIfTheUserAlreadyMadeThePayment)
            return res.status(403).json({"success": false, "data": null, "message": "You've already booked the transaction"});

        // Update the current Payment document from False to True
        await prisma.payments.update({
            where: {
                userId_month : {
                    userId,
                    month
                }
            },
            data: {
                status: true
            }
        })

        // Update the user as registered
        await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                registered: true
            }
        })

        return res.status(200).json({"success": true, "data": null, "message": "Your Payment was successful"});
    } catch ( err: any ) {
        Logging.error(err.message);
        return res.status(500).json({"success": false, "data": null, "message": "Something went wrong"});
    }
}

/** Get all the unprocessed transactions */
const getAllPendingTransactions = async ( req: Request, res: Response, next: NextFunction ) => {
    
    /** Getting the Details from the User */
    const userId = req.params.id;

    try {
        // Get all the pending transactions
        const pendingTransactions = await prisma.payments.findMany({
            where: {
                userId,
                status: false
            }
        })

        return res.status(200).json({"success": true, "data": pendingTransactions, "message": null});
    } catch ( err: any ) {
        Logging.error(err.message);
        return res.status(500).json({"success": false, "data": null, "message": "Something went wrong"});
    }
}

export { paymentController, getAllPendingTransactions };