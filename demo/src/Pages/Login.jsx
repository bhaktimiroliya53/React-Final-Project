import axios from 'axios';
import React, { useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import { useAuth } from '../Context/Auth';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';

function Login() {

    const navigate = useNavigate()
    const [auth, setAuth] = useAuth();
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const submit = async (e) => {
        e.preventDefault();
        try {
            let { data } = await axios.get(`http://localhost:8000/users/?UserName=${userName}&Password=${password}`);
            console.log(data);
            if (data.length > 0) {
                localStorage.setItem('users', JSON.stringify(data));
                setAuth({
                    ...auth,
                    user: data[0]
                })
                toast.success("User SuccessFully login")
                setUserName('')
                setPassword('')
                navigate('/admin/dashboard')
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
            <Nav/>
            <Header />
            <div className="logincontainer">
                <div className="container">
                    <div className="row">
                        <form className="form">
                            <p>Login</p>
                            <div className="group">
                                <input required="true" className="main-input" type="text" onChange={ (e) => setUserName(e.target.value)} value={userName}/>
                                <span className="highlight-span" />
                                <label className="lebal-email">UserName</label>
                            </div>
                            <div className="container-1">
                                <div className="group">
                                    <input required="true" className="main-input" type="text" onChange={ (e) => setPassword(e.target.value)} value={password}/>
                                    <span className="highlight-span" />
                                    <label className="lebal-email">password</label>
                                </div>
                            </div>
                            <button className="submit" onClick={submit}>submit</button>
                        </form>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    )
}

export default Login