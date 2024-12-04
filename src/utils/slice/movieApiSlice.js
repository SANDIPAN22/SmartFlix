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
      query: (page = 1) => ({
        url: "/now_playing",
        params: { page },
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
      query: (page = 1) => ({
        url: "/popular",
        params: { page },
      }),
      providesTags: ["Movies"],
    }),
    getTopRatedMovies: builder.query({
      query: (page = 1) => ({
        url: "/top_rated",
        params: { page },
      }),
      providesTags: ["Movies"],
    }),
    getUpComingMovies: builder.query({
      query: (page = 1) => ({
        url: "/upcoming",
        params: { page },
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
