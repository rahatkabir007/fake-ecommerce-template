import React, { useEffect, useState } from 'react'
import FilteredProductCardOne from '@/components/FilteredProductCardOne';
import FilteredProductCardThree from '@/components/FilteredProductCardThree';
import FilteredProductCardTwo from '@/components/FilteredProductCardTwo';
import SectionHeader from '@/components/SectionHeader';
import { categories } from '@/data/categories';
import { useLazyGetProductsByCategoryQuery } from '@/store/api';
import Loader from '@/components/Loader/Loader';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
const BestDealProducts = () => {

  const [getProductsByCategory] = useLazyGetProductsByCategoryQuery();

  const [products, setProducts] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const [activeCategory, setActiveCategory] = useState('electronics')

  useEffect(() => {
    setIsLoading(true)
    getProductsByCategory(activeCategory).then(res => {
      setProducts(res?.data)
      setIsLoading(false)
    }).catch(err => {
      console.log(err)
    })
  }, [activeCategory])


  const NavItem = ({ children }) => (
    <div className="justify-center text-xl uppercase leading-[53px] max-md:flex-wrap cursor-pointer py-2">
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
    <div className='flex flex-col gap-6 justify-center'>
      <SectionHeader coloredTitle="Best" blackTitle="Deals">
        <nav className="flex items-center gap-3 self-stretch px-5 py-3 text-black max-md:flex-wrap">
          {categories.map((item) => (
            <NavItem key={item.label}>
              <span onClick={() => setActiveCategory(item?.value)} className={activeCategory === item?.value ? "text-customCyan border-b-2 border-b-customCyan" : ""}>{item.title}</span>
            </NavItem>
          ))}
          <div
            className='cursor-pointer'
            onClick={selectPrevCategory}
            style={{ opacity: categories.findIndex(cat => cat.value === activeCategory) === 0 ? 0.5 : 1 }}
          >
            <ArrowLeftOutlined />
          </div>
          <div
            className='cursor-pointer'
            onClick={selectNextCategory}
            style={{ opacity: categories.findIndex(cat => cat.value === activeCategory) === categories.length - 1 ? 0.5 : 1 }}
          >
            <ArrowRightOutlined />
          </div>
        </nav>
       
      </SectionHeader> 

     
      {
        isLoading ? <div className='min-h-[50vh]'>
          <Loader/>
        </div> : <>
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 items-stretch">
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
        </>
       }

    </div>
  )
}

export default BestDealProducts