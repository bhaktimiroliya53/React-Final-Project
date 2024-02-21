import React from 'react'
import Header from '../../Header'
import LeftSidebar from '../LeftSidebar'
import { Link } from 'react-router-dom'

function Category() {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-lg-3">
          <LeftSidebar />
        </div>
        <div className="col-lg-9">
          <div className="category-list">
            <h1>View Category</h1>
              <div className="button">
                <Link to={`/admin/Addcategory`}>
                  <button className="btn btn-outline-dark">Add</button>
                </Link>
              </div>
            
            <div className="col-lg-8">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Category