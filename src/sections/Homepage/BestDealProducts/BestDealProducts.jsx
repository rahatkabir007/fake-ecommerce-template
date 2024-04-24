import SectionHeader from '@/components/SectionHeader';
import { useLazyGetProductsByCategoryQuery } from '@/store/api';
import React, { useEffect, useState } from 'react'

const BestDealProducts = () => {

  const [getProductsByCategory, { isLoading }] = useLazyGetProductsByCategoryQuery();

  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState('jewelery')

  useEffect(() => {
    getProductsByCategory(activeCategory).then(res => {
      setProducts(res?.data)
    }).catch(err => {
      console.log(err)
    })
  }, [activeCategory])

  return (
    <div className='flex flex-col gap-6'>
      <SectionHeader coloredTitle="Best" blackTitle="Deals">
        
      </SectionHeader> 

      {/* <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-[31px]'>
       
      </div> */}
    </div>
  )
}

export default BestDealProducts