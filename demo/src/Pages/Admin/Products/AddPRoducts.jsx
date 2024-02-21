import React, { useEffect, useState } from 'react'
import Header from '../../Header'
import LeftSidebar from '../LeftSidebar'
import axios from 'axios';
import { toast } from 'react-toastify';

function AddPRoducts() {

    const [categoryRecord , setCategoryRecord] = useState([]);

    const [category , setCategory] = useState('')
    const [name , setName] = useState('')
    const [price , setPrice] = useState('')
    const [qty , setQty] = useState('')
    const [description , setDescription] = useState('')
    const [img , setImg] = useState('')
    const [marketStatus , setMarketStatus] = useState('')
    const [status , setStatus] = useState('')
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            let AddProduct = await axios.post(`http://localhost:8000/products` ,{
                category : category,
                name : name,
                price : price,
                qty : qty,
                description : description,
                img : img,
                marketStatus : marketStatus,
                status : status,
            }) 
            toast.success("Product Successfully Added");
        }catch(err){
            console.log(err);
            return false;
        }
    }

    const getCategory = async() => {
       try{
        let {data} = await axios.get(`http://localhost:8000/category`);
        setCategoryRecord(data)
       }catch(err){
        console.log(err);
        return false;
       }
    }

    useEffect(() => {
        getCategory();
    },[])

    return (
        <>
            <Header />
            <div className="row">
                <div className="col-lg-3">
                    <LeftSidebar />
                </div>
                <div className="col-lg-9">
                    <div className="category-list">
                        <h1>Add Products</h1>
                        <center>

                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div>
                                        <div className="ProductForm">
                                            <div className="form-group">
                                                <label>Category :- </label>
                                                <select onChange={ (e) => setCategory(e.target.value)} value={category}>
                                                    <option value="">--Select Category--</option>
                                                    {
                                                        categoryRecord.map((cat) => {
                                                            return(
                                                                <option value={cat.name}>{cat.category}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Product Name  :- </label>
                                                <input type="text" onChange={ (e) => setName(e.target.value)} value={name}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Price :- </label>
                                                <input type="text" onChange={ (e) => setPrice(e.target.value)} value={price}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Qty :- </label>
                                                <input type="text" onChange={ (e) => setQty(e.target.value)} value={qty}/>
                                            </div>

                                            <div className="form-group">
                                                <label>Description :- </label>
                                                <input type="text" onChange={ (e) => setDescription(e.target.value)} value={description}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Image :- </label>
                                                <input type="text" onChange={ (e) => setImg(e.target.value)} value={img}/>
                                            </div>
                                            <div className="form-group">
                                                <label>Market Status :- </label>
                                                <select onChange={ (e) => setMarketStatus(e.target.value)} value={marketStatus}>
                                                    <option value="">--Select MarketStatus--</option>
                                                    <option value="">Latest</option>
                                                    <option value="">Upcomming</option>
                                                    <option value="">Best</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Status :- </label>
                                                <select onChange={ (e) => setStatus(e.target.value)} value={status}>
                                                    <option value="">--Select Status--</option>
                                                    <option value="">Active</option>
                                                    <option value="">Deactive</option>
                                                </select>
                                            </div>
                                            <button className='ProductButton'>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </center>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPRoducts