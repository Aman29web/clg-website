import React from 'react'
import Navbar from './copmonenets/Nav-bar/Navbar'
import Hero from './copmonenets/Hero/Hero'
import Programs from './copmonenets/Programs/Programs'
import Title from './copmonenets/Title/Title'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subtitle='Our PROGRAM' title='What We Offer'></Title>
      <Programs></Programs>
      </div>


    </div>
  )
}

export default App
