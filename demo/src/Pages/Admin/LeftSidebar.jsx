import React from 'react'
import { Link } from 'react-router-dom'

function LeftSidebar() {
    return (
       <div className="left-sidebar">
         <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="list-group">
                        <ul className='list-items'>
                            <li>
                               <Link to={'/admin/dashboard'}>DashBord</Link>
                            </li>
                            <li>
                               <Link to={'/admin/category'}>Category</Link>
                            </li>
                            <li>
                               <Link>Product</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}

export default LeftSidebar