import React, { useEffect, useState } from 'react'
import SectionHeader from '@/components/SectionHeader'
import Loader from '@/components/Loader/Loader'
import { useLazyGetProductsQuery } from '@/store/api'
import ProductCard from '@/components/ProductCard'

const NewArrivalProducts = () => {

    const [getProducts, { isLoading }] = useLazyGetProductsQuery();

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(res => {
            setProducts(res?.data)
        }).catch(err => { 
            console.log(err)
        })
    },[])
    
  return (
      <div className='flex flex-col gap-6'>
          <SectionHeader coloredTitle="New" blackTitle="Arrivals" titleClassName='px-10' />
        
          <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-[31px]'>
              {
                  isLoading ? <Loader /> : products?.map(product => (
                      <ProductCard key={product?.id} item={product} />
                  ))
        }      
          </div>
    </div>
  )
}

export default NewArrivalProducts