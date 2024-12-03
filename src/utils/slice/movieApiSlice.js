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

  endpoints: (builder) => ({
    getNowPlayingMovies: builder.query({
      query: () => ({
        url: "/now_playing",
      }),
      providesTags: ["Movies"],
    }),
    getMovieTrailer: builder.query({
      query: (movieId) => ({
        url: `${movieId}/videos`,
      }),
      providesTags: ["Movies"],
    }),
    getMovieSearch: builder.query({
      query: (movieQuery) => ({
        url: `https://api.themoviedb.org/3/search/movie?query=${movieQuery}&include_adult=true`,
      }),
      keepUnusedDataFor: 1,
      providesTags: ["Movies"],
    }),
    getPopularMovies: builder.query({
      query: () => ({
        url: "/popular",
      }),
      providesTags: ["Movies"],
    }),
    getTopRatedMovies: builder.query({
      query: () => ({
        url: "/top_rated",
      }),
      providesTags: ["Movies"],
    }),
    getUpComingMovies: builder.query({
      query: () => ({
        url: "/upcoming",
      }),
      providesTags: ["Movies"],
    }),
  }),
});

export const {
  useGetNowPlayingMoviesQuery,
  useGetMovieTrailerQuery,
  useGetUpComingMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetPopularMoviesQuery,
  useGetMovieSearchQuery,
} = movieApiSlice;
