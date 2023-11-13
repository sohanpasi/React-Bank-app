import React, { useEffect, useState } from 'react'
import { depositFunds } from '../../services/ApiService';
import './transaction.css'

const Deposit = () => {

    const [accountNo, setAccountNo] = useState();
    const [amount, setAmount] = useState();


    const handleSubmit = async (e) => {
        e.preventDefault()

        const account = {
            accountno:accountNo
        }

        console.log("hi---->",)
        let response = await depositFunds(amount, account);
        console.log("Deposit Transactions---->", response)

        if(response){
            alert("Transaction Successfull, Deposit amount Rs. "+amount);
        }
    }


    useEffect(() => {
        console.log("deposit useeffect")
    }, [])

    return (
        <section className="vh-100 gradient-custom">
            <div className='container'>
                <div className='row'>

                    <div className="col-8 offset-2">

                        <form className="p-5">

                            <div className="mb-3">
                                <label className="form-label text-black fw-bold fs-5">Account Number</label>
                                <input type="number" className="form-control rounded-pill text-primary fw-bold" placeholder='Enter account number in which you want to deposit'
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

export default Deposit
