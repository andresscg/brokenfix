import React, { useState, useEffect } from "react";
import "../styles/Hero.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import servicesActions from "../redux/actions/servicesActions";

const servicesHome =[
  {id:"/services/61c8d6cc34922188861306ec",
    img: "../assets/cleaning.png"},
    {id: "/services/61c8ccaceab2f20b23a82555",
    img: "../assets/Electrician.png"},
    {id: "/services/61c8ccaceab2f20b23a82555",
    img: "../assets/gas.png"},
    {id: "/services/61c8cd18eab2f20b23a82558",
    img: "../assets/plumber.png"},
    {id: "/services/61c8d326eab2f20b23a8255e",
    img: "../assets/carpenter.png"},
    {id: "/services/61c8d29eeab2f20b23a8255a",
    img: "../assets/locksmit.png"},
]

const Hero = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(servicesActions.getServices());
    } catch (err) {
      console.log(err);
    }
  }, []);

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
        {servicesHome.map((service)=>{
          return( 
            <button  className='btnhero'><Link to={service.id}><img className='imgbtn' src={service.img} /></Link></button>
          )
        })}
        
      </div>
    </>
  )
}

export default Hero;
