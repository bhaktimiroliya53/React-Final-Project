import React, { useEffect, useState } from 'react'
import Header from '../Header'
import LeftSidebar from './LeftSidebar'
import { useAuth } from '../../Context/Auth'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UserDetails() {

  const navigate = useNavigate('');
  const { id } = useParams();
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    if (auth?.user?.role === "user") {
      navigate('/')
    }
  })

  const getuser = async () => {
    try {
      let { data } = await axios.get(`http://localhost:8000/users/${id}`)
      setUser(data)
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  const getCart = async () => {
    try {
      let { data } = await axios.get(`http://localhost:8000/carts?user=${auth.user.id}`)
      setCart(data);
    } catch (err) {
      console.log(err);
      return false
    }
  }

  useEffect(() => {
    getuser()
    getCart()
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
            <h1>User Details</h1>

            <div className="user-card">
              <div className="avatar">
                <i className="fa fa-user" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt />
              </div>
              <div className="details">
                <div className="name">
                  Name :- {auth.user?.name}
                </div>
                <div className="number">
                  <i className="fa fa-phone" />
                  <p>Email :- {auth.user?.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-3 text-center">
              <h2>Carts</h2>
              <div className='d-flex flex-wrap justify-content-center'>
                {
                  cart.map((val) => {
                    return (
                      <div className="card p-3 mx-5" style={{ width: '16rem', height: '400px' }}>
                        <img src={val.img} height="200" style={{ objectFit: "contain" }} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{val.name}</h5>
                          <p className="card-text">{val.price}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDetails
