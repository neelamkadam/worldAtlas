import React from 'react'
import { FaArrowRight } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <>
      <main className='hero-section main'>
       <div className='container grid grid-two-cols'>
        <div className="hero-content">
          <h1 className='heading-xl'>
            Explore the world, One Country at a Time.
          </h1>
          <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum reiciendis officiis ipsum est deserunt doloribus.</p>
          <button className='btn btn-darken btn-inline bg-white-box'>
            start Exploring <FaArrowRight />
          </button>
        </div>
        <div className="hero-image">
        <img className="banner-image" src="/Images/world-beauty.png" alt="world beauty" />
        </div>
      </div>
    </main>
    </>
  )
}

