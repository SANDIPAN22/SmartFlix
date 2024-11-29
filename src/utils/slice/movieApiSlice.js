import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApiSlice = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/movie",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`
      );
      return headers;
    },
  }),
  tagTypes: ["Movies"],
  // keepUnusedDataFor: 5,

  endpoints: (builder) => ({
    getNowPlayingMovies: builder.query({
      query: () => ({
        url: "/now_playing",
      }),
      providesTags: ["Movies"],
      // keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetNowPlayingMoviesQuery } = movieApiSlice;
