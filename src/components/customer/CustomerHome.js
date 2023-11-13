import React from 'react'
import './customer.css'
import { useParams } from 'react-router-dom';
import Navbar from '../shared/navbar/Navbar'

const Customer = () => {

    const params = useParams()
    console.log("params ------->", params);

    return (

        <section className="vh-100 gradient-custom">
             <Navbar></Navbar>
            <div className='container'>
                <div className='row'>

                <div className='name'>
                    <h3> Welcome, {params.username} </h3>
                </div>

                    <div className='col-6'  style={{marginTop:"30vh"}}>

                        <div className='card bg-dark'>
                            <a className='btn btn-lg p-5 text-warning fs-1 fw-bold text-white' href="/passbook">Passbook</a>
                        </div>

                    </div>

                    <div className='col-6'  style={{marginTop:"30vh"}}>

                        <div className='card bg-dark'>
                            <a className='btn btn-lg p-5 text-warning fs-1 fw-bold text-white' href="/transaction">Transaction</a>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Customer
