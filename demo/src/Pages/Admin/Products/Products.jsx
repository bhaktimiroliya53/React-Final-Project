import React, { useState } from 'react'
import Header from '../../Header'
import LeftSidebar from '../LeftSidebar'
import { Link } from 'react-router-dom'

function Products() {

  const [products , setProducts] = useState([])
  

  return (
    <>
      <Header />
      <div className="row">
        <div className="col-lg-3">
          <LeftSidebar />
        </div>
        <div className="col-lg-9">
          <div className="category-list">
            <h1>Products</h1>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card mb-3" style={{ width: '20rem' }}>
                  <img className="card-img-top" src="https://i.pinimg.com/564x/34/fd/2c/34fd2c0ed73d58075c257fc16b590f78.jpg" height={380} alt="Card image cap" />
                  <div className="product-detail">
                    <h5 className="card-title heading text-center">PURE COTTON T-SHIRT</h5>
                    <span className="subheading">Mens Formal T-Shirt</span>
                    <blockquote>
                      <p>'Little Bit Of Description About The Product Like Size Color And Care.'</p>
                    </blockquote>
                    <button type="button" className="btn btn-outline-dark">BUY NOW</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products