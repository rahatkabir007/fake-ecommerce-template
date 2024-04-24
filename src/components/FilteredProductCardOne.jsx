import React from 'react'
import Image from 'next/image'

const FilteredProductCardOne = ({ product }) => {
  return (
      <div className="flex flex-col py-5 px-6 bg-white border border-solid border-black border-opacity-10 min-h-[292px]">
          <div className="flex gap-5 justify-between py-px">
              <div className="flex flex-col gap-2 text-xl leading-8 text-black">
                  <span className="text-xl wrap-text max-w-[300px]">{product?.title}</span>
                  <span className="text-3xl text-sky-500">Rs.{product?.price}</span>
                  <span className="text-lg">Rs. <span className="text-lg line-through">{product?.price + 200}</span></span>
               
              </div>
              <div className="text-4xl text-zinc-900 flex flex-col gap-1 basis-[30%]">
                  <span className="text-teal-500">Special</span> <span className="text-zinc-900">Offer</span>
              </div>
          </div>
          <div className="flex gap-5 justify-between pr-3 text-2xl text-center text-zinc-900">
              <div className="flex flex-col justify-center px-6 py-3 my-auto save-1 rounded w-[137px]">
                  <span className="">Save</span>
                  <span className="">10%</span>
              </div>
              <Image
                  src={product?.image}
                  alt=""
                  width={192}
                  height={121}
                  className="shrink-0 w-[192px] h-[121px] object-cover "
              />
          </div>
      </div>
  )
}

export default FilteredProductCardOne