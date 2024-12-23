import { tagTypes } from '../../../tag-types'
import { baseApi } from '../baseApi/baseApi'
let userD = JSON.parse(localStorage?.getItem('userData'))
let token = userD?.token
export const categoryApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    addCategory: builder.mutation({
      query: data => {
        return {
          url: '/admin/category/store',
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: data,
        }
      },
      invalidatesTags: [tagTypes.category],
    }),
    editCategory: builder.query({
      query: (id) => ({
        url: `/admin/category/edit/${id}`,
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
    }),

    updateCategory: builder.mutation({
      query: data => {
        return {
          url: `/admin/category/update`,
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`
          },
          body: data,
        }
      },
      invalidatesTags: [tagTypes.category],
    }),
    listCategory: builder.query({
      query: () => ({
        url: `/admin/category/all`,
        headers: {
          Authorization: `Bearer ${token}`
        },
      }),
      providesTags: [tagTypes.category]
    }),

    deleteCategory: builder.mutation({
      query: id => {
        return {
          url: `/admin/category/delete/${id}`,
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`
          },
        }
      },
      invalidatesTags: [tagTypes.category],
    }),

    getCategory: builder.query({
      query: () => ({
        url: '/api/front/categories',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: [tagTypes.category],
    }),

    getSingleCategory: builder.query({
      query: slug => ({
        url: `/api/front/category/${slug}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: [tagTypes.category],
    }),
  }),
})

export const {
  useGetCategoryQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
  useGetSingleCategoryQuery,
  useListCategoryQuery,
  useEditCategoryQuery
} = categoryApi
