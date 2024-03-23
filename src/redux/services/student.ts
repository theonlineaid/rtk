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
            transformResponse: (response: Students[], meta, args: any) => {
                // if (args === 2) {
                return response.slice(0, 4);
            },
        }),

        // get single student 
        getSingleStudent: builder.query<Students, void>({
            query: (id) => `/students/${id}`,
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

        updateStudent: builder.mutation<void, Students>({
            query: ({ id, ...rest }) => ({
                url: `/students/${id}`,
                method: 'PUT',
                body: rest,
            }),
            invalidatesTags: ['students'],
        }),
    })
})

export const { useLazyGetStudentsQuery, useGetStudentsQuery, useCreateStudentMutation, useDeleteStudentMutation, useUpdateStudentMutation, useGetSingleStudentQuery } = studentApi;