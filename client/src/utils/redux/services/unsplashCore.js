import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// If API runs out of requests, use this one
export const unsplashCoreApi = createApi({
  reducerPath: "unsplashCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.unsplash.com",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getRandomPhotos: builder.query({
      query: () => `photos/random?count=20`,
    }),
    getNaturePhotos: builder.query({
      query: () => `search/photos?query=nature?per_page=20`,
    }),
    getPuppyPhotos: builder.query({
      query: () => `search/photos?query=puppy?per_page=20`,
    }),
    getCatPhotos: builder.query({
      query: () => `search/photos?query=kitten?per_page=20`,
    }),
    getPicturesBySearch: builder.query({
      query: (search) => `search/photos?query=${search}?per_page=20`,
      //query: (search) => search will give ? instead of /
    }),
  }),
});

export const {
  useGetRandomPhotosQuery,
  useGetNaturePhotosQuery,
  useGetPuppyPhotosQuery,
  useGetCatPhotosQuery,
  useGetPicturesBySearchQuery,
} = unsplashCoreApi;
