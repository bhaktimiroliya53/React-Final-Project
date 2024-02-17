import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../Context/Auth';
import { Link } from 'react-router-dom';

function Header() {

    const [auth, setAuth] = useAuth();

    const logout = () => {
        localStorage.removeItem('users');
        setAuth({
            ...auth,
            user: null
        })
        toast.success("User Successfully Logout")
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <h1 style={{color : 'white'}}>Logo</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Name :- {auth.user?.name}</a></li>
                                    <li><a class="dropdown-item" href="#">Email :- {auth.user?.email}</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Roale :- {auth.user?.roale}</a></li>
                                </ul>
                            </li>
                            {
                                (!auth.user) ? (<>
                                    <li className="nav-item">
                                        <Link to={'/'}>
                                            <button class="btn btn-outline-light">LogIn</button>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/register'}>
                                            <button class="btn btn-outline-light ms-3">Register</button>
                                        </Link>
                                    </li>
                                </>) : (
                                    <li className="nav-item">
                                        <button type="button" class="btn btn-outline-light" onClick={() => logout()}>LogOut</button>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header