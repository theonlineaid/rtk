import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Students } from "../../types/student";



export const studentApi = createApi({
    reducerPath: "studentApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://65fe7660b2a18489b38613c8.mockapi.io/api/v1',
        // setup url
        // prepareHeaders: (headers: Headers) => {
        //     headers.set("Access-Control-Allow-Origin", '*')
        // },
    }),
    tagTypes: ['students'],

    endpoints: (builder) => ({
        getStudents: builder.query<Students[], void>({
            query: () => '/students',
            providesTags: ['students'],
        }),
        createStudent: builder.mutation<void, Students>({
            query: (students) => ({
                url: '/students',
                method: 'POST',
                body: students,
            }),
            invalidatesTags: ['students'],
        }),
        deleteStudent: builder.mutation<void, string>({
            query: (id) => ({
                url: `/students/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['students'],
        }),
    })
})

export const { useLazyGetStudentsQuery, useGetStudentsQuery, useCreateStudentMutation } = studentApi;