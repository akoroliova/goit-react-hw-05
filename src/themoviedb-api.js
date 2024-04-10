import axios from "axios";

export const fetchMoviesWithName = async (topic) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${topic}`,
    {
      params: {
        api_key: "7ca3a28f4fec61363cbde2f47de220bb",
        include_adult: false,
        language: "en-US",
      },
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2EzYTI4ZjRmZWM2MTM2M2NiZGUyZjQ3ZGUyMjBiYiIsInN1YiI6IjY2MGZjODJjNzRkNmMwMDE3Y2Q5NzlmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HqUcacNmOcwDGph4XweTjqFxrTDVdFvEyXlTv7jbX0U",
      },
    }
  );
  return response.data.results;
};

export const fetchTrending = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day`,
    {
      params: {
        api_key: "7ca3a28f4fec61363cbde2f47de220bb",
        include_adult: false,
        language: "en-US",
      },
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2EzYTI4ZjRmZWM2MTM2M2NiZGUyZjQ3ZGUyMjBiYiIsInN1YiI6IjY2MGZjODJjNzRkNmMwMDE3Y2Q5NzlmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HqUcacNmOcwDGph4XweTjqFxrTDVdFvEyXlTv7jbX0U",
      },
    }
  );
  return response.data.results;
};

export const fetchMovieById = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    {
      params: {
        api_key: "7ca3a28f4fec61363cbde2f47de220bb",
        include_adult: false,
        language: "en-US",
      },
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2EzYTI4ZjRmZWM2MTM2M2NiZGUyZjQ3ZGUyMjBiYiIsInN1YiI6IjY2MGZjODJjNzRkNmMwMDE3Y2Q5NzlmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HqUcacNmOcwDGph4XweTjqFxrTDVdFvEyXlTv7jbX0U",
      },
    }
  );
  return response.data;
};
