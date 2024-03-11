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
            <header>
                <div className="main-header">
                    <div className="HeaderLogo">
                        <img src="https://i.pinimg.com/736x/57/b4/ec/57b4ec7187e70604b67171452753f28b--unique-logo-be-unique.jpg" width={200} />
                    </div>
                    <div className="HeaderList">
                        <ul>
                            {
                                (!auth.user) ? (<>
                                    <li className="nav-item">
                                        <Link to={'/'}>
                                            <button className="btn btn-outline-light">LOGIN</button>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/register'}>
                                            <button className="btn btn-outline-light ms-3">REGISTER</button>
                                        </Link>
                                    </li>
                                </>) : (
                                    <li className="nav-item">
                                        <button type="button" className="btn btn-outline-light" onClick={() => logout()}>LOGOUT</button>
                                    </li>
                                )
                            }
                            <div className='list'>
                                <ul style={{ paddingLeft: '10px' }}>
                                    <Link to={'/home'}>
                                        <li style={{ color: 'white', paddingTop: '25px', textAlign: 'center' }}>Home</li>
                                    </Link>
                                    <Link to={'/product'}>
                                        <li style={{ color: 'white', paddingTop: '25px', textAlign: 'center' }}>Products</li>
                                    </Link>
                                    <Link to={'/cart'}>
                                        <li style={{ color: 'white', paddingTop: '25px', textAlign: 'center' }}>Cart</li>
                                    </Link>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header