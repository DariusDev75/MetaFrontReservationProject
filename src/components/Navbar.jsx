import React from 'react'
import styled from 'styled-components';
import NavbarLogo from "../img/logo.png"

const Navbar = () => {
  return (
    <>
    <GlobalSectionContainer>

    <GlobalSection>
    <ImgContainer>
    <img src={NavbarLogo}/>
    </ImgContainer>
    
    <Navigation>
    <a href="/home">HOME</a>
    <a href="/about">ABOUT US</a>
    <a href="/menu">MENU</a>
    <a href="/reservation">RESERVATION</a>
    <a href="/order">ORDER ONLINE</a>
    <a href="/login">LOGIN</a>
    </Navigation>
    </GlobalSection>
    </GlobalSectionContainer>
    </>

  )
}


// styles

const GlobalSectionContainer = styled.div`
padding: 15px;
width: 100%;
display: flex;


`;

const GlobalSection = styled.div`
padding: 10px 100px;
width: 100%;
display: flex;

`;

const ImgContainer = styled.div`
width: 100%;
display: flex;

`;

const Navigation = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;



`;

export default Navbar