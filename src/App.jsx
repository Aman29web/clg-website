import React from 'react'
import Navbar from './copmonenets/Nav-bar/Navbar'
import Hero from './copmonenets/Hero/Hero'
import Programs from './copmonenets/Programs/Programs'
import Title from './copmonenets/Title/Title'
import About from './copmonenets/About/About'
import Campus from './copmonenets/Campus/Campus'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subtitle='Our PROGRAM' title='What We Offer'></Title>
      <Programs></Programs>
      <About></About>
      <Title subtitle='Gallery' title='Campus Photos'></Title>
      <Campus></Campus>

      </div>


    </div>
  )
}

export default App
