import React, { useEffect, useState } from 'react'
import { saveAccount } from '../../services/ApiService'
import GetAllAccounts from './GetAllAccounts';
import Navbar from '../shared/navbar/Navbar'
import './account.css'

const AddAccount = () => {

    console.log("Add Account is renered")
    const [balance, setBalance] = useState();
    const [custid, setCustid] = useState();
    const [bankid, setBankid] = useState();
    const [data, setData] = useState();


    const handleSubmit = async (e) => {
        e.preventDefault()

        const customer = {
            cid: custid
        }
        const bank = {
            bankid: bankid
        }

        let response = await saveAccount(balance, customer, bank);
        setData(response)
        console.log("save Account response----->", response);
        alert("Account added successfully")
    }

    useEffect( ()=>{
        setBalance("");
        setBankid("");
        setCustid("");
    }, [data]);

    

    return (

            <>
            <section className="vh-100 gradient-custom">
            <Navbar></Navbar>
                <div className="container">

                    <div className="row">

                        <div className="h1 text-primary text-center mt-3 text-white">
                            ADD NEW ACCOUNT
                        </div>

                        <div className="col-8 offset-2">

                            <form className="p-5">
                                <div className="mb-3">
                                    <label className="form-label text-black fw-bold fs-5">Customer Id</label>
                                    <input type="number" className="form-control rounded-pill text-primary fw-bold" value={custid}
                                        onChange={(e) => {
                                            setCustid(e.target.value)
                                        }
                                        }

                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label text-black fw-bold fs-5">Bank Id</label>
                                    <input type="text" className="form-control rounded-pill text-primary fw-bold" value={bankid}
                                        onChange={(e) => {
                                            setBankid(e.target.value)
                                        }
                                        }

                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label text-black fw-bold fs-5">Balance</label>
                                    <input type="number" className="form-control rounded-pill text-primary fw-bold" value={balance}
                                        onChange={(e) => {
                                            setBalance(e.target.value)
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

                    <GetAllAccounts prop={data}></GetAllAccounts>
                </div>
                </section>
            </>

    )
}

export default AddAccount
