import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../Context/Auth';
import { Link } from 'react-router-dom';
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

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
                    </ul>
                </div>
                <div className="HeaderLogo">
                    <img src="https://i.pinimg.com/736x/57/b4/ec/57b4ec7187e70604b67171452753f28b--unique-logo-be-unique.jpg" width={200} />
                </div>
                <div className="HeaderIcons">
                    <ul>
                        <li>
                            <IoSearchSharp />
                        </li>
                        <li>
                            <FaRegUser />
                        </li>
                        <li>
                            <FaRegHeart />
                        </li>
                        <li>
                            <FiShoppingCart />
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header