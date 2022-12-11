import React from 'react'
import { useState } from 'react'
import './Login.css'
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { monthIdAndMonth, batchIdAndTimings, backendUrl } from '../utils/constants'

const Login = () => {

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [age, setAge] = useState(18);
    const [batchId, setBatchId] = useState(0);
    const [monthId, setMonthId] = useState(0);

    // Navigation 
    const navigate = useNavigate();

    // Validating Phone Number
    function validatePhoneNumber ( phoneNumber ){
        return (/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/).test(phoneNumber);
    }

    // Handling Submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        /** Validate that every field exists */
        if (!name)
            return alert("Please enter your name");

        if (!phoneNumber)
            return alert("Please enter your phone number");
        
        if (!age)
            return alert("Please enter your age");

        if (!batchId)
            return alert("Please choose a batch");
        
        if (!monthId)
            return alert("Please choose a month");
        
        /** Validate Age */
        if ( age < 18 || age > 65 )
            return alert("You must be above 18 Years and Below 65 Years of age");

        /** Validate Phone Number */
        if ( !validatePhoneNumber(phoneNumber) )
            return alert("Please enter a valid phone Number");

        try {
            const body = { name, age: Number(age), phone: phoneNumber, batchId, month: monthId };
            const requestUrl = backendUrl + '/user/createuser';
            const response = await axios.post(requestUrl, body);
            localStorage.setItem("userId", response.data.data.userId);
            navigate('/payment');
        } catch ( err ) {
            localStorage.setItem("userId", err.response.data.data.userId);
            navigate('/payment');
            alert (err.response.data.message);
        }
    }

    return (
        <div className='main'>
            <div className="loginFrame">
                {/* Heading */}
                <h1 className="text-center heading">Fill in your details</h1>
                <hr className="underline" />
                {/* Sub heading */}
                <h6 className="text-center sub-heading">FlexiLogin for Flex Money</h6>
                {/* From Wrapper */}
                <div className="formClass">
                    {/* Login Form */}
                    <form action="/login" method="get" onSubmit={handleSubmit}>
                        {/* Name */}
                        <input type="text" id="name" name="name" className='formSchema' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
                        {/* Age */}
                        <input type="number" id="age" name="age" className='formSchema' placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} /><br /><br />
                        {/* Phone Number */}
                        <input type="text" id="phone" name="phone" className='formSchema' placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /><br /><br />
                        <div className="buttonDisp">
                            {/* Batch Timings */}
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> { batchId == 0 ? "Batch Timings" : batchIdAndTimings.get(batchId) } </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" value={5} onClick={(e) => setBatchId(5)} >6.00 to 7.00</a>
                                    <a className="dropdown-item active" value={6} onClick={(e) => setBatchId(6)} >7.00 to 8.00</a>
                                    <a className="dropdown-item" value={7} onClick={(e) => setBatchId(7)} >8.00 to 9.00</a>
                                    <a className="dropdown-item" value={8} onClick={(e) => setBatchId(8)} >17.00 to 18.00</a>
                                </div>
                            </div>
                            {/* Month Selection */}
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> { monthId == 0 ? "Month" : monthIdAndMonth.get(monthId) } </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" value={1} onClick={(e) => setMonthId(1)} >January</a>
                                    <a className="dropdown-item" value={2} onClick={(e) => setMonthId(2)} >February</a>
                                    <a className="dropdown-item" value={3} onClick={(e) => setMonthId(3)} >March</a>
                                    <a className="dropdown-item" value={1} onClick={(e) => setMonthId(4)} >April</a>
                                    <a className="dropdown-item" value={2} onClick={(e) => setMonthId(5)} >May</a>
                                    <a className="dropdown-item" value={3} onClick={(e) => setMonthId(6)} >June</a>
                                    <a className="dropdown-item" value={1} onClick={(e) => setMonthId(7)} >July</a>
                                    <a className="dropdown-item" value={2} onClick={(e) => setMonthId(8)} >August</a>
                                    <a className="dropdown-item" value={3} onClick={(e) => setMonthId(9)} >September</a>
                                    <a className="dropdown-item" value={4} onClick={(e) => setMonthId(10)} >October</a>
                                    <a className="dropdown-item" value={4} onClick={(e) => setMonthId(11)} >November</a>
                                    <a className="dropdown-item" value={4} onClick={(e) => setMonthId(12)} >December</a>
                                </div>
                            </div>
                        </div>
                        {/* Submit Button */}
                        <div className='buttonDisp formSchema'>
                            <input type="submit" className="btn btn-dark submit" value="Login" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login