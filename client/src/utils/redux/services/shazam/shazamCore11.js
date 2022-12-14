import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi11 = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_RAPID_API_KEY_11);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts11: builder.query({ query: () => "/charts/world" }),
    getSongsByGenre11: builder.query({
      query: (genre) => `/charts/genre-world?genre_code=${genre}`,
    }),
    getSongsBySearch11: builder.query({
      query: (searchTerm) =>
        `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
    getSongDetails11: builder.query({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    }),
    getSongRelated11: builder.query({
      query: ({ songid }) => `/tracks/related?track_id=${songid}`,
    }),
  }),
});

export const {
  useGetTopCharts11Query,
  useGetSongsByGenre11Query,
  useGetSongsBySearch11Query,
  useGetSongDetails11Query,
  useGetSongRelated11Query,
} = shazamCoreApi11;

//Above API doesn't work for artist details, so I created a separate API for that

export const shazamCoreArtistApi11 = createApi({
  reducerPath: "shazamCoreArtistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v11",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_RAPID_API_KEY_11);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getArtistDetails11: builder.query({
      query: (artistId) => `/artists/details?artist_id=${artistId}`,
    }),
  }),
});

export const { useGetArtistDetails11Query } = shazamCoreArtistApi11;
