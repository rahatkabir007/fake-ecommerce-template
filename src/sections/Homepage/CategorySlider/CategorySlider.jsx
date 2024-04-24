import React, { useEffect, useState } from "react";
import { useLazyGetCategoriesQuery } from "@/store/api";
import Loader from "@/components/Loader/Loader";
import { useDispatch } from "react-redux";
import { setCategoryList } from "@/store/slice/productSlice";
import { getImageUrl } from "@/utils/getImageUrl";
import CategoryImageCard from "@/components/CategoryImageCard";

function CategorySlider() {
    
    const [getCategories, { isLoading: categoryLoading }] = useLazyGetCategoriesQuery();
    const [categoryData, setCategoryData] = useState([]);
    const dispatch = useDispatch();
    
    useEffect(() => {
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
                            <CategoryImageCard
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