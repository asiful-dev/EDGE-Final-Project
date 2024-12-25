import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import FeaturedJokes from '../FeaturedJokes/FeaturedJokes'
import Memes from '../Memes/Memes'
import FunnyQuotes from '../FunnyQuotes/FunnyQuotes'
import Footer from '../Footer/Footer'


function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <FeaturedJokes/>
    <Memes/>
    <FunnyQuotes/>
    <Footer/>
    </>
  )
}

export default Home