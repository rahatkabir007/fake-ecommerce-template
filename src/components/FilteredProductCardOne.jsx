import React from 'react'
import Image from 'next/image'

const FilteredProductCardOne = ({ product }) => {
  return (
      <div className="flex flex-col py-5 pr-2 pl-6 bg-white border border-solid border-black border-opacity-10 max-w-[414px]">
          <div className="flex gap-5 justify-between py-px">
              <div className="text-xl leading-8 text-black">
                  <span className="text-xl">{product?.title}</span>
                  <br />
                  <span className="text-xl">{product?.category}</span>
                  <br />
                  <span className="text-3xl text-sky-500">Rs.{product?.price}</span>
                  <br />
                  <span className="text-lg">Rs.</span>
                  <span className="text-lg line-through">{product?.price + 200}</span>
              </div>
              <div className="text-4xl text-zinc-900">
                  <span className="text-teal-500">Special</span> <span className="text-zinc-900">Offer</span>
              </div>
          </div>
          <div className="flex gap-5 justify-between pr-3 text-2xl text-center text-zinc-900">
              <div className="justify-center px-6 py-4 my-auto">
                  <span className="text-neutral-900">Save</span>
                  <span className="text-zinc-900">10%</span>
              </div>
              <Image
                  src={product?.image}
                  alt=""
                  width={192}
                  height={121}
                  className="shrink-0 max-w-full"
              />
          </div>
      </div>
  )
}

export default FilteredProductCardOne