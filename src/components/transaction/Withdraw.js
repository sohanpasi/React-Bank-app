import React, { useEffect, useState } from 'react'
import { withdrawFunds } from '../../services/ApiService';
import './transaction.css'

const Withdraw = () => {

    const [accountNo, setAccountNo] = useState();
    const [amount, setAmount] = useState();


    const handleSubmit = async (e) => {
        e.preventDefault()

        const account = {
            accountno:accountNo
        }

        console.log("hi---->",)
        let response = await withdrawFunds(amount, account);
        console.log("Withdraw Transactions---->", response)

        if(response){
            alert("Transaction Successfull, withdraw amount Rs. "+amount);
        }
    }


    useEffect(() => {
        console.log("withdraw useeffect")
    }, [])

    return (
        <section className="vh-100 gradient-custom">
            <div className='container'>
                <div className='row'>

                    <div className="col-8 offset-2">

                        <form className="p-5">
                            <div className="mb-3">
                                <label className="form-label text-black fw-bold fs-5">Account Number</label>
                                <input type="number" className="form-control rounded-pill text-primary fw-bold" placeholder='Enter Account Number'
                                    value={accountNo}
                                    onChange={(e) => {
                                        setAccountNo(e.target.value)
                                        }
                                    }/>
                            </div>

                            <div className="mb-3">
                                <label className="form-label text-black fw-bold fs-5">Amount</label>
                                <input type="number" className="form-control rounded-pill text-primary fw-bold" placeholder='Enter Amount'
                                    value={amount}
                                    onChange={(e) => {
                                        setAmount(e.target.value)
                                        }
                                    }/>
                            </div>

                            <button type="submit" className="btn btn-dark btn-lg"
                                    onClick={handleSubmit}
                                > Submit </button>
                        </form>
                    </div>

                </div>
            </div>
            </section>

    )
}

export default Withdraw
