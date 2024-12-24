import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import FeaturedJokes from '../FeaturedJokes/FeaturedJokes'
import Memes from '../Memes/Memes'


function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <FeaturedJokes/>
    <Memes/>
    
    </>
  )
}

export default Home