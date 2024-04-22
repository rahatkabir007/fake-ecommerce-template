import React from 'react'
import Image from 'next/image'
import Logo from "@/assets/png/logo.png";
import Visa from "@/assets/png/visa.png";
import MasterCard from "@/assets/png/master.png";
import Cash from "@/assets/png/cash.png";
import Installment from "@/assets/png/installment.png";
import FacebookIcon from "@/assets/svg/facebook.svg";
import TwitterIcon from "@/assets/svg/twitter.svg";
import InstagramIcon from "@/assets/svg/instagram.svg";
import LinkedInIcon from "@/assets/svg/linkedin.svg";

const Footer = () => {
  return (
      <div className='bg-customDarkGrey'>
          <div className="flex flex-col justify-center  items-center py-14 mt-8 ">
              <div className="self-center px-px pb-3.5 container-x">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col grow max-md:mt-10">
                              <Image
                                  loading="lazy"
                                  src={Logo}
                                  className="max-w-full aspect-[2.78] w-[133px]"
                                  width={133}
                                  height={48}
                                  alt=""
                              />
                              <div className="mt-3.5 text-lg tracking-wide leading-4 text-cyan-500">
                                  <span className="text-cyan-500">
                                      Got questions? Call us 24/7!
                                  </span>
                              </div>
                              <div className="mt-3.5 text-sm tracking-wide leading-4 text-white">
                                  03 111 666 144
                                  <br />
                                  0317 1777015.
                              </div>
                              <div className="mt-3.5 text-lg tracking-wide leading-4 text-white">
                                  <span className="text-cyan-500">Contact info</span>
                                  <br />
                                  <span className="text-base">info@winstore.pk</span>
                              </div>
                              <div className="flex gap-5 justify-center pr-20 mt-3.5 max-md:pr-5">
                                  <Image
                                      loading="lazy"
                                      src={FacebookIcon}
                                      className="shrink-0 aspect-[0.5] fill-white w-[11px]"
                                      width={11}
                                      height={22}
                                      alt=""
                                  />
                                  <Image
                                      loading="lazy"
                                      src={TwitterIcon}
                                      className="shrink-0 my-auto aspect-[1.22] fill-white w-[22px]"
                                      width={22}
                                      height={18}
                                      alt=""
                                  />
                                  <Image
                                      loading="lazy"
                                      src={LinkedInIcon}
                                      className="shrink-0 aspect-square w-[22px]"
                                      width={22}
                                      height={22}
                                      alt=""
                                  />
                                  <Image
                                      loading="lazy"
                                      src={InstagramIcon}
                                      className="shrink-0 aspect-square w-[22px]"
                                      width={22}
                                      height={22}
                                      alt=""
                                  />
                              </div>
                          </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col text-sm text-white max-md:mt-10">
                              <div className="text-xl text-cyan-500">Trending</div>
                              <div className="mt-5">Installments</div>
                              <div className="mt-3">Electronics</div>
                              <div className="mt-3">Grocery</div>
                              <div className="mt-3 max-md:mr-2.5">Health Beauty</div>
                              <div className="mt-3">Home Appliances</div>
                              <div className="mt-3">Mobile Accessories</div>
                          </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col text-sm text-white max-md:mt-10">
                              <div className="text-xl text-cyan-500">Information</div>
                              <div className="mt-5">About Us</div>
                              <div className="mt-3">Contact Us</div>
                              <div className="mt-3">FAQs</div>
                              <div className="mt-3">Shipping & Return</div>
                              <div className="mt-3">Privacy policy</div>
                              <div className="mt-3">Terms & Conditions</div>
                          </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[16%] max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col text-sm text-white max-md:mt-10">
                              <div className="text-xl text-cyan-500">Customer Care</div>
                              <div className="mt-5">My Account</div>
                              <div className="mt-3">Track Your Order</div>
                              <div className="mt-3">Recently Viewed</div>
                              <div className="mt-3">Wishlist</div>
                              <div className="mt-3">Compare</div>
                              <div className="mt-3">Become a Vendor</div>
                              <div className="flex gap-3 self-end mt-2.5 mr-16 max-md:flex-wrap max-md:mr-2.5">
                                  <Image
                                      loading="lazy"
                                      src={Visa}
                                      className="shrink-0 aspect-[1.75] w-[50px]"
                                      width={97}
                                      height={55}
                                      alt=""
                                  />
                                  <Image
                                      loading="lazy"
                                      src={MasterCard}
                                      className="shrink-0 aspect-[1.75] w-[50px]"
                                      width={97}
                                      height={55}
                                      alt=""
                                  />
                                  <Image
                                      loading="lazy"
                                      src={Cash}
                                      className="shrink-0 aspect-[1.75] w-[50px]"
                                      width={97}
                                      height={55}
                                      alt=""
                                  />
                                  <Image
                                      loading="lazy"
                                      src={Installment}
                                      className="shrink-0 aspect-[1.75] w-[50px]"
                                      width={97}
                                      height={55}
                                      alt=""
                                  />
                              </div>
                          </div>
                      </div>
                      
                  </div>
                  
              </div>
              
          </div>
    </div>
  )
}

export default Footer