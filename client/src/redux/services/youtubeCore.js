import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const youtubeCoreApi = createApi({
  reducerPath: "youtubeCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube-search6.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_RAPID_API_KEY);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopVideos: builder.query({
      query: () => "search/?query=trending&number=40&country=us&lang=en",
    }),
    // getChannelDetails: builder.query({
    //   query: () => `channel/details/?channelId=UCt9dsq-hnrMDk40elCbkYjg`,
    // }),
    // getSongsByGenre: builder.query({
    //   query: (genre) => `/charts/genre-world?genre_code=${genre}`,
    // }),
    // getSongsByCountry: builder.query({
    //   query: (countryCode) => `/charts/country?country_code=${countryCode}`,
    // }),
    // getSongsBySearch: builder.query({
    //   query: (searchTerm) =>
    //     `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    // }),
    // getArtistDetails: builder.query({
    //   query: (artistId) => `/artists/details?artist_id=${artistId}`,
    // }),
    // getSongDetails: builder.query({
    //   query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    // }),
    // getSongRelated: builder.query({
    //   query: ({ songid }) => `/tracks/related?track_id=${songid}`,
    // }),
  }),
});

export const { useGetTopVideosQuery } = youtubeCoreApi;

export const youtubeChannelApi = createApi({
  reducerPath: "youtubeChannelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube-v31.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", import.meta.env.VITE_RAPID_API_KEY);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getChannelDetails: builder.query({
      query: (channel_id) =>
        `channels?part=snippet%2Cstatistics&id=${channel_id}`,
    }),
    getVideoDetails: builder.query({
      query: (video_id) =>
        `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${video_id}`,
    }),
  }),
});

export const { useGetChannelDetailsQuery, useGetVideoDetailsQuery } =
  youtubeChannelApi;
