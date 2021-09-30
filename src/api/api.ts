const BASE_URL = 'https://api.themoviedb.org/3/movie';

export const BASE_IMG_URl = 'https://image.tmdb.org/t/p/w500';

export const getPopularMovie = async () => {
  const response = await fetch(`${BASE_URL}/popular?api_key=dad9a4999f6bf4df3692cec7a30d71eb&language=en-US&page=1`);

  return response.json();
};

export const getFoundMovie = async (query: string) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=dad9a4999f6bf4df3692cec7a30d71eb&query=${query}`);

  return response.json();
};

export const getMovieDetails = async (id: number) => {
  const response = await fetch(`${BASE_URL}/${id}?api_key=dad9a4999f6bf4df3692cec7a30d71eb&language=en-US`);

  return response.json();
};
