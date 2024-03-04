import React, { useEffect, useState } from 'react'
import Header from '../Header'
import axios from 'axios';
import Nav from '../Nav';
import Navbar from '../Nav';

function Home() {
  const [home, setHome] = useState([]);

  const BestProduct = async () => {
    let { data } = await axios.get(`http://localhost:8000/products`);
    setHome(data);
  }
  useEffect(() => {
    BestProduct();
  }, [])
  return (
    <>
      <Navbar/>
      <Header />
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/2/21/b58b523f-4643-4871-a526-3ac9fa0e3bc21708517776346-Roadster_DekstopBanner.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h2>SHOP BY CATEGORY</h2>
          {
            home.map((val) => {
              return (

                <div className="col-lg-3">
                  <div className="card p-4" style={{ width: '18rem' }}>
                    <img src={val.img} height="200" style={{ objectFit: "contain", marginTop : '20px'}} className="card-img-top" alt="..." />
                    <div className="card-body text-center">
                      <h1 className="card-title">{val.name}</h1>
                      <h4 className="card-text">{val.price}</h4>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home