import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsAPI = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://626faa4ef7d739495bda05e8.mockapi.io/',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContact: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsAPI;
