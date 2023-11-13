import React, { useEffect, useState } from 'react'
import { GetAllBanks } from './GetAllBanks'
import { saveBank, validate } from '../../services/ApiService';
import Navbar from '../shared/navbar/Navbar'
import Login from '../login/Login';
import './bank.css'


const AddBank = () => {

    console.log("Add bank render ")
    const [name, setName] = useState("");
    const [abbreviation, setAbbreviation] = useState("");
    const [ifsc, setIfsc] = useState("");
    const [data, setData] = useState();

    const [isUserValid, setIsUserValid] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            if (name != "" && abbreviation != "", ifsc != "") {
                console.log(name + "  " + abbreviation + "  " + ifsc)
                let response = await saveBank(name, abbreviation, ifsc);
                setData(response);
                console.log(response);
                if(response)
                    alert("Bank added successfully.");
            }
            else{
                alert("Fill all fields");
            }
            
        }
        catch(error){
            console.log("error", error)
            alert(error.response.data.message);
        }

    }

    const validateUser = async () => {
        const authToken = localStorage.getItem('authentication');
        console.log("authToken -------->", authToken);

        if (authToken == null) {
            setIsUserValid(false)
        }
        else
        {
            let response = await validate(authToken)
            console.log("validate response-------->", response);

            if (response.data.role[0].authority != "ROLE_ADMIN") {
                setIsUserValid(false)
            }
    
            if (response.data.role[0].authority != "ROLE_USER") {
                setIsUserValid(false)
            }
        }
        setIsUserValid(true)
    }

    useEffect(() => {
        validateUser()
    }, []);

    useEffect(() => {
        setName("");
        setAbbreviation("");
        setIfsc("")

    }, [data]);

    if (isUserValid) 
    {
        return (
            <>


                <section className="vh-100 gradient-custom">
                    <Navbar></Navbar>

                    <div className="container">

                        <div className="row">

                            <div className="h1 text-primary text-center mt-3 text-white">
                                ADD NEW BANK
                            </div>

                            <div className="col-8 offset-2">

                                <form className="p-5">
                                    <div className="mb-3">
                                        <label className="form-label text-black fw-bold fs-5">Bank Name</label>
                                        <input type="text" className="form-control rounded-pill text-primary fw-bold" value={name}
                                            onChange={(e) => {
                                                setName(e.target.value)
                                            }
                                            }

                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label text-black fw-bold fs-5">Abbreviation</label>
                                        <input type="text" className="form-control rounded-pill text-primary fw-bold" value={abbreviation}
                                            onChange={(e) => {
                                                setAbbreviation(e.target.value)
                                            }
                                            }
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label text-black fw-bold fs-5">Ifsc code</label>
                                        <input type="text" className="form-control rounded-pill  text-primary fw-bold" value={ifsc}
                                            onChange={(e) => {
                                                setIfsc(e.target.value)
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

                        <GetAllBanks prop={data}></GetAllBanks>

                    </div>
                </section>

            </>
        )
    }
    else {
        alert("Please login first!!!");
        <Login/>
    }
}

export default AddBank