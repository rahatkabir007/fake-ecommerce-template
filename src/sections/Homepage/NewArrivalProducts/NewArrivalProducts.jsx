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
      <div className='flex flex-col gap-6 justify-center items-center'>
          <SectionHeader coloredTitle="New" blackTitle="Arrivals" titleClassName='px-0 md:px-10' />
          {
              isLoading ? <Loader /> : <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 gap-[31px] items-center'>
                  {products?.slice(0, 10)?.map(product => (
                      <ProductCard key={product?.id} item={product} />
                  ))
                  }
              </div>
        }
        
    </div>
  )
}

export default NewArrivalProducts