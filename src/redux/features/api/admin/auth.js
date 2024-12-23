import { baseApi } from '../baseApi/baseApi'

const auth = baseApi.injectEndpoints({
  endpoints: builder => ({
    adminRegister: builder.mutation({
      query: data => ({
        url: '/admin/auth/registration',
        method: 'POST',
        body: data,
      }),
    }),
    adminLogin: builder.mutation({
      query: data => ({
        url: '/admin/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useAdminRegisterMutation, useAdminLoginMutation } = auth
