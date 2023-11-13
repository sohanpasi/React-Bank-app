import React, { useEffect, useState } from 'react'
import { saveCustomer } from '../../services/ApiService'
import {GetAllCustomers} from './GetAllCustomers'
import Navbar from '../shared/navbar/Navbar'
import './customer.css'

const AddCustomer = () => {

    console.log("add customer rendering ")
    const [custname, setCustname] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [customer, setCustomer] = useState();


    const handleSubmit = async (e) => {
        e.preventDefault();

            const user = {
                username: userName,
                password: password
            }

            let response = await saveCustomer(custname, mobileNo, email, user);
            setCustomer(response)
            console.log("save customer response----->", response);
            alert("Customer added successfully")
    }

    useEffect(() => {

            setCustname("");
            setMobileNo("");
            setEmail("");
            setUserName("");
            setPassword("")

    }, [customer]);

    return (

        <>
            <section className="vh-100 gradient-custom">
            <Navbar></Navbar>
            <div className="container">

                <div className="row">

                    <div className="h1 text-primary text-center mt-3 text-white">
                        ADD NEW CUSTOMER
                    </div>

                    <div className="col-8 offset-2">

                        <form className="p-5">
                            <div className="mb-3">
                                <label className="form-label text-black fw-bold  fs-5">Customer Name</label>
                                <input type="text" className="form-control rounded-pill text-primary fw-bold" value={custname}
                                    onChange={(e) => {
                                        setCustname(e.target.value)
                                    }
                                    }

                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label text-black fw-bold fs-5">Mobile Number</label>
                                <input type="tel" className="form-control rounded-pill text-primary fw-bold"
                                pattern="[6-9]{1}[0-9]{9}" required 
                                value={mobileNo}
                                    onChange={(e) => {
                                        setMobileNo(e.target.value)
                                    }
                                    }

                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label text-black fw-bold fs-5">Email Id</label>
                                <input type="email" className="form-control rounded-pill text-primary fw-bold" value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }
                                    }
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label text-black fw-bold fs-5">Username</label>
                                <input type="text" className="form-control rounded-pill  text-primary fw-bold" value={userName}
                                    onChange={(e) => {
                                        setUserName(e.target.value)
                                    }
                                    }
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label text-black fw-bold fs-5">Password</label>
                                <input type="text" className="form-control rounded-pill  text-primary fw-bold" value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }
                                    }
                                />
                            </div>

                            <button type="submit" className="btn btn-dark btn-lg"
                                onClick={handleSubmit}
                            > Submit </button>
                        </form>
                    </div>

                </div>

                <GetAllCustomers prop={customer}></GetAllCustomers>

            </div>
            </section>
        </>
    )
}

export default AddCustomer
