import React, { useEffect, useState } from 'react'
import { getAnAccountTransaction } from '../../services/ApiService';
import Table from '../shared/table/Table';
import './account.css'

const Passbook = () => {

    const [accountNo, setAccountNo] = useState();
    const [data, setData] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("hi---->",)
        let response = await getAnAccountTransaction(accountNo);
        console.log("Account Transactions---->", response)
        console.log("Account list Transactions---->", response.data)
        setData(response.data)
    }


    useEffect(() => {
        console.log("Passbook useeffect")
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

                            <button type="submit" className="btn btn-dark btn-lg"
                                    onClick={handleSubmit}
                                > Submit </button>
                        </form>
                    </div>

                    <div className='col-10 offset-1'>
                        <Table data={data} isEditButton={false} isDeleteButton={false} ></Table>
                    </div>
                </div>
            </div>
            </section>

    )
}

export default Passbook
