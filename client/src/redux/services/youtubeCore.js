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
    getVideoDetails: builder.query({
      query: (id) => `video/details/?videoId=${id}`,
    }),
    getRelatedVideos: builder.query({
      query: (id) => `recommendation/?videoId=${id}`,
    }),
  }),
});

export const {
  useGetTopVideosQuery,
  useGetVideoDetailsQuery,
  useGetRelatedVideosQuery,
} = youtubeCoreApi;

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
    // getVideoDetails: builder.query({
    //   query: (video_id) =>
    //     `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${video_id}`,
    // }),
  }),
});

export const { useGetChannelDetailsQuery } = youtubeChannelApi;
