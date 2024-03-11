import React, { useEffect, useState } from 'react'
import Header from '../../Header'
import LeftSidebar from '../LeftSidebar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Nav from '../../Nav'
import { useAuth } from '../../../Context/Auth'

function Products() {

  const [auth , setAuth] = useAuth()
  const navigate = useNavigate('')
  const [products, setProducts] = useState([])

  useEffect(() => {
    if(auth?.user?.roale === "user"){
        navigate('/')
    }
},[])

  const deleteCard = async(id) => {
    try {
      let { data } = await axios.delete(`http://localhost:8000/products/${id}`);
      let del = products.filter((val)=>{
        return val.id !== id
      })
      setProducts(del)
    } catch (error) {
      console.log(error);
      return false
    }
  }

  const getProduct = async () => {
    try {
      let { data } = await axios.get(`http://localhost:8000/products`);
      setProducts(data);
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  useEffect(() => {
    getProduct();
  }, [])


  return (
    <>
      <Header />
      <div className="row">
        <div className="col-lg-3" >
          <LeftSidebar />
        </div>
        <div className="col-lg-9">
          <div className="category-list">
            <h1>Products</h1>

            <div className="button mb-5">
              <Link to={`/admin/AddProducts`}>
                <button className="btn btn-outline-dark">Add</button>
              </Link>
            </div>

            <div className="d-flex flex-wrap">
              {
                products.map((val) => {
                  return (
                    <div className="wrapper">
                      <div className="card">
                        <div className="face front">
                          <img src={val.img} alt="city" style={{height : '250px', marginTop : '10px'}}/>
                          <h1 className="text-h1">{val.category}</h1>
                        </div>
                        <div className="face back">
                          <h2 className="text-h2">{val.name}</h2>
                          <h2>{val.price}</h2>
                          <p className="text-p">
                            {val.description}
                          </p>
                          <div className="links">
                            <button className="link-a" href="#" onClick={() => deleteCard(val.id)}>Delete</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products