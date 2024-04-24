import * as React from "react";
import Image from "next/image";

function FilteredProductCardThree({product}) {
    return (
        <div className="flex flex-col px-6 py-5 text-xl leading-8 text-teal-500 bg-white border border-solid border-black border-opacity-10 min-h-[600px]">
            <Image
                loading="lazy"
                src={product?.image}
                width={410}
                height={332}
                className="w-full max-w-[410px]"
                alt=""
            />
            <div>
                <span className="text-xl">{product?.title}</span>
                <br />
                <span className="text-3xl text-red-600">Rs.{product?.price}</span> Rs.{" "}
                <span className="line-through">{product?.price + 200}</span>
                <br />
                <span className="text-teal-500">Already Sold: 6 Available: 30</span>
            </div>
        </div>
    );
}

export default FilteredProductCardThree;