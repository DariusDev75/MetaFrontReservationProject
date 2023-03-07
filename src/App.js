import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Header>
      <Navbar/>
    </Header>
      <Main></Main>
    <Footer/>
     </>
  )
}

export default App