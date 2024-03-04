import React from 'react'
import { IoIosMail } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Navbar() {
  return (
    <>
        <nav>
            <div className="navbar">
              <div className="list-info">
                <ul className='d-flex'>
                  <li>
                    <span><IoIosMail style={{fontSize : '20px'}}/> info@gmail.com</span>
                  </li>
                  <li>
                    <span><IoMdCall  style={{fontSize : '19px'}}/> 1+(234)5678 9010</span>
                  </li>
                </ul>
              </div>
              <div className="list-icon">
                <ul className='d-flex'>
                  <li>
                    <span><FaTwitter /></span>
                  </li>
                  <li>
                    <span><FaFacebookF /></span>
                  </li>
                  <li>
                    <span><FaLinkedinIn /></span>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar