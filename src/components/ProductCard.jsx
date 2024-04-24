import React from 'react'
import Image from 'next/image'

const ProductCard = ({item}) => {
  return (
      <div className="flex flex-col p-3.5 bg-white border border-black border-opacity-10 max-w-full md:max-w-[190px] rounded">
          <div title={item?.title} className="text-xs text-black capitalize wrap-text max-w-[150px]">{item?.title}</div>
          <div title={item?.description} className="capitalize self-start mt-3 text-base text-customLightDarkTeal2 wrap-text max-w-[150px]">
             {item?.description}
          </div>
          <Image
              loading="lazy"
              src={item?.image}
              className="self-center mt-3 w-[158px] h-[129px] aspect-[1.22] object-contain"
              width={190}
              height={156}
              alt=""
          />
          <div className="flex items-center gap-2 mt-3">
              <s className="text-sm text-zinc-500">RS {item?.price + 200}</s>
              <div className="text-base text-customCyan">RS {item?.price}</div>
          </div>
          <div className="flex justify-center px-9 py-2.5 mt-3 text-base text-white bg-customLightCyan cursor-pointer rounded">
              Add to cart
          </div>
      </div>
  )
}

export default ProductCard