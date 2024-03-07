import React, { useEffect, useState } from 'react'
import Header from '../../Header'
import LeftSidebar from '../LeftSidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Context/Auth';

function AddCategory() {
    
    const navigate = useNavigate('')
    const [auth , setAuth] = useAuth()
    const [category , setCategory] = useState('')

    useEffect(() => {
        if(auth?.user?.roale === "user"){
            navigate('/')
        }
    },[])

    const handleSubmit = async() => {
        try{
            let categoryRecord = await axios.post(`http://localhost:8000/category` , {
                category : category
            })
            toast.success('Category SuccessFully Add');
            setCategory('')
            navigate('/admin/AddProducts')
        }catch(err){
            console.log(err);
            return false;
        }
    }

    return (
        <>
            <Header />
            <div className="row">
                <div className="col-lg-3">
                    <LeftSidebar />
                </div>
                <div className="col-lg-9" style={{display : 'flex', justifyContent : 'center'}}>
                    <div className="category-list">
                        <h1>Add Category</h1>
                        <div className="input-group" style={{marginTop : '50px'}}>
                            <input type="email" className="input" id="Email" name="Email" placeholder="Category" autoComplete="off" onChange={ (e) => setCategory(e.target.value)} value={category}/>
                            <input className="button--submit" defaultValue="Subscribe" type="submit" onClick={ () => handleSubmit()}/>
                        </div>
                    </div>
                </div>
                <ToastContainer/>
            </div>
        </>
    )
}

export default AddCategory