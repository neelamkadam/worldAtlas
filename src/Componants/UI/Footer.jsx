import React from 'react'
import FooterApi from '../../Api/FooterApi';
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { colors } from '@material-ui/core';
import "../../App";


const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace className='text-blue-400 mt-2' style={{width:"30px", height:"auto"}} />,
    IoCallSharp : <IoCallSharp className='text-blue-400 mt-2' style={{width:"30px", height:"auto"}} />,
    IoMail : <IoMail className='text-blue-400 mt-2' style={{width:"30px", height:"auto"}}  />,
  };
  return (
    <>
      <footer className='footer-section'>
      <div className=" grid container grid-three-cols">
          {
            FooterApi.map((currElem,index)=>{
              const{icon,title,details} =currElem;
              return(
                <div className="footer-contact" key={index}>
                  <div className="icon " style={{width:"50px"}}>{footerIcon[icon]}</div>
                  <div className="footer-contact-text">
                    <p>{title}</p>
                    <p>{details}</p>
                  </div>
                </div>
              );
            })
          }
      </div>
        <div className='copyright-area'>
          <div className="container">
            <div className="grid grid-two-cols">
              <div className="copyright-text">
                <p>
                  Copyright &copy ; 2025 ,All Right Reserved
                  <NavLink to="https://www.google.co.in/" target='_blank'>
                   <span style={{color:"blue"}}> Google</span> 
                  </NavLink>
                </p>
              </div>
              <div className="footer-menu">
                <ul>
                  <li>
                    <NavLink to="/"><span>Home</span></NavLink>
                  </li>
                  <li>
                    <NavLink to="/about"><span>About</span></NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact"><span>Contact</span></NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
