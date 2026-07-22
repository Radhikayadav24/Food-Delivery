import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
               <div className="footer-logo">
        <img src={assets.logo} alt="Foodie" className="footer-logo-img" />
        <h2>Foodie</h2>
    </div>
               <p>
        Delicious food delivered right to your doorstep. Explore a wide
        variety of cuisines, place orders effortlessly, and enjoy fast,
        reliable delivery anytime.
    </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9893465201</li>
                    <li>radhika.yadav2409@gmail.com</li>
                </ul>
            </div>
           
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 &copy; Radhika - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer