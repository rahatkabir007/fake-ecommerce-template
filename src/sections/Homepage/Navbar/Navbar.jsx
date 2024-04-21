import React from 'react'
import Image from 'next/image';
import Logo from "@/assets/png/logo.png"
// import ArrowDown from "@/assets/svg/arrowDown.svg"
import SearchIcon from "@/assets/svg/search.svg"
import AudioIcon from "@/assets/svg/audioIcon.svg"
import UserIcon from "@/assets/svg/user.svg"
import HeartIcon from "@/assets/svg/heart1.svg"
import CartIcon from "@/assets/svg/Cart.svg"

const Navbar = () => {
  return (
    <div className='bg-teal-900 '>
      <header className="flex gap-5 justify-between py-1.5 container-x">
        <div className="flex gap-5 justify-between my-auto max-md:flex-wrap">
          <Image src={Logo} alt="Logo" className="shrink-0 max-w-full aspect-[2.78] w-[133px]" />
          <div className="flex flex-col justify-center my-auto max-md:max-w-full">
            <form className="flex gap-5 justify-between py-px pr-px pl-4 w-full bg-white rounded-md max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-3 items-center text-sm text-stone-400">
                <label htmlFor="category" className="grow self-stretch my-auto sr-only">
                  All categories
                </label>
                <select id="category" className="grow self-stretch my-auto" aria-label="Select category">
                  <option>All categories</option>
                </select>
                {/* <Image src={ArrowDown} alt="Dropdown arrow" className="shrink-0 self-stretch my-auto w-6 aspect-square" /> */}
                {/* <div className="shrink-0 self-stretch w-px border border-solid bg-zinc-400 border-zinc-400 h-[38px]" /> */}
                <label htmlFor="search" className="flex-auto self-stretch my-auto sr-only">
                  Search for products
                </label>
                <input
                  type="search"
                  id="search"
                  placeholder="Search for products"
                  className="flex-auto self-stretch my-auto"
                  aria-label="Search for products"
                />
              </div>
              <button type="submit" className="flex justify-center items-center px-2.5 py-2 rounded-none bg-zinc-400">
                <Image src={SearchIcon} alt="Search icon" className="w-6 aspect-square" />
              </button>
            </form>
          </div>
        </div>
        <div className="flex gap-5 justify-between text-white">
          <div className="flex flex-col p-1 text-sm">
            <div className="text-xs capitalize">Call Us Now</div>
            <div className="flex gap-0 mt-1 text-right">
              <Image src={AudioIcon} alt="Audio Phone icon" className="shrink-0 aspect-square w-[19px]" />
              <div>+011 5827918</div>
            </div>
            <div className="mt-1 capitalize">Sign In</div>
          </div>
          <nav className="flex gap-5 justify-between items-center my-auto text-base text-center capitalize whitespace-nowrap">
            <a href="#" aria-label="Wishlist">
              <Image src={UserIcon} alt="User icon" className="shrink-0 self-stretch my-auto w-6 aspect-square" />
            </a>
            <a href="#" aria-label="Compare">
              <Image src={HeartIcon} alt="Wishlist icon" className="shrink-0 self-stretch my-auto w-6 aspect-square" />
            </a>
            <a href="#" aria-label="Compare">
              <Image src={HeartIcon} alt="Wishlist icon" className="shrink-0 self-stretch my-auto w-6 aspect-square" />
            </a>
            <div className="flex gap-0.5 justify-center items-center self-stretch">
              <Image src={CartIcon} alt="Cart icon" className="shrink-0 aspect-[0.69] w-[25px]" />
              <span className="">Cart</span>
            </div>
          </nav>
        </div>
      </header>
   </div>
  )
}

export default Navbar