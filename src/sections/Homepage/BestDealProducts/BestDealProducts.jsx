import FilteredProductCardOne from '@/components/FilteredProductCardOne';
import FilteredProductCardThree from '@/components/FilteredProductCardThree';
import FilteredProductCardTwo from '@/components/FilteredProductCardTwo';
import SectionHeader from '@/components/SectionHeader';
import { categories } from '@/data/categories';
import { useLazyGetProductsByCategoryQuery } from '@/store/api';
import React, { useEffect, useState } from 'react'

const BestDealProducts = () => {

  const [getProductsByCategory, { isLoading }] = useLazyGetProductsByCategoryQuery();

  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState('electronics')

  useEffect(() => {
    getProductsByCategory(activeCategory).then(res => {
      setProducts(res?.data)
    }).catch(err => {
      console.log(err)
    })
  }, [activeCategory])


  const NavItem = ({ children }) => (
    <div className="justify-center text-xl uppercase leading-[53px] max-md:flex-wrap cursor-pointer">
      {children}
    </div>
  );

  const selectPrevCategory = () => {
    const currentIndex = categories.findIndex(cat => cat.value === activeCategory);
    const prevCategory = categories[currentIndex - 1];
    if (prevCategory) {
      setActiveCategory(prevCategory.value);
    }
  };

  const selectNextCategory = () => {
    const currentIndex = categories.findIndex(cat => cat.value === activeCategory);
    const nextCategory = categories[currentIndex + 1];
    if (nextCategory) {
      setActiveCategory(nextCategory.value);
    }
  };

  return (
    <div className='flex flex-col gap-6'>
      <SectionHeader coloredTitle="Best" blackTitle="Deals">
        <nav className="flex items-center gap-3 self-stretch px-5 py-3 text-black max-md:flex-wrap">
          {categories.map((item,index) => (
            <NavItem key={item.label}>
              <span onClick={() => setActiveCategory(item?.value)} className={activeCategory === item?.value ? "text-cyan-500" : ""}>{item.title}</span>
            </NavItem>
          ))}
          {/* <img
            onClick={() => {
              setActiveCategory('electronics')
            }}
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/84d8b42d91813dd89d59b4b2cc6ef374502fd0193dddb76329996141e96f8c3d?apiKey=88771a252400406bbb49e96202b34082&"
            alt=""
            className="shrink-0 self-stretch my-auto w-11 aspect-[3.13] cursor-pointer"
          /> */}
          <span onClick={selectPrevCategory}>Prev Item</span>
          <span onClick={selectNextCategory}>Next Item</span>
        </nav>
       
      </SectionHeader> 

      
      <div className="justify-center px-20 pb-12 max-md:px-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col gap-[15px] basis-[33%] max-md:ml-0 max-md:w-full">
            {
              products?.slice(0, 2)?.map((product, index) => {
                return (
                  <FilteredProductCardOne key={index} product={product} />
                )
              })
            }
          </div>
          <div className="flex flex-col ml-5 basis-[33%] max-md:ml-0 max-md:w-full">
            {
              products?.slice(2, 3)?.map((product, index) => {
                return (
                  <FilteredProductCardThree key={index} product={product} />
                )
              })
            }
          </div>
          <div className="flex flex-col gap-[15px] ml-5 basis-[33%] max-md:ml-0 max-md:w-full">
            {
              products?.slice(3, 5)?.map((product, index) => {
                return (
                  <FilteredProductCardTwo key={index} product={product} />
                )
              })
            }
          </div>
        </div>
      </div>
      {/* <div className='flex flex-wrap flex-col md:flex-row items-start gap-[15px] w-full'>
        <div className='flex flex-col gap-[15px] order-2 md:order-1'>
          {
            products?.slice(0, 2)?.map((product, index) => {
              return (
                <FilteredProductCardOne key={index} product={product} />
              )
            })
          }
          </div>
        <div className='order-1 md:order-2'>
          {
            products?.slice(2, 3)?.map((product, index) => {
              return (
                <FilteredProductCardThree key={index} product={product} />
              )
            })
          }
          </div>
        <div className='flex flex-col gap-[15px] order-3'>
          {
            products?.slice(3, 5)?.map((product, index) => {
              return (
                <FilteredProductCardTwo key={index} product={product} />
              )
            })
          }
        </div>
      </div> */}
    </div>
  )
}

export default BestDealProducts