import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <div className='hero-bg flex justify-center items-center'>
            <div className="container-x">
                <section className="flex flex-col md:flex-row gap-5 justify-between max-md:flex-wrap">
                    <div className="flex flex-col justify-center p-6 gap-2 max-w-full md:max-w-[490px]">
                        <h1 className="text-6xl  text-black leading-[53px] tracking-wide max-md:max-w-full max-md:text-4xl max-md:leading-10">
                            Shop <span className="text-customCyan">Computer & experience</span>
                        </h1>
                        <p className="text-sm text-black capitalize tracking-wider max-md:max-w-full">
                            You cannot inspect quality into the product; it is already there.
                            <br />I am not a product of my circumstances. I am a product of my decisions.
                        </p>
                        <button className="justify-center self-start px-10 py-[15px] text-base tracking-wide leading-6 text-center text-[15px] text-white bg-customSkyBlue rounded-[5px]">
                            View More
                        </button>
                    </div>
                    <div className='basis-[15%] hidden md:block'>
                        <div className="off-circle flex justify-center items-center self-start px-7 text-5xl text-center text-white whitespace-nowrap h-[162px] w-[162px] max-md:px-5 max-md:text-4xl mb-0 lg:mb-32">
                            40% <br /> Off
                        </div>
                   </div>
                </section>
            </div>
        </div>
    )
}

export default HeroSection