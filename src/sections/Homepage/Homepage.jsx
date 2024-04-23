import React from 'react'
import Navbar from './Navbar/Navbar'
import Category from './Category/Category'
import Footer from './Footer/Footer'
import HeroSection from './HeroSection/HeroSection'
import CategorySlider from './CategorySlider/CategorySlider'
import NewArrivalProducts from './NewArrivalProducts/NewArrivalProducts'
import BestDealProducts from './BestDealProducts/BestDealProducts'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <main className='min-h-[80vh]'>
        <Category />
        <HeroSection />
        <CategorySlider />
        <div className='container-x my-[26px] bg-customLightGrey h-[1px]'>

        </div>
        <div className='container-x my-[46px]'>
          <NewArrivalProducts />
        </div>
        <div className='container-x my-[46px]'>
          <BestDealProducts />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Homepage