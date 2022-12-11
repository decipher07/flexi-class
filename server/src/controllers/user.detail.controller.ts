import { Request, Response, NextFunction } from "express";
import Logging from "../logger/logging";
import { PrismaClient, User } from '@prisma/client'
const prisma = new PrismaClient()

/** Create an User */
const createUserController = async ( req: Request, res: Response, next: NextFunction ) => {
    /** Getting the Details from the User */
    const { name, age, phone, month, batchId } = req.body;

    try {
        /** Validating The Age of the User */
        if ( age < 18 || age > 65 )
            return res.status(403).json({"success": false, "data": null, "message": "Please enter a valid age"})

        /** LOGIC 
         * Check if the User Exists or Not 
         * If Not, Create a User
         * 
         * Check if the UserId, Month exists or not
         * If Not, Create a payment schema and respond success
         * else Output the User is trying to make the payment for the same month again
        */

        /** Check if the User Exists or Not */
        let userDocument = await prisma.user.findFirst({
            where: {
                name,
                age,
                phone
            }
        })

        if (!userDocument){
            /** Creating a document in User Table */
            userDocument = await prisma.user.create({
                data: {
                    name,
                    age,
                    phone,
                    registered: false
                }
            })
        }

        /* Getting the document id for the user */
        const userIdForTheDocument = userDocument?.id;
        
        /** Check if the user has been processing the same request for the payment */
        let existingPaymentForTheSameMonth = await prisma.payments.findUnique({
            where : {
                userId_month : {
                    userId: userIdForTheDocument,
                    month: month
                }
            }
        })

        if ( !existingPaymentForTheSameMonth ){
            /** Populating the document in the Payment Table */
            const paymentDocument = await prisma.payments.create({
                data: {
                    amount: 500, 
                    month, 
                    batchTimingsId: batchId,
                    userId: userIdForTheDocument
                }
            })
    
            return res.status(201).json({"success": true, "data": { "userId" : userIdForTheDocument }, "message": null});    
        }

        if ( !existingPaymentForTheSameMonth.status )
            return res.status(403).json({"success": false, "data": { "userId" : userIdForTheDocument }, "message": "You've already booked a similar transaction for that month. You're not allowed to change batch for a particular month. You can do this for the next month. Please complete the transaction"});

        return res.status(418).json({"success": false, "data": { "userId" : userIdForTheDocument }, "message": "You've already booked a similar transaction for that month. You're not allowed to change batch for a particular month. You can do this for the next month. Thank You for your cooperation"});

    } catch ( err: any ) {
        Logging.error(err.message);
        return res.status(500).json({"success": false, "data": null, "message": "Something went wrong"});
    }
}

export { createUserController };