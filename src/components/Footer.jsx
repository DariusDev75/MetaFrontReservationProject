import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <>
    
       <ul>
    <li><a href="/home">Chicago</a></li>
    <li><a href="/about">ABOUT Us</a></li>
    <li><a href="/menu">MENU</a></li>
    <li><a href="/reservation">RESERVATION</a></li>
    <li><a href="/order">ORDER ONLINE</a></li>
    <li><a href="/login">LOGIN</a></li>
  </ul>

  <ul>
  <li><a href="/home">Contact</a></li>
  <li><a href="/home">Adress</a></li>
    <li><a href="/about">Phone Number</a></li>
    <li><a href="/menu">Email</a></li>

  </ul>

  <ul>
    <li><a href="/home">Social Media Link</a></li>
    <li><a href="/menu">Insta</a></li>
    <li><a href="/menu">Tiktok</a></li>
    <li><a href="/menu">Twitter</a></li>

  </ul>
    </>
  )
}

// styles

const Navigation = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;



`;

export default Footer