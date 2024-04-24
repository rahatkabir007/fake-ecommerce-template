import React from 'react'
import Image from 'next/image';

function CategoryImageCard({ data }) {
    return (
        <div className="flex flex-col justify-center relative">
            <div>
                <Image
                    src={data?.image}
                    alt={data?.title}
                    // width={500}
                    // height={500}
                    className="object-cover w-[272px] h-[199px]"
                />
            </div>
            <div className="flex justify-between absolute inset-0 top-[9rem] ml-[-5px] mb-3 mr-5 items-center px-[15px] py-[12px] category-slider-card-title-container">
                <div className="text-xl text-black capitalize">{data?.title}</div>
                <div className=" text-xl text-customSkyBlue">Shop</div>
            </div>
        </div>
    );
}


export default CategoryImageCard