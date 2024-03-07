import React, { useEffect, useState } from 'react'
import Header from '../Header'
import LeftSidebar from './LeftSidebar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../Context/Auth'

function User() {

  const navigate = useNavigate()  
  const [ auth , setAuth] = useAuth('')
  const [user, setUser] = useState([])

  useEffect(() => {
    if(auth?.user?.roale === "user"){
        navigate('/')
    }
},[])

  const getUser = async() => {
    try{
      let {data} = await axios.get(`http://localhost:8000/users?roale=user`)
      setUser(data)
    }catch(err){
      console.log(err);
      return false;
    }
  }

  const deleteUser = async(id) => {
    try {
      let {data} = await axios.delete(`http://localhost:8000/users/${id}`)
      let del = user.filter((val) => {
        return val.id !== id
      })
      setUser(del)
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  useEffect(() => {
    getUser()
  },[])

  return (
    <>
      <Header />
      <div className="row">
        <div className="col-lg-3" >
          <LeftSidebar />
        </div>
        <div className="col-lg-9">
          <div className="category-list">
            <h1>User</h1>

            <div className="row">
              <center>
                <div className="col-lg-8 text-center">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Srno</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        user.map((val , i) => { i++ 
                          return (
                            <tr>
                              <th scope="row">{i}</th>
                              <td>{val.name}</td>
                              <td>{val.email}</td>
                              <td>
                                <Link to={`/admin/userdetails/${val.id}`}>
                                  <button className='btn btn-success btn-sm'>View</button>
                                </Link>
                                <button className='btn btn-danger btn-sm mx-3' onClick={ ()=> deleteUser(val.id)}>Delete</button>
                                <button className='btn btn-primary btn-sm'>Edit</button>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default User