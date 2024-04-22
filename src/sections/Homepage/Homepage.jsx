import React from 'react'
import Navbar from './Navbar/Navbar'
import Category from './Category/Category'
import Footer from './Footer/Footer'
import HeroSection from './HeroSection/HeroSection'
import CategorySlider from './CategorySlider/CategorySlider'

const Homepage = () => {
  return (
      <div>
      <Navbar />
      <main className='min-h-[80vh]'>
        <Category />
        <HeroSection />
        <CategorySlider/>
      </main>
      <Footer/>
    </div>
  )
}

export default Homepage