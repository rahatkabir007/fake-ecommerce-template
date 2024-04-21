import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASEURL,
   
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    // getEmployees: builder.query({
    //   query: (optionalParam) => ({
    //     url: "/authentication/private/users",
    //     method: "GET",
    //     params: optionalParam,
    //   }),
    //   providesTags: ["getEmployee"],
    // }),
    // getEmployeeById: builder.query({
    //   query: (employeeId) => ({
    //     url: `/authentication/private/users/${employeeId}`,
    //     method: "GET",
    //   }),
    // }),
    // addEmployee: builder.mutation({
    //   query: (newEmployee) => ({
    //     url: "/authentication/private/users/",
    //     method: "POST",
    //     body: newEmployee,
    //   }),
    //   invalidatesTags: [{ type: "Employee", id: "List" }],
    // }),
    // updateEmployee: builder.mutation({
    //   query: ({ id, updatedEmployee }) => ({
    //     url: `/authentication/private/users/${id}/`,
    //     method: "PATCH",
    //     body: updatedEmployee,
    //   }),

    //   invalidatesTags: (result, error, { id }) => [
    //     { type: "Employee", id },
    //     { type: "Employee", id: "List" },
    //   ],
    // }),
    // deleteEmployee: builder.mutation({
    //   query: (id) => ({
    //     url: `/authentication/private/users/${id}/`,
    //     method: "DELETE",
    //   }),

    //   invalidatesTags: (result, error, id) => [
    //     { type: "Employee", id: "List" },
    //   ],
    // }),

  }),
});

export const {
  // useGetEmployeesQuery,
  // useAddEmployeeMutation,
  // useUpdateEmployeeMutation,
  // useDeleteEmployeeMutation,
  // useGetEmployeeByIdQuery,
  
} = api;
