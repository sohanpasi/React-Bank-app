import React, { useState } from 'react'
import { login } from '../../services/ApiService';
import { useNavigate } from 'react-router-dom';
import './login.css'

const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = new useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Username --------->", userName);
        console.log("Password --------->", password);
        
        let response;

        if(userName != "" && password != "")
        {
            response = response = await login(userName, password);
            console.log("Response ---------->", response);

            // if(response.data) {
            //     if(response.headers['auth'] == "Bad credentials"){
            //         alert("Bad Credentials");
            //     }
            // }
        }

        

        localStorage.setItem('auth', response.headers.auth)

        if(response.data){

            console.log("response.data--------->", response.data);
            localStorage.setItem('authentication', response.headers['auth'])
            localStorage.setItem('userid', response.data.userid);
            localStorage.setItem('username', response.data.username);
            localStorage.setItem('password', response.data.password);

            if(response.data.roles[0].rolename == "ROLE_ADMIN") {
                alert("Login Successfull")
                navigate(`/admin/${response.data.username}`)
            }

            if(response.data.roles[0].rolename == "ROLE_USER") {
                alert("Login Successfull")
                navigate(`/customer/${response.data.username}`)
            }
        }

    }
    return (
        <>

            <section className="vh-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" >
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">

                                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                        <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                        <div className="form-outline form-white mb-4">
                                            <input type="email" id="typeEmailX" className="form-control form-control-lg" 
                                            value={userName}
                                            onChange={
                                                (e) =>
                                                    setUserName(e.target.value)
                                            }/>
                                            <label className="form-label" for="typeEmailX">Username</label>
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input type="text" id="typePasswordX" className="form-control form-control-lg" 
                                            value={password}
                                            onChange={
                                                (e) =>
                                                    setPassword(e.target.value)
                                            }/>
                                            <label className="form-label" for="typePasswordX">Password</label>
                                        </div>


                                        <button className="btn btn-outline-light btn-lg px-5" type="submit" 
                                        onClick={
                                            handleSubmit
                                        }>Login</button>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Login




{/* <div className="container">

<div className="row d-flex justify-content-center">

    <div className="h1 text-secondary text-center mt-2">
        Login
    </div>

    <div className="form-center">
    <form>
        
            <label for="usernameField" className='mt-5'>Username: </label>
            <input type="text" className="form-control" id="usernameField" aria-describedby="emailHelp"
                placeholder="Enter Username"
                value={userName}
                onChange={
                    (e) =>
                        setUserName(e.target.value)
                }
            />

            <label for="passwordField" className='mt-4'>Password: </label>
            <input type="text" className="form-control" id="passwordField"
                placeholder="Enter Password"
                value={password}
                onChange={
                    (e) =>
                        setPassword(e.target.value)
                }
            />

        <div className="d-flex justify-content-center">   
        <button type="submit" className="btn btn-primary mt-4 mb-2"
            onClick={
                handleSubmit
            }>Submit</button>
        </div>
    </form>
    </div>
</div> 
</div > */}