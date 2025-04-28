import { createApi } from '@reduxjs/toolkit/query/react'
import { createBaseQuery } from '@/utils/createBaseQuerty'
import { ILogin, ILoginResponse, IUserCreate } from '@/interfaces/account'

export const accountApi = createApi({
    reducerPath: 'accountApi',
    baseQuery: createBaseQuery('account'),
    tagTypes: ['Account'],

    endpoints: (builder) => ({
        login: builder.mutation<ILoginResponse, ILogin>({
            query: (data) => {
                return {
                    url: 'login',
                    method: 'POST',
                    body: data,
                }
            },
        }),
        register: builder.mutation<ILoginResponse, FormData>({
            query: (formData) => ({
                url: 'register',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['Account'],
        }),
    }),
})

export const { useLoginMutation, useRegisterMutation } = accountApi