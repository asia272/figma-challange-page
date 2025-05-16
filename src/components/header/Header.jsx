import React from 'react'
import "./Header.css"
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />
      </nav>
      <div className="header-content">
        <p> Get ready to feel alive, energised, and have the most fun you will ever have while exercising!</p>
        <h2>Sign Up Today & Join Over 3,000 Happier, Healthier People Who Said This Was The Best Decision Of Their Lives!</h2>
      </div>
    </header>
  )
}

export default Header
