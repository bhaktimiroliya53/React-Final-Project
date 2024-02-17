import React from 'react'
import Header from '../Header'
import LeftSidebar from './LeftSidebar'

function DashBorad() {
  return (
    <>
    <Header/>
        <div className="row">
            <div className="col-lg-3">
              <LeftSidebar/>
            </div>
            <div className="col-lg-3">
              DashBoard
            </div>
        </div>
    </>
  )
}

export default DashBorad