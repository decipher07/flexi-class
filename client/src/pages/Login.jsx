import React from 'react'
import { useState } from 'react'
import './Login.css'
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';

const Login = () => {

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [age, setAge] = useState(18);
    const [batchId, setBatchId] = useState(0);
    const [monthId, setMonthId] = useState(0);

    const navigate = useNavigate();

    /** Setting BatchId and Hashmaps */
    const batchIdAndTimings = new Map();
    batchIdAndTimings.set(1, "6.00 to 7.00");
    batchIdAndTimings.set(2, "7.00 to 8.00");
    batchIdAndTimings.set(3, "8.00 to 9.00");
    batchIdAndTimings.set(4, "17.00 to 18.00");

    /** Setting monthId and Hashmaps */
    const monthIdAndMonth = new Map();
    monthIdAndMonth.set(1, "January");
    monthIdAndMonth.set(2, "February");
    monthIdAndMonth.set(3, "March");
    monthIdAndMonth.set(4, "April");
    monthIdAndMonth.set(5, "May");
    monthIdAndMonth.set(6, "June");
    monthIdAndMonth.set(7, "July");
    monthIdAndMonth.set(8, "August");
    monthIdAndMonth.set(9, "September");
    monthIdAndMonth.set(10, "October");
    monthIdAndMonth.set(11, "November");
    monthIdAndMonth.set(12, "December");

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log({ name, phoneNumber, age, batchId, monthId });

        // const body = { email, password };

        // try {
        //   const response = await axios.post('http://43.204.215.187:3001/sign/login', body);
        //   localStorage.setItem("token", response.data.data.token);
        //   navigate('/follower');
        // } catch ( err ){
        //   alert(err.response.data.message);
        // }
    }

    return (
        <div className='main'>
            <div className="loginFrame">

                <h1 className="text-center heading">Fill in your details</h1>
                <hr className="underline" />
                <h6 className="text-center sub-heading">FlexiLogin for Flex Money</h6>

                <div className="formClass">
                    <form action="/login" method="get" onSubmit={handleSubmit}>
                        <input type="text" id="name" name="name" className='formSchema' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
                        <input type="text" id="age" name="age" className='formSchema' placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} /><br /><br />
                        <input type="text" id="phone" name="phone" className='formSchema' placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /><br /><br />
                        <div className="buttonDisp">
                            {/* Batch Timings */}
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> { batchId == 0 ? "Batch Timings" : batchIdAndTimings.get(batchId) } </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" value={1} onClick={(e) => setBatchId(1)} >6.00 to 7.00</a>
                                    <a className="dropdown-item active" value={2} onClick={(e) => setBatchId(2)} >7.00 to 8.00</a>
                                    <a className="dropdown-item" value={3} onClick={(e) => setBatchId(3)} >8.00 to 9.00</a>
                                    <a className="dropdown-item" value={4} onClick={(e) => setBatchId(4)} >17.00 to 18.00</a>
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