import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi7 = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_RAPID_API_KEY_7);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts7: builder.query({ query: () => "/charts/world" }),
    getSongsByGenre7: builder.query({
      query: (genre) => `/charts/genre-world?genre_code=${genre}`,
    }),
    getSongsBySearch7: builder.query({
      query: (searchTerm) =>
        `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
    getSongDetails7: builder.query({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    }),
    getSongRelated7: builder.query({
      query: ({ songid }) => `/tracks/related?track_id=${songid}`,
    }),
  }),
});

export const {
  useGetTopCharts7Query,
  useGetSongsByGenre7Query,
  useGetSongsBySearch7Query,
  useGetSongDetails7Query,
  useGetSongRelated7Query,
} = shazamCoreApi7;

//Above API doesn't work for artist details, so I created a separate API for that

export const shazamCoreArtistApi7 = createApi({
  reducerPath: "shazamCoreArtistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v7",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_RAPID_API_KEY_7);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getArtistDetails7: builder.query({
      query: (artistId) => `/artists/details?artist_id=${artistId}`,
    }),
  }),
});

export const { useGetArtistDetails7Query } = shazamCoreArtistApi7;
