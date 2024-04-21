import * as React from "react";

function NavItem({ children }) {
    return <div className="self-stretch my-auto">{children}</div>;
}

function SocialIcon({ src, aspectRatio, fillColor, width }) {
    return (
        <img
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
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/00e6dea50f9610dea7040c7dd72141560fa9832c4690c6f43b398cda09dff138?apiKey=88771a252400406bbb49e96202b34082&", aspectRatio: 0.5, fillColor: "white", width: 11 },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6b2db4e3f6a8c2f670fa759b40ed848b3ab9399743c4f6d5e467600be6a8f87?apiKey=88771a252400406bbb49e96202b34082&", aspectRatio: 1.22, fillColor: "white", width: 22 },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/94fd5a7d019fd09a36528fc259cebce50ce1ebccbd52379400b07af9a9b17204?apiKey=88771a252400406bbb49e96202b34082&", aspectRatio: 1.05, fillColor: "white", width: 22 },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/72a4e970e13eb7da409aef51a3fedf33f863d4646b411a37ac1d3a7fd9a442c4?apiKey=88771a252400406bbb49e96202b34082&", aspectRatio: 1.05, fillColor: "white", width: 22 },
    ];

    return (
        <div className=" shadow-sm bg-customDarkTeal">
            <header className="flex z-10 gap-5 justify-between container-x py-1 ">
                <nav className="flex gap-5 justify-between items-center p-1.5 text-sm text-white max-md:flex-wrap">
                    <div className="flex gap-3 self-stretch p-2 text-lg rounded-lg">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/db2b5d53cdc5c90521a7dedcc0e40e5de6d4c5a082bbb50d98958fe2ecf3d426?apiKey=88771a252400406bbb49e96202b34082&"
                            alt="Category icon"
                            className="shrink-0 my-auto aspect-square w-[13px]"
                        />
                        <div>Brouse By Category</div>
                    </div>
                    {navItems.map((item, index) => (
                        <NavItem key={index}>{item}</NavItem>
                    ))}
                </nav>
                <div className="flex gap-5 justify-center my-auto">
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