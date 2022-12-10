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
    getPicturesBySearch: builder.query({
      query: (search) => `search/photos?query=${search}?per_page=20`,
      //query: (search) => search will give ? instead of /
    }),
  }),
});

// If API runs out of requests, use this one
// export const unsplashCoreApi = createApi({
//   reducerPath: "unsplashCoreApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://unsplash-data.p.rapidapi.com/search",
//     prepareHeaders: (headers) => {
//       headers.set("X-RapidAPI-Key", import.meta.env.VITE_RAPID_API_KEY);

//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     getPicturesBySearch: builder.query({
//       query: (search) => `collections?query=${search}&per_page=20&page=1`,
//     }),
//   }),
// });

export const { useGetPicturesBySearchQuery, useGetRandomPhotosQuery } =
  unsplashCoreApi;
