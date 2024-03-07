import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../Context/Auth'
import { ToastContainer, toast } from 'react-toastify'
import Navbar from '../Nav'

function Userproduct() {

    const navigate = useNavigate()
    const [auth, setAuth] = useAuth()
    const [category, setCategory] = useState([])
    const [product, setProduct] = useState([])
    const [cat, setcat] = useState('')
    const [marketStatus, setmarketStatus] = useState('')

    const getProduct = async () => {
        try {
            let { data } = await axios.get(`http://localhost:8000/products`)
            setProduct(data)
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    //MarketStatus filters

    useEffect(() => {
        axios.get(`http://localhost:8000/products?marketStatus=${marketStatus}&category=${cat}`)
            .then((res) => {
                console.log(cat);
                setProduct(res.data)
            }).catch((err) => {
                console.log(err);
                return false
            })
    }, [marketStatus])


    //fillter

    const getCategory = async () => {
        try {
            let { data } = await axios.get(`http://localhost:8000/category`);
            setCategory(data)
        } catch (err) {
            console.log(err);
            return false
        }
    }

    const categoryFilter = async (cate) => {
        try {
            let { data } = await axios.get(`http://localhost:8000/products?category=${cate}&marketStatus=${marketStatus}`)
            setcat(cate)
            setProduct(data)
        } catch (err) {
            console.log(err);
            return false
        }
    }

    const Addcart = async (id) => {
        if (!auth.user) {
            alert("Please Login Here")
            navigate('/')
        }
        try {
            let singleData = await axios.get(`http://localhost:8000/products/${id}`);
            // console.log(singleData.data);

            let record = singleData.data;

            // console.log(record);

            let duplicate = await axios.get(`http://localhost:8000/carts?user=${auth.user.id}&product=${record.id}`)

            // console.log(duplicate.data);
            // console.log(record.id);
            console.log(auth.user);
            console.log(auth.user.id);

            if (!(duplicate.data != 0)) {
                let addcart = await axios.post(`http://localhost:8000/carts`, {
                    name: record.name,
                    price: record.price,
                    description: record.description,
                    img: record.img,
                    user: auth.user.id,
                    product: record.id
                })

                toast.success('Product Successfully Added')
            } else {
                toast.error('Product Alredy Add')
                return false;
            }

        } catch (err) {
            console.log(err);
            return false;
        }
    }

    useEffect(() => {
        getProduct()
        getCategory()
    }, [])

    return (
        <>
            <Navbar />
            <Header />
            <div className="row">
                <div className="fillter d-flex">
                    <div className="col-lg-3">
                        <h2>Fillter</h2>
                        <div className="category-fillter">
                            <ul>
                                <li className='list-group-item'>
                                    {
                                        category.map((val) => {
                                            return (
                                                <button className='btn btn-outline-light' onClick={() => categoryFilter(val.category)}>{val.category}</button>
                                            )
                                        })
                                    }
                                </li>
                                <button className='btn btn-outline-light' style={{ width: '255px', marginLeft: '12px', fontSize: '20px' }} onClick={() => getProduct()}>All Clear</button>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-9">
                    <h2 className='text-center mt-4'>Products</h2>
                    <div className="selectStatus d-flex">
                        <div className="col-lg-3 ps-3">
                            <select className='form-control text-center'>
                                <option value="">----- Select Status -----</option>
                                <option value="">High to Low</option>
                                <option value="">Low to High</option>
                            </select>
                        </div>

                        <div className="col-lg-6">

                        </div>

                        <div className="col-lg-3">
                            <select className='form-control text-center' onChange={(e) => setmarketStatus(e.target.value)} value={marketStatus}>
                                <option value="">----- Select Status -----</option>
                                <option value="latest">Latest</option>
                                <option value="upcomming">Upcomming</option>
                                <option value="best">Best</option>
                            </select>
                        </div>
                    </div>
                    <div className="main w-100">
                        {
                            product.map((val) => {
                                return (
                                    <div className='col-lg-3'>
                                        <div className="card mb-5 p-3 text-center" style={{ width: '300px', height: '430px' }}>
                                            <img src={val.img} style={{ objectFit: "contain", height: "250px" }} className="card-img-top" alt="..." />
                                            <div className="card-body" style={{padding : '0'}}>
                                                <h5 className="card-title">{val.category}</h5>
                                                <hr />
                                                <p className="card-text"></p>
                                                <h5>{val.price}</h5>
                                                <div className="d-flex justify-content-center">
                                                <button className="btn btn-primary" style={{ fontSize: '16px' }} onClick={() => Addcart(val.id)}>Add Cart</button>
                                                <Link to={`/view/${val.id}`}>
                                                    <button className="btn btn-success ms-2" style={{ fontSize: '16px' }}>View Details</button>
                                                </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </>
    )
}

export default Userproduct