import React from 'react'
import Header from '../Header'
import LeftSidebar from './LeftSidebar'
import Nav from '../Nav'

function DashBorad() {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-lg-3" >
          <LeftSidebar />
        </div>
        <div className="col-lg-9">
          <div className="category-list">
            <h1>Dashboard</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashBorad