import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Nav from '../Nav'
import Navbar from '../Nav'
import { useAuth } from '../../Context/Auth'
import axios from 'axios'

function Cart() {

  const [auth, setAuth] = useAuth()
  const [cart, setcart] = useState([])

  const getCart = async() => {
    try {
      let {data} = await axios.get(`http://localhost:8000/carts`)
      setcart(data)
    } catch (err) {
      console.log(err);
      return false
    }
  }

  const deleteData = async(id) => {
    try {
      let {data} = await axios.get(`http://localhost:8000/carts`);
      
    } catch (err) {
      console.log(err);
      return false
    }
  }

  useEffect(() => {
    getCart()
  },[])

  return (
    <>
      <Navbar/>
      <Header />
      <div className="container">
        <div className="row">
          <h2 className='text-center'>Cart</h2>

          <div className="col-md-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Img</th>
                  <th scope="col">Price</th>
                  <th scope="col">Qty</th>
                  {/* <th scope="col">Total</th> */}
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                   cart && cart.map((val , i) => {
                    i++
                    return (
                      <tr>
                        <th scope="row">{i}</th>
                        <td>{val.name}</td>
                        <td>
                          <img src={val.img} width="50" />
                        </td>
                        <td>{val.price}</td>
                        <td>
                          <input type="number"  className='form-control' value={1}/>
                        </td>
                        <td>
                          <button className='btn btn-danger' onClick={ () => deleteData(val.id)}>Delete</button>
                        </td>
                      </tr>
                    )
                  })
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart