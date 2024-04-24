import Image from 'next/image'
import React from 'react'

const FilteredProductCardTwo = ({product}) => {
  return (
      <div className="px-6 py-5 bg-white border border-solid border-black border-opacity-10 min-h-[290px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 justify-between">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col">
                      <div className="flex flex-col gap-1 text-4xl text-zinc-900">
                          <span className="text-customRed">Special</span>{" "}
                          <span className="text-black">Offer</span>
                      </div>
                      <div className="text-xl leading-8 wrap-text max-w-[200px]">
                          <span title={product?.title} className="text-xl wrap-text max-w-[100px]">{product?.title}</span>
                          <br />
                          <span className="text-3xl text-red-600">Rs.{product?.price}</span>
                          <br />
                          <span className="text-lg">Rs.</span>
                          <span className="text-lg line-through">{product?.price + 200}</span>
                          <br />
                          <span className="text-lg text-customCyan">Already Sold: 6 </span>
                          <br />
                          <span className="text-lg text-customCyan">Available: 30</span>
                      </div>
                  </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-center justify-between text-2xl text-center text-black">
                      <div className="flex flex-col gap-1 items-center justify-center h-[89px] save-2 w-[89px] text-center">
                          <span className="">Save</span>
                          <span className="">10%</span>
                      </div>
                      <Image
                          src={product?.image}
                          alt=""
                          width={192}
                          height={121}
                          className="shrink-0 w-[192px] h-[121px] object-cover"
                      />
                  </div>
              </div>
          </div>
      </div>
  )
}

export default FilteredProductCardTwo