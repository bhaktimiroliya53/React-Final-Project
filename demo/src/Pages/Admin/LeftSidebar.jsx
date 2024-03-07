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
                                    <Link to={'/admin/dashboard'}><button className="btn btn-outline-light">DashBord</button></Link>
                                </li>
                                <li>
                                    <Link to={'/admin/user'}><button className="btn btn-outline-light">User</button></Link>
                                </li>
                                <li>
                                    <Link to={'/admin/userdetails'}><button className="btn btn-outline-light">UserDetails</button></Link>
                                </li>
                                <li>
                                    <Link to={'/admin/category'}><button className="btn btn-outline-light">Category</button></Link>
                                </li>
                                <li>
                                    <Link to={'/admin/Products'}><button className="btn btn-outline-light">Product</button></Link>
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