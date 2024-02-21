import axios from 'axios';
import React, { useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import { useAuth } from '../Context/Auth';

function Login() {
    const [auth, setAuth] = useAuth();
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const submit = async (e) => {
        e.preventDefault();
        try {
            let { data } = await axios.get(`http://localhost:8000/users/?UserName=${userName}&Password=${password}`);
            if (data.length > 0) {
                localStorage.setItem('users', JSON.stringify(data));
                setAuth({
                    ...auth,
                    user: data[0]
                })
                toast.success("User SuccessFully login")
            } else {
                toast.error("User not login")
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    return (
        <>
            <Header />
            <div className="logincontainer">
                <div className="container">
                    <div className="row">
                        <form className="form">
                            <p>Login</p>
                            <div className="group">
                                <input required="true" className="main-input" type="text" />
                                <span className="highlight-span" />
                                <label className="lebal-email">Email</label>
                            </div>
                            <div className="container-1">
                                <div className="group">
                                    <input required="true" className="main-input" type="text" />
                                    <span className="highlight-span" />
                                    <label className="lebal-email">password</label>
                                </div>
                            </div>
                            <button className="submit">submit</button>
                        </form>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    )
}

export default Login