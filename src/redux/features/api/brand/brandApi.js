import { tagTypes } from "../../../tag-types";
import { baseApi } from "../baseApi/baseApi";

const token = (token = 'admin') => {
    if (token == 'admin') {
        return localStorage.getItem('admin')
    } else {
        return localStorage.getItem('customer')
    }
}


const brandApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addBrand: builder.mutation({
            query: (data) => ({
                url: `/admin/brands/store`,
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token()}`
                },
                body: data
            }),
            invalidatesTags: [tagTypes.brands]
        }),
        getBrands: builder.query({
            query: () => ({
                url: `/admin/brands/all`,
                headers: {
                    Authorization: `Bearer ${token()}`
                }
            }),
            providesTags: [tagTypes.brands]
        }),
        editBrand: builder.query({
            query: (id) => ({
                url: `/admin/brands/edit/${id}`,
                headers: {
                    Authorization: `Bearer ${token()}`
                }
            })
        }),
        updateBrand: builder.mutation({
            query: (data) => ({
                url: `/admin/brands/update`,
                method: 'POST',
                body: data,
                headers: {
                    Authorization: `Bearer ${token()}`
                }
            })
        }),
        listBrand: builder.query({
            query: () => ({
                url: `/admin/product/brand-lists`,
                headers: {
                    Authorization: `Bearer ${token()}`
                }
            })
        })
    })
})

export const { useAddBrandMutation, useGetBrandsQuery, useEditBrandQuery, useUpdateBrandMutation, useListBrandQuery } = brandApi