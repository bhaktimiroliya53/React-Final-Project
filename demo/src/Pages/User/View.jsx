import React, { useEffect, useState } from 'react'
import Header from '../Header'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../Context/Auth';
import 'jquery-ui-dist/jquery-ui'


function View() {

  const { id } = useParams();
  const [auth, setauth] = useAuth()
  const [product, setproduct] = useState({})

  const getProduct = async () => {
    try {
      let { data } = await axios.get(`http://localhost:8000/products/${id}`)
      // console.log(data);
      setproduct(data);
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  useEffect(() => {
    getProduct();
  }, [])

  useEffect(() => {
    const headerMenu = document.getElementById("header");
    const navbarMenu = document.getElementById("menu");
    const burgerMenu = document.getElementById("burger");
    const bgOverlay = document.querySelector(".overlay");

    // Toggle to show and hide navbar menu
    if (burgerMenu && bgOverlay) {
      burgerMenu.addEventListener("click", () => {
        navbarMenu.classList.add("is-active");
        bgOverlay.classList.add("is-active");
      });

      bgOverlay.addEventListener("click", () => {
        navbarMenu.classList.remove("is-active");
        bgOverlay.classList.remove("is-active");
      });
    }

    // Closed navbar menu on links click
    document.querySelectorAll(".menu-link").forEach((link) => {
      link.addEventListener("click", () => {
        navbarMenu.classList.remove("is-active");
        bgOverlay.classList.remove("is-active");
      });
    });

    // Toggle to show and hide cart section
    const cart = document.getElementById("cart");
    const cartBtn = document.getElementById("cart-btn");

    if (cart && bgOverlay) {
      cartBtn.addEventListener("click", () => {
        cart.classList.add("is-active");
        bgOverlay.classList.add("is-active");
      });

      bgOverlay.addEventListener("click", () => {
        cart.classList.remove("is-active");
        bgOverlay.classList.remove("is-active");
      });
    }

    // Fixed navbar menu on window resizing
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        if (navbarMenu.classList.contains("is-active")) {
          navbarMenu.classList.remove("is-active");
          bgOverlay.classList.remove("is-active");
        }
      }
    });

  }, [])

  return (
    <>
      <Header />

      {/* <div className='col-lg-3'>
        <div className="card p-3 mb-5 text-center" style={{ width: '300px', height: '500px' }}>
          <img src={product.img} style={{ objectFit: "contain", height: "250px" }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.category}</h5>
            <hr />
            <p className="card-text"></p>
            <h5><p style={{fontWeight : 'bold', display : 'inline', marginRight : '5px'}}>Price :-</p>{product.price}</h5>
            <h5><p style={{fontWeight : 'bold', display : 'inline', marginRight : '5px'}}>description :- </p>{product.description}</h5>
          </div>
        </div>
      </div> */}

      <main className="main">
        <section className="section wrapper wrapper-section">
          <div className="container wrapper-column">
            <div className="wrapper-overlay">
              <img src={product.img} className="wrapper-image" alt="product" width={250}/>
            </div>
            <div className="wrapper-content">
              
              <div className="wrapper-inform">
                <span className="badge badge-darken">{product.category}</span>
                <h1 className="display-medium font-bold">{product.name}</h1>
                <p className="text-base font-normal">
                  {product.description}
                </p>
              </div>
              <div className="d-flex">
              <div className="wrapper-detail">
                <div className="price">
                  <span className="text-base font-medium">Price:</span>
                  <h3 className="text-large font-semi">{product.price}</h3>
                </div>
              </div>
              <div className="wrapper-detail mx-5">
                <div className="price">
                  <span className="text-base font-medium">Status:</span>
                  <h3 className="text-large font-semi">{product.marketStatus}</h3>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  )
}

export default View