import React from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '@/store/slice/productSlice';

const ProductCard = ({ item }) => {
    

    const dispatch = useDispatch();

    const cart = useSelector(state => state.productStore.cart);

    const isInCart = cart.includes(item.id);
    const handleAddToCart = () => {
        dispatch(addToCart(item.id));
    };

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(item.id));
    };

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
          <div
              onClick={isInCart ? handleRemoveFromCart : handleAddToCart}
              className={`flex justify-center px-[10px] py-2.5 mt-3 text-base text-white cursor-pointer rounded  ${isInCart ? 'bg-customRed' : 'bg-customLightCyan'}`}
          >
              {isInCart ? 'Remove from cart' : 'Add to cart'}
          </div>
      </div>
  )
}

export default ProductCard