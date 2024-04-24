import Image from 'next/image'
import React from 'react'

const FilteredProductCardTwo = ({product}) => {
  return (
      <div className="px-6 pt-6 bg-white border border-solid border-black border-opacity-10 max-w-[414px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col">
                      <div className="text-4xl text-zinc-900">
                          <span className="text-red-700">Special</span>{" "}
                          <span className="text-zinc-900">Offer</span>
                      </div>
                      <div className="text-xl leading-8 text-teal-500">
                          <span className="text-xl">{product?.title}</span>
                          <br />
                          <span className="text-3xl text-red-600">Rs.{product?.price}</span>
                          <br />
                          <span className="text-lg">Rs.</span>
                          <span className="text-lg line-through">{product?.price + 200}</span>
                          <br />
                          <span className="text-lg text-teal-500">Already Sold: 6 </span>
                          <br />
                          <span className="text-lg text-teal-500">Available: 30</span>
                      </div>
                  </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-center text-2xl text-center text-zinc-900">
                      <div className="flex items-center justify-center px-px h-[91px] rounded-[83px] w-[91px]">
                          <span className="text-neutral-900">Save</span>
                          <span className="text-zinc-900">10%</span>
                      </div>
                      <Image
                          src={product?.image}
                          alt=""
                          width={192}
                          height={172}
                          className="w-48 aspect-[1.11]"
                      />
                  </div>
              </div>
          </div>
      </div>
  )
}

export default FilteredProductCardTwo