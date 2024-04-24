import * as React from "react";
import Image from "next/image";
import { useLazyGetCategoriesQuery } from "@/store/api";
import Electronics from "@/assets/png/electronics.png";
import Jewelry from "@/assets/png/jewelry.png";
import Men from "@/assets/png/mens.png";
import Women from "@/assets/png/womens.png";
import Loader from "@/components/Loader/Loader";
import { useDispatch } from "react-redux";
import { setCategoryList } from "@/store/slice/productSlice";

function ImageCard({ data }) {
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

function CategorySlider() {
    
    function getImageUrl(title) {
        if (title === "electronics") {
            return Electronics
        }
        else if(title === "jewelery") {
            return Jewelry
        }
        else if(title === "men's clothing") {
            return Men
        }
        else if(title === "women's clothing") {
            return Women
        }
       
    }

    const [getCategories, { isLoading: categoryLoading }] = useLazyGetCategoriesQuery();
    const [categoryData, setCategoryData] = React.useState([]);
    const dispatch = useDispatch();
    
    React.useEffect(() => {
        getCategories().then(res => {
            const categoryList = res?.data
            const newCategories = categoryList?.map(title => {
                return {
                    title,
                    image: getImageUrl(title)
                }
            });
            setCategoryData(newCategories); 
            dispatch(setCategoryList(newCategories))
        }).catch(err => {
            console.log(err)
        });
       
    },[])
    return (
        <div className="category-slider-container">
            <section className="container-x flex flex-col justify-center px-0.5 max-md:px-5">
                {
                    categoryLoading ? <Loader /> : <div className="flex gap-5 justify-between py-4 pl-4 max-md:flex-wrap max-md:mr-2.5">
                        {categoryData?.map((data, index) => (
                            <ImageCard
                                key={index}
                                data={data}
                            />
                        ))}

                    </div>
                }
            </section>
      </div>
    );
}

export default CategorySlider;