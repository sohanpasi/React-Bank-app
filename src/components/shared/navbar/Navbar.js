import React, { useState } from 'react'
import UpdateProfile from '../model/UpdateProfile'
import './nav.css'

const Navbar = () => {
    
    const [isModelOpen, setIsModelOpen] = useState()

    const profile = ()=>{
        
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container-fluid ms-5">

                    <a className="navbar-brand text-primary fw-bold fs-2 ps-5" href="#">Bank</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <div>
                            <ul className="navbar-nav me-auto ps-5">
                                <li className="nav-item active ps-5 pe-1">
                                    <a className="nav-link text-white" href="#">Home</a>
                                </li>
                                <li className="nav-item active ps-5 pe-1">
                                    <a className="nav-link text-white" href="#">Contact</a>
                                </li>
                                <li className="nav-item ps-5 pe-5">
                                    <a className="nav-link text-white" href="#" onClick={profile}>Update Profile</a>
                                </li>

                            </ul>

                        </div>
                        <div className='d-flex'>
                            {
                                    <a className='btn btn-primary ' href='/' onClick={
                                        (e) => {
                                            localStorage.clear();
                                        }
                                    }>Logout</a>  
                            }
                        </div>

                    </div>

                </div>
            </nav>

        </>
    )
}

export default Navbar