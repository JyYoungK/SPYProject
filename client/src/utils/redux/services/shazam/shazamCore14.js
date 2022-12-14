import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi14 = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_RAPID_API_KEY_14);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts14: builder.query({ query: () => "/charts/world" }),
    getSongsByGenre14: builder.query({
      query: (genre) => `/charts/genre-world?genre_code=${genre}`,
    }),
    getSongsBySearch14: builder.query({
      query: (searchTerm) =>
        `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
    getSongDetails14: builder.query({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    }),
    getSongRelated14: builder.query({
      query: ({ songid }) => `/tracks/related?track_id=${songid}`,
    }),
  }),
});

export const {
  useGetTopCharts14Query,
  useGetSongsByGenre14Query,
  useGetSongsBySearch14Query,
  useGetSongDetails14Query,
  useGetSongRelated14Query,
} = shazamCoreApi14;

//Above API doesn't work for artist details, so I created a separate API for that

export const shazamCoreArtistApi14 = createApi({
  reducerPath: "shazamCoreArtistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v14",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_RAPID_API_KEY_14);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getArtistDetails14: builder.query({
      query: (artistId) => `/artists/details?artist_id=${artistId}`,
    }),
  }),
});

export const { useGetArtistDetails14Query } = shazamCoreArtistApi14;
