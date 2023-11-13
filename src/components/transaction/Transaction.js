import React from 'react'
import './transaction.css'
import Navbar from '../shared/navbar/Navbar'

const Customer = () => {

    return (

        <section className="vh-100 gradient-custom">
             <Navbar></Navbar>
            <div className='container'>
                <div className='row'>

                    <div className='col-4'  style={{marginTop:"30vh"}}>
                        <div className='card bg-dark'>
                            <a className='btn btn-lg p-5 text-warning fs-1 fw-bold text-white' href="/withdraw">Withdraw</a>
                        </div>
                    </div>

                    <div className='col-4'  style={{marginTop:"30vh"}}>
                        <div className='card bg-dark'>
                            <a className='btn btn-lg p-5 text-warning fs-1 fw-bold text-white' href="/deposit">Deposit</a>
                        </div>
                    </div>

                    <div className='col-4'  style={{marginTop:"30vh"}}>
                        <div className='card bg-dark'>
                            <a className='btn btn-lg p-5 text-warning fs-1 fw-bold text-white' href="/tansfer">Transfer</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Customer
