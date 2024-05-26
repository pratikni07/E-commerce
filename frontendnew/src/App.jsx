import { useState } from 'react'
import './App.css'
import TopBar from './components/Offer/TopBar'
import Navbar1 from './components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage'

function App() {
  return (
    <>
      <TopBar/>
      <Navbar1/>
      <HomePage/>
    </>
  )
}

export default App
