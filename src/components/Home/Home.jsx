import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import JokeCard from '../JokeCard/JokeCard'
import FeaturedJokes from '../FeaturedJokes/FeaturedJokes'

function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <FeaturedJokes/>
    <JokeCard/>
    
    </>
  )
}

export default Home