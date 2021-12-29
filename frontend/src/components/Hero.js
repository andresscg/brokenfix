import React from "react";
import "../styles/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div id="herotext">
        <p className='heroAboutus'>Make the most of your home now more than ever!</p>
        <p className='heroAboutus2'>At Broke&fix  we take pride in partnering with skilled craftsmen <br></br>from a variety of specialties to provide you with peace of mind <br></br> when tackling all of your home improvement needs.</p>
        </div>
        <img id="bgheroimg" src="../assets/hero2.png" alt="herobackground"/>
      </div>
      <div className='buttonshero'>
        <button  className='btnhero'><Link to="/service/61c8d6cc34922188861306ec"><img className='imgbtn' src="../assets/cleaning.png" /></Link></button>
        <button  className='btnhero'><Link to="/service/61c8ccaceab2f20b23a82555"><img className='imgbtn' src="../assets/Electrician.png" /></Link></button>
        <button  className='btnhero'><Link to="/service/61c8ccaceab2f20b23a82555"><img className='imgbtn' src="../assets/Electrician.png" /></Link></button>
        <button  className='btnhero'><Link to="/service/61c8d2d5eab2f20b23a8255c"><img className='imgbtn' src="../assets/gas.png" /></Link></button>
        <button  className='btnhero'><Link to="/service/61c8cd18eab2f20b23a82558"><img className='imgbtn' src="../assets/plumber.png" /></Link></button>
        <button  className='btnhero'><Link to="/service/61c8d326eab2f20b23a8255e"><img className='imgbtn' src="../assets/carpenter.png" /></Link></button>
        <button  className='btnhero'><Link to="/service/61c8d29eeab2f20b23a8255a"><img className='imgbtn' src="../assets/locksmit.png" /></Link></button>
      </div>
    </>
  )
}

export default Hero;
