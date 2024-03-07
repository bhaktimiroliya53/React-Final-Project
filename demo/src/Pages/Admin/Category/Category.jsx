import React, { useEffect, useState } from 'react'
import Header from '../../Header'
import LeftSidebar from '../LeftSidebar'
import { Link, useNavigate } from 'react-router-dom'
import Nav from '../../Nav'
import { useAuth } from '../../../Context/Auth'
import axios from 'axios'

function Category() {

  const navigate = useNavigate('')
  const [auth , setAuth] = useAuth()
  const [category, setCategory] = useState([])

  useEffect(() => {
    if(auth?.user?.roale === "user"){
        navigate('/')
    }
},[])


  const getCategory = async () => {
    try {
      let { data } = await axios.get(`http://localhost:8000/category`);
      setCategory(data);
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  useEffect(() => {
    getCategory();
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
            <h1>View Category</h1>
            <div className="button">
              <Link to={`/admin/Addcategory`}>
                <button className="btn btn-outline-dark">Add</button>
              </Link>
            </div>
            <div className="col-lg-8">
              <table className="table mt-5 text-center">
                <thead className='table-primary'>
                  <tr>
                    <th scope="col">Srno</th>
                    <th scope="col">Category</th>

                  </tr>
                </thead>
                <tbody>
                  {
                    category.map((item, i) => {
                      i = i + 1
                      return (
                        <tr>
                          <td scope="row">{i}</td>
                          <td>{item.category}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Category