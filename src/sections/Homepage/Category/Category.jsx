import * as React from "react";
import Facebook from "@/assets/svg/facebook.svg";
import Twitter from "@/assets/svg/twitter.svg";
import Instagram from "@/assets/svg/instagram.svg";
import LinkedIn from "@/assets/svg/linkedin.svg";
import Menu from "@/assets/svg/menu.svg";
import Image from "next/image";
function NavItem({ children }) {
    return <div className="self-stretch my-auto">{children}</div>;
}

function SocialIcon({ src, aspectRatio, fillColor, width }) {
    return (
        <Image
            width={100}
            height={100}
            loading="lazy"
            src={src}
            alt=""
            className={`shrink-0 my-auto aspect-[${aspectRatio}] fill-${fillColor} w-[${width}px]`}
        />
    );
}

function Category() {
    const navItems = ["Home", "Easy Monthly Installments", "Shop by Brands", "Become a Vendor"];
    const socialIcons = [
        { src: Facebook, aspectRatio: 1.05, fillColor: "white", width: 11 },
        { src: Twitter, aspectRatio: 1.05, fillColor: "white", width: 22 },
        { src: LinkedIn, aspectRatio: 1.05, fillColor: "white", width: 22 },
        { src: Instagram, aspectRatio: 1.05, fillColor: "white", width: 22 },
    ];

    return (
        <div className=" shadow-sm bg-customDarkTeal">
            <header className="flex z-10 gap-5 justify-between container-x py-1 ">
                <nav className="flex gap-5 justify-between items-center p-1.5 text-sm text-white max-md:flex-wrap">
                    <div className="flex gap-3 self-stretch p-2 text-lg rounded-lg">
                        <Image 
                            width={100}
                            height={100}
                            loading="lazy"
                            src={Menu}
                            alt="Category icon"
                            className="shrink-0 my-auto aspect-square w-[13px]"
                        />
                        <div>Browse By Category</div>
                    </div>
                    {navItems.map((item, index) => (
                        <NavItem key={index}>{item}</NavItem>
                    ))}
                </nav>
                <div className="flex gap-5 justify-center items-center my-auto">
                    {socialIcons.map((icon, index) => (
                        <SocialIcon
                            key={index}
                            src={icon.src}
                            aspectRatio={icon.aspectRatio}
                            fillColor={icon.fillColor}
                            width={icon.width}
                        />
                    ))}
                </div>
            </header>
       </div>
    );
}

export default Category;