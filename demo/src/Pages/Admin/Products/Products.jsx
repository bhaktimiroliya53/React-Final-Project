import React, { useEffect, useState } from 'react'
import Header from '../../Header'
import LeftSidebar from '../LeftSidebar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Nav from '../../Nav'

function Products() {

  const [products, setProducts] = useState([])

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
                          <img src={val.img} alt="city" />
                          <h1 className="text-h1">{val.category}</h1>
                        </div>
                        <div className="face back">
                          <h2 className="text-h2">{val.name}</h2>
                          <h2>{val.price}</h2>
                          <p className="text-p">
                            {val.description}
                          </p>
                          <div className="links">
                            <a className="link-a" href="#">Details</a>
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