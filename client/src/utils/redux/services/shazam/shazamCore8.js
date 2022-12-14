import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi8 = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_RAPID_API_KEY_8);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts8: builder.query({ query: () => "/charts/world" }),
    getSongsByGenre8: builder.query({
      query: (genre) => `/charts/genre-world?genre_code=${genre}`,
    }),
    getSongsBySearch8: builder.query({
      query: (searchTerm) =>
        `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
    getSongDetails8: builder.query({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    }),
    getSongRelated8: builder.query({
      query: ({ songid }) => `/tracks/related?track_id=${songid}`,
    }),
  }),
});

export const {
  useGetTopCharts8Query,
  useGetSongsByGenre8Query,
  useGetSongsBySearch8Query,
  useGetSongDetails8Query,
  useGetSongRelated8Query,
} = shazamCoreApi8;

//Above API doesn't work for artist details, so I created a separate API for that

export const shazamCoreArtistApi8 = createApi({
  reducerPath: "shazamCoreArtistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v8",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_RAPID_API_KEY_8);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getArtistDetails8: builder.query({
      query: (artistId) => `/artists/details?artist_id=${artistId}`,
    }),
  }),
});

export const { useGetArtistDetails8Query } = shazamCoreArtistApi8;
