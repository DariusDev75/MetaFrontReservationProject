import React from 'react'
import {NavbarLogo} from "../../public/logo.png"

const Navbar = () => {
  return (
    <>
    <img src={NavbarLogo}/>
    <ul>
    <li><a href="/home">HOME</a></li>
    <li><a href="/about">ABOUT Us</a></li>
    <li><a href="/menu">MENU</a></li>
    <li><a href="/reservation">RESERVATION</a></li>
    <li><a href="/order">ORDER ONLINE</a></li>
    <li><a href="/login">LOGIN</a></li>
  </ul>
    </>
  )
}

export default Navbar