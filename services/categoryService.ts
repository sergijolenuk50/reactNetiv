import { createApi } from '@reduxjs/toolkit/query/react'
import { createBaseQuery } from '@/utils/createBaseQuerty'
import {ICategoryItem} from "@/interfaces/category";

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: createBaseQuery('categories'),
    tagTypes: ['Categories'],

    endpoints: (builder) => ({
        getCategories: builder.query<ICategoryItem[], string|null>({
            query: (token: string|null) => {
                console.log("token", token);
                return {
                    url: '',
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            },
        }),
    }),
})

export const { useGetCategoriesQuery } = categoryApi