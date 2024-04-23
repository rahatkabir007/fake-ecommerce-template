import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl:"https://fakestoreapi.com",

    }),
    tagTypes: [],
    endpoints: (builder) => ({
        getCategories: builder.query({
          query: () => ({
            url: "/products/categories",
            method: "GET",

          }),
        }),
      getProducts: builder.query({
        query: () => ({
          url: "/products",
          method: "GET",

        }),
      }),
        
    }),
});

export const {
    useGetCategoriesQuery,
  useLazyGetCategoriesQuery,
    useLazyGetProductsQuery,
} = api;
