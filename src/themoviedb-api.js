import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/search/movie";

//ex: https://api.themoviedb.org/3/search/movie?query=king&api_key=7ca3a28f4fec61363cbde2f47de220bb

export const fetchMoviesWithName = async (topic, page) => {
  const response = await axios.get(`?query=${topic}`, {
    params: {
      include_adult: false,
      language: "en-US",
      page: page,
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2EzYTI4ZjRmZWM2MTM2M2NiZGUyZjQ3ZGUyMjBiYiIsInN1YiI6IjY2MGZjODJjNzRkNmMwMDE3Y2Q5NzlmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HqUcacNmOcwDGph4XweTjqFxrTDVdFvEyXlTv7jbX0U",
    },
  });

  return response;
};
