import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi6 = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_RAPID_API_KEY_6);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts6: builder.query({ query: () => "/charts/world" }),
    getSongsByGenre6: builder.query({
      query: (genre) => `/charts/genre-world?genre_code=${genre}`,
    }),
    getSongsBySearch6: builder.query({
      query: (searchTerm) =>
        `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
    getSongDetails6: builder.query({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    }),
    getSongRelated6: builder.query({
      query: ({ songid }) => `/tracks/related?track_id=${songid}`,
    }),
  }),
});

export const {
  useGetTopCharts6Query,
  useGetSongsByGenre6Query,
  useGetSongsBySearch6Query,
  useGetSongDetails6Query,
  useGetSongRelated6Query,
} = shazamCoreApi6;

//Above API doesn't work for artist details, so I created a separate API for that

export const shazamCoreArtistApi6 = createApi({
  reducerPath: "shazamCoreArtistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v6",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_RAPID_API_KEY_6);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getArtistDetails6: builder.query({
      query: (artistId) => `/artists/details?artist_id=${artistId}`,
    }),
  }),
});

export const { useGetArtistDetails6Query } = shazamCoreArtistApi6;
