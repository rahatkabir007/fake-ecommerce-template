import * as React from "react";
import Image from "next/image";

function FilteredProductCardThree({product}) {
    return (
        <div className="flex flex-col gap-3 px-6 py-5 text-xl leading-8 text-teal-500 bg-white border border-solid border-black border-opacity-10 min-h-[580px]">
            <div className="relative flex flex-col items-center">
                <Image
                    loading="lazy"
                    src={product?.image}
                    width={410}
                    height={332}
                    className="object-cover w-[240px] h-[432px] rounded"
                    alt=""
                />
                <div className="flex flex-col gap-1 text-4xl text-zinc-900 absolute inset-0 top-[0.5rem] left-[-1rem]">
                    <span className="text-red-700">Special</span>{" "}
                    <span className="text-zinc-900">Offer</span>
                </div>
                <div className="flex flex-col gap-1 text-white text-3xl items-center justify-center h-[143px] save-3 w-[141px] text-center absolute inset-0 top-[2rem] left-[20rem]">
                    <span className="">Save</span>
                    <span className="">10%</span>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <span title={product?.title} className="text-xl text-black wrap-text max-w-[500px]">{product?.title}</span>
           
                <div className="flex gap-5">
                    <span className="text-3xl text-red-600">Rs.{product?.price}</span> 
                    <span className=" text-black">Rs. <s>{product?.price + 200}</s></span>
                </div>
                <div className="flex gap-10">
                    <span className="text-teal-500">Already Sold: 6 </span>
                    <span className="text-teal-500">Available: 30</span>
               </div>
            </div>
        </div>
    );
}

export default FilteredProductCardThree;