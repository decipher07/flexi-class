import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import "./Payment.css"
import { batchIdAndTimings, monthIdAndMonth, backendUrl } from '../utils/constants'

function Payment() {

    const [pendingTransactions, setPendingTransactions] = useState(null);

    useEffect(() => {
        // Fetch data from backend
        async function fetchData() {
            const userId = localStorage.getItem("userId");
            const response = await axios.get(`${backendUrl}/payment/pendingtranscations/${userId}`);
            setPendingTransactions(response.data.data);
        }

        fetchData();

    }, []);

    // Making payments
    const makePayment = async (e, monthId) => {
        try {
            const body = { "month": monthId, "userId": localStorage.getItem("userId") };
            alert(`You're making a payment for the month of ${monthIdAndMonth.get(monthId)} of Rs 500/-`)
            await axios.post(`${backendUrl}/payment/makepayment`, body);
            alert("Payment Successful, Please refresh the page!");
        } catch (err) {
            console.log(err);
            alert(err.response.data.message);
        }
    }

    return (
        <div className="main">
            {/* Payment Frame */}
            <div className="paymentFrame">
                
                {/* Heading for Payment */}
                <div className='headers'>
                    <h1>Here are your pending transactions</h1>
                </div>
                
                {/* Defining Tables */}
                <div className="tableHeaders">
                    <div className="monthColumn">
                        <h5>Month</h5>
                    </div>
                    <h5>Batch Timings</h5>
                </div>

                {/* Populating the response from pending transactions */}
                {
                    pendingTransactions ? pendingTransactions.map((item) => {
                        return (
                            <div className="paymentListing">
                                <div className='monthDivision'>
                                    <h5>{monthIdAndMonth.get(item.month)}</h5>
                                </div>
                                <h5>{item.batchTiming.start_time}</h5>
                                <h5>{item.batchTiming.end_time}</h5>
                                <h5>Rs {item.amount}/-</h5>
                                <button className="btn btn-dark submit" value="Signup" onClick={(e) => {
                                        makePayment(e, item.month)
                                        e.target.disabled = true
                                    }}>
                                    Pay Now
                                </button>
                            </div>)
                    }) : null
                }

                {/* Footer */}
                <div className="footerFrame">
                    <a href="http://localhost:5173/login">
                        <input type="button" className="btn btn-dark submit" value="Back To Signup" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Payment