import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import ProductStore from './components/ProductStore'
import BySeries from './components/BySeries'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Navbar/> 
    <Header/>
    <ProductStore/>
    <BySeries/>
    <Footer/>
    </>
  )
}

export default App
