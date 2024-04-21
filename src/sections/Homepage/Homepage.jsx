import React from 'react'
import Navbar from './Navbar/Navbar'
import Category from './Category/Category'
import Footer from './Footer/Footer'

const Homepage = () => {
  return (
      <div>
      <Navbar />
      <main className='min-h-[80vh]'>
        <Category />
      </main>
      <Footer/>
    </div>
  )
}

export default Homepage